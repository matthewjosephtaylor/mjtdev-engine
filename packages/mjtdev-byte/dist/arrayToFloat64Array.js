export const arrayToFloat64Array = (arr) => {
    const numbers = arr.flatMap((v) => {
        if (typeof v === "number") {
            return [v];
        }
        return JSON.stringify(v)
            .split("")
            .map((s) => s.codePointAt(0));
    });
    return new Float64Array(numbers.length).map((_, i) => numbers[i]);
};
//# sourceMappingURL=arrayToFloat64Array.js.map