type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
type JSONObject = {
    [key: string]: JSONValue;
};
type JSONArray = JSONValue[];
export declare function parseIncompleteJson(input: string): JSONValue | undefined;
export {};
//# sourceMappingURL=parseIncompleteJson.d.ts.map