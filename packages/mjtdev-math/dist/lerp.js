export function lerp(v0, v1, amount) {
    amount = amount < 0 ? 0 : amount;
    amount = amount > 1 ? 1 : amount;
    return v0 + (v1 - v0) * amount;
}
//# sourceMappingURL=lerp.js.map