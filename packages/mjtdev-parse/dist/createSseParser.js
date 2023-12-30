import { processSsePartialUntilNoMoreStops } from "./processSsePartialUntilNoMoreStops";
export const createSseParser = ({ consumer, reader, onDone = () => { }, dataParser = (data) => data, signal, }) => {
    return new Promise(async (resolve, reject) => {
        try {
            let partial = "";
            let finished = false;
            while (!signal?.aborted && !finished) {
                const { value: readValue = "", done } = await reader.read();
                if (!readValue && !done) {
                    throw new Error("Error reading from reader. undefined value but not done?");
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
        }
        catch (error) {
            reject(error);
        }
        finally {
            reader.cancel();
            resolve();
        }
    });
};
//# sourceMappingURL=createSseParser.js.map