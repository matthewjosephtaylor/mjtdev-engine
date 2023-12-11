import { isDefined } from "./isDefined";
import { ValueProducer } from "./type/Producer";
import { valueOf } from "./valueOf";

export const safe = <R>(
  producer: () => R,
  options: Partial<{
    quiet: boolean;
    def: R;
    onError: ValueProducer<string>;
  }> = {}
): R | undefined => {
  const { quiet = false, def = undefined, onError } = options;
  try {
    return producer();
  } catch (error) {
    if (!quiet) {
      console.error(error);
      if (isDefined(onError)) {
        console.log(valueOf(onError));
      }
    }
    return def;
  }
};
