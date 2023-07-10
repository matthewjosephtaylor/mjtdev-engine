export const memoryUsedMb = (): number => {
  if (performance["memory"] === undefined) {
    return 0;
  }
  // @ts-ignore
  return performance.memory.usedJSHeapSize / 1024 / 1024;
};
