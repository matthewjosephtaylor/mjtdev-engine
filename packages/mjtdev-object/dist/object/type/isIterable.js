export function isIterable(maybe) {
    const straw = maybe;
    return (typeof straw === "object" && typeof straw[Symbol.iterator] === "function");
}
//# sourceMappingURL=isIterable.js.map