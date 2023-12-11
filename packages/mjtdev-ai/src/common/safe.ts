export const safe = <T>(
  f: () => T,
  onError: (error: unknown) => T | undefined = (e) => {
    console.log(e);
    return undefined;
  }
): T | undefined => {
  try {
    return f();
  } catch (error) {
    return onError(error);
  }
};
