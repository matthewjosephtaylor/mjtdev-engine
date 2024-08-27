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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            return Type.Object(Object.fromEntries(node.members.map((member) => {
                if (ts.isPropertySignature(member) &&
                    member.name &&
                    ts.isIdentifier(member.name)) {
                    const key = member.name.text;
                    const value = member.type
                        ? convertNodeToSchema(member.type)
                        : Type.Any();
                    // Extract comment for description
                    const description = getCommentForNode(member);
                    if (description) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        value.description = description; // Temporarily using 'any' to modify description
                    }
                    return [key, value];
                }
                throw new Error("Unsupported type member");
            })));
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
        case ts.SyntaxKind.TypeReference:
            // eslint-disable-next-line no-case-declarations
            const typeName = node.typeName.getText();
            if (typeName === "Record") {
                const [keyType, valueType] = node.typeArguments || [];
                if (keyType && valueType) {
                    // Ensure the keyType is always a string schema
                    if (keyType.kind === ts.SyntaxKind.StringKeyword) {
                        return Type.Record(Type.String(), convertNodeToSchema(valueType));
                    }
                }
            }
            throw new Error(`Unsupported type reference: ${typeName}`);
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
            return comment.slice(3, -2).trim();
        }
        return comment;
    })
        .join(" ")
        .replace(/\*+/g, "") // Remove extra '*' characters typically found in block comments
        .trim();
    return comments || undefined;
};
//# sourceMappingURL=parseTypeTextToSchema.js.map