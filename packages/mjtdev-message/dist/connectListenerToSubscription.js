import { isDefined, isUndefined } from "@mjtdev/object";
import * as msgpack from "@msgpack/msgpack";
import { headers as natsHeaders } from "nats.ws";
import { errorToErrorDetail } from "./error/errorToErrorDetail";
import { natsHeadersToRecord } from "./natsHeadersToRecord";
export const connectListenerToSubscription = async ({ connection, subject, listener, options = {}, env = {}, }) => {
    const { log = () => { } } = options;
    log("connectListenerToSubscription: subject: ", subject);
    const subscription = connection.subscribe(subject);
    for await (const message of subscription) {
        try {
            const detail = msgpack.decode(new Uint8Array(message.data));
            const headers = natsHeadersToRecord(message.headers);
            const send = (response, options = {}) => {
                const hs = natsHeaders(options.code, options.codeDescription);
                if (isDefined(options.headers)) {
                    for (const [key, value] of Object.entries(options.headers)) {
                        hs.set(key, value);
                    }
                }
                if (isUndefined(response)) {
                    connection.publish(message.reply);
                    // message.respond(new Uint8Array(new ArrayBuffer(0)), {
                    //   headers: hs,
                    // });
                    return;
                }
                const responseMsg = msgpack.encode(response);
                message.respond(responseMsg, {
                    headers: hs,
                });
            };
            const sendError = async (error, options = {}) => {
                const errorDetail = await errorToErrorDetail({
                    error,
                    extra: [message.subject],
                });
                const hs = natsHeaders(options.code ?? 500, options.codeDescription ?? "Error");
                if (isDefined(options.headers)) {
                    for (const [key, value] of Object.entries(options.headers)) {
                        hs.set(key, value);
                    }
                }
                message.respond(msgpack.encode(errorDetail), {
                    headers: hs,
                });
            };
            const result = await listener({
                detail,
                headers,
                env,
                send,
                sendError,
                // setHeader: (key, value) => {
                //   hs.set(key as string, value);
                // },
                // setCode: (code, description) => {
                //   responseHeaders.code = code;
                //   responseHeaders.description = description;
                // },
            });
            const reply = message.reply;
            if (isUndefined(reply)) {
                continue;
            }
            send(result);
        }
        catch (error) {
            log("connectListenerToSubscription: error", error);
            const errorDetail = await errorToErrorDetail({
                error,
                extra: [message.subject],
            });
            const hs = natsHeaders(500, "Listener Error");
            message.respond(msgpack.encode(errorDetail), {
                headers: hs,
            });
        }
    }
};
//# sourceMappingURL=connectListenerToSubscription.js.map