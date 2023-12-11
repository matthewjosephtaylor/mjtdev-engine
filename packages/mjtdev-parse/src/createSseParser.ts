import { isDefined, safe } from "@mjtdev/object";
import { decodeSseValue } from "./decodeSseValue";

export const createSseParser = <T>({
  consumer,
  reader,
  onDone = () => {},
  dataParser = (data) => JSON.parse(data),
}: {
  onDone?: () => void;
  reader: ReadableStreamDefaultReader<string>;
  dataParser: (data: string) => T | undefined;
  consumer: (value: T | undefined, done: boolean) => boolean | undefined | void;
}): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      let partial = "";
      while (true) {
        const { value: rawValue, done } = await reader.read();
        if (done) {
          consumer(undefined, done);
          onDone();
          reader.cancel();
          break;
        }
        if (!/\n$/.test(rawValue)) {
          partial = partial + rawValue;
          continue;
        }
        const value = partial + rawValue;
        const decodes = decodeSseValue(value);
        decodes?.forEach((decoded) => {
          if (isDefined(decoded) && decoded.field === "data") {
            const chunk = safe(() => dataParser(decoded.value), {
              onError: `${decoded.value}`,
            }) as T;
            if (isDefined(chunk)) {
              // TODO need to write a full parser for SSE
              partial = "";
              if (consumer(chunk, done)) {
                reader.cancel();
              }
            } else {
              console.warn(`bad partial: '${partial}'`);
              partial = "";
              // consumer(undefined, true);
              // reader.cancel();
            }
          } else {
            // something we don't care about...
          }
        });
      }
    } catch (error) {
      reject(error);
    } finally {
      reader.cancel();
      resolve();
    }
  });
};
