import { Type } from "@sinclair/typebox";
import ts from "typescript";
/**
 * Parses a TypeScript type definition and converts it to a TypeBox schema.
 * @param typeText The TypeScript type definition as a string.
 * @returns The corresponding TypeBox schema.
 */
export const typeTextToSchema = (typeText) => {
    // Create a source file from the type definition string
    const sourceFile = ts.createSourceFile("temp.ts", typeText, ts.ScriptTarget.Latest, true);
    // Extract the type alias declaration node
    const typeAlias = sourceFile.statements.find(ts.isTypeAliasDeclaration);
    if (!typeAlias) {
        throw new Error("Invalid type definition");
    }
    // Extract the type node from the type alias
    const typeNode = typeAlias.type;
    const typeName = typeAlias.name.text; // Extract type name for $id
    // Convert the TypeScript type node to a TypeBox schema with $id
    const schema = convertNodeToSchema(typeNode); // Temporarily using 'any' to modify $id
    schema.$id = typeName;
    return schema;
};
/**
 * Converts a TypeScript type node to a TypeBox schema.
 * @param node The TypeScript type node.
 * @returns The corresponding TypeBox schema.
 */
const convertNodeToSchema = (node) => {
    switch (node.kind) {
        case ts.SyntaxKind.StringKeyword:
            return Type.String();
        case ts.SyntaxKind.NumberKeyword:
            return Type.Number();
        case ts.SyntaxKind.BooleanKeyword:
            return Type.Boolean();
        case ts.SyntaxKind.NullKeyword:
            return Type.Null();
        case ts.SyntaxKind.UndefinedKeyword:
            return Type.Undefined();
        case ts.SyntaxKind.ArrayType:
            return Type.Array(convertNodeToSchema(node.elementType));
        case ts.SyntaxKind.TypeLiteral:
            const members = node.members;
            const properties = {};
            let additionalProperties;
            members.forEach((member) => {
                if (ts.isPropertySignature(member) &&
                    member.name
                //  &&
                // ts.isIdentifier(member.name)
                ) {
                    // const key =  member.name.text;
                    const key = ts.isIdentifier(member.name)
                        ? member.name.text
                        : member.name.getText();
                    let value = member.type
                        ? convertNodeToSchema(member.type)
                        : Type.Any();
                    // Handle optional properties
                    if (member.questionToken) {
                        value = Type.Optional(value);
                    }
                    // Extract comment for description
                    const description = getCommentForNode(member);
                    if (description) {
                        value.description = description; // Temporarily using 'any' to modify description
                    }
                    properties[key] = value;
                }
                else if (ts.isIndexSignatureDeclaration(member)) {
                    const keyType = member.parameters[0].type;
                    const valueType = member.type;
                    if (keyType && valueType) {
                        const valueSchema = convertNodeToSchema(valueType);
                        // Ensure the key type is a string for Type.Record
                        if (keyType.kind === ts.SyntaxKind.StringKeyword) {
                            additionalProperties = valueSchema;
                        }
                        else {
                            throw new Error("Only string keys are supported in index signatures.");
                        }
                    }
                }
            });
            const objectSchema = Type.Object(properties);
            if (additionalProperties) {
                objectSchema.additionalProperties = additionalProperties;
            }
            return objectSchema;
        case ts.SyntaxKind.UnionType:
            return Type.Union(node.types.map((typeNode) => convertNodeToSchema(typeNode)));
        case ts.SyntaxKind.LiteralType: {
            const literalNode = node;
            if (ts.isStringLiteral(literalNode.literal)) {
                return Type.Literal(literalNode.literal.text);
            }
            else if (ts.isNumericLiteral(literalNode.literal)) {
                return Type.Literal(Number(literalNode.literal.text));
            }
            else if (literalNode.literal.kind === ts.SyntaxKind.TrueKeyword) {
                return Type.Literal(true);
            }
            else if (literalNode.literal.kind === ts.SyntaxKind.FalseKeyword) {
                return Type.Literal(false);
            }
            throw new Error(`Unsupported literal type: ${ts.SyntaxKind[literalNode.literal.kind]}`);
        }
        case ts.SyntaxKind.TypeReference: {
            const typeReferenceNode = node;
            const typeName = typeReferenceNode.typeName.getText();
            if (typeName === "Array" && typeReferenceNode.typeArguments) {
                const elementType = typeReferenceNode.typeArguments[0];
                return Type.Array(convertNodeToSchema(elementType));
            }
            else if (typeName === "Record" && typeReferenceNode.typeArguments) {
                const [keyType, valueType] = typeReferenceNode.typeArguments;
                if (keyType && valueType) {
                    // Ensure the keyType is always a string schema
                    if (keyType.kind === ts.SyntaxKind.StringKeyword) {
                        return Type.Record(Type.String(), convertNodeToSchema(valueType));
                    }
                }
            }
            throw new Error(`Unsupported type reference: ${typeName}`);
        }
        default:
            throw new Error(`Unsupported type: ${ts.SyntaxKind[node.kind]}`);
    }
};
/**
 * Extracts comments associated with a node.
 * @param node The TypeScript node to extract comments from.
 * @returns The comments as a string or undefined if no comments are found.
 */
const getCommentForNode = (node) => {
    const sourceFile = node.getSourceFile();
    const fullText = sourceFile.getFullText();
    // Collect leading comments
    const leadingCommentRanges = ts.getLeadingCommentRanges(fullText, node.getFullStart()) || [];
    // Collect trailing comments on the same line
    const trailingCommentRanges = ts.getTrailingCommentRanges(fullText, node.end) || [];
    const comments = [...leadingCommentRanges, ...trailingCommentRanges]
        .map((range) => {
        const comment = fullText.slice(range.pos, range.end).trim();
        if (comment.startsWith("//")) {
            return comment.slice(2).trim();
        }
        else if (comment.startsWith("/**") && comment.endsWith("*/")) {
            return comment.slice(3, -2).replace(/\*/g, "").trim();
        }
        return comment;
    })
        .join(" ")
        .trim();
    return comments || undefined;
};
// Example usage
// const schema = typeTextToSchema(`
// /**
//  * Visual Novel Character information
//  */
// type VisualNovelCharacter = {
//   id: string; // Unique identifier for the character
//   name: string; // Character's name
//   age?: number; // Character's age (optional)
//   gender: 'male' | 'female' | 'other'; // Character's gender
//   description: string; // Brief description of the character
//   imageUrl: string; // URL to the character's image
//   relationships?: { // Optional object describing the character's relationships
//     [key: string]: string; // Key-value pairs where the key is the relationship type (e.g., 'friend', 'family') and the value is the name of the related character
//   };
//   personalityTraits?: string[]; // Array of personality traits (optional)
//   backgroundColor?: string; // Background color for the character's dialogue (optional)
// };
// `);
// console.log(JSON.stringify(schema, null, 2));
//# sourceMappingURL=typeTextToSchema.js.map