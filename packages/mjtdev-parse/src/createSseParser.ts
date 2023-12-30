import { SseConsumer } from "./SseConsumer";
import { processSsePartial } from "./processSsePartial";
import { processSsePartialUntilNoMoreStops } from "./processSsePartialUntilNoMoreStops";

export const createSseParser = <T>({
  consumer,
  reader,
  onDone = () => {},
  dataParser = (data) => data as T,
  signal,
}: {
  signal?: AbortSignal;
  onDone?: () => void;
  reader: ReadableStreamDefaultReader<string>;
  dataParser?: (data: string) => T | undefined;
  consumer: SseConsumer<T>;
}): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      let partial = "";
      let finished = false;
      while (!signal?.aborted && !finished) {
        const { value: readValue = "", done } = await reader.read();

        if (!readValue && !done) {
          throw new Error(
            "Error reading from reader. undefined value but not done?"
          );
        }
        if (done) {
          if (partial.length > 0) {
            const foo = await processSsePartialUntilNoMoreStops({
              input: partial + readValue ?? "",
              consumer,
              done,
              reader,
              dataParser,
            });
          }
          await consumer(undefined, done);
          onDone();
          reader.cancel();
          finished = true;
          break;
        }
        partial = await processSsePartialUntilNoMoreStops({
          input: partial + readValue ?? "",
          consumer,
          done,
          reader,
          dataParser,
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
