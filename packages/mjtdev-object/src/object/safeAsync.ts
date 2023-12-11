import { isDefined } from "./isDefined";
import { safe } from "./safe";
import { ValueProducer } from "./type/Producer";
import { valueOf } from "./valueOf";

export const safeAsync = async <R>(
  producer: () => Promise<R> | R,
  options: Partial<{
    quiet: boolean;
    def: R;
    onError: ValueProducer<string>;
  }> = {}
): Promise<R | undefined> => {
  const { quiet = false, def = undefined, onError } = options;

  return safe(async () => {
    const result = producer();
    if (result instanceof Promise) {
      return await result.catch((reason) => {
        if (!quiet) {
          console.error(reason);
          if (isDefined(onError)) {
            console.log(valueOf(onError));
          }
        }
        return def;
      });
    }
    return result;
  });
};
