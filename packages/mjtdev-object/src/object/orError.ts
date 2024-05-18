
export const orError = <T>(
  f: () => T,
  options: Partial<{
    message?: string;
    cause?: unknown;
  }> = {}
): T | Error => {
  try {
    return f();
  } catch (error) {
    const { message, cause } = options;
    const proximateCause = new Error(message, { cause });
    if (error instanceof Error) {
      error["cause"] = proximateCause;
      return error;
    }
    throw new Error(message, { cause: [error, cause] });
  }
};
