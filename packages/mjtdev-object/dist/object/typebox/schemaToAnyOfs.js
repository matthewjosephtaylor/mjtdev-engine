import { generateTypeScriptType } from "./generateTypeScriptType";
export const schemaToAnyOfs = (schema) => {
    if (!schema) {
        return [];
    }
    if (schema.anyOf) {
        return schema.anyOf.map(generateTypeScriptType).map((v) => v.replace(/^'/, "").replace(/'$/, ""));
    }
    return [];
};
//# sourceMappingURL=schemaToAnyOfs.js.map