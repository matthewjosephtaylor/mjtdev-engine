
export function* timesGen<T>(
  count: number,
  mapper: (index: number, stop: () => void) => T
): Generator<T> {
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
