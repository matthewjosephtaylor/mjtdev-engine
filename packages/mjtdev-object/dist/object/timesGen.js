export function* timesGen(count, mapper) {
    let stopped = false;
    for (let i = 0; i < count; i++) {
        if (stopped) {
            return;
        }
        yield mapper(i, () => {
            stopped = true;
        });
    }
}
//# sourceMappingURL=timesGen.js.map