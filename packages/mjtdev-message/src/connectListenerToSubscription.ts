import { isDefined, isUndefined } from "@mjtdev/object";
import * as msgpack from "@msgpack/msgpack";
import { type NatsConnection, headers as natsHeaders } from "nats.ws";
import type {
  ConnectionListener,
  ConnectionMap,
} from "./ConnectionMessageTypes";
import { errorToErrorDetail } from "./error/errorToErrorDetail";
import { natsHeadersToRecord } from "./natsHeadersToRecord";

export const connectListenerToSubscription = async <
  CM extends ConnectionMap,
  S extends keyof CM,
  E extends Record<string, string>
>({
  connection,
  subject,
  listener,
  options = {},
  env = {},
}: {
  subject: string;
  connection: NatsConnection;
  listener: ConnectionListener<CM, S, E>;
  options?: Partial<{ log: (message: string, extra: unknown) => void }>;
  env?: Partial<E>;
}) => {
  const { log = () => {} } = options;
  log("connectListenerToSubscription: subject: ", subject);
  const subscription = connection.subscribe(subject);

  for await (const message of subscription) {
    try {
      const detail = msgpack.decode(
        new Uint8Array(message.data)
      ) as CM[S]["request"];
      const headers = natsHeadersToRecord(message.headers) as CM[S]["headers"];
      const send = (
        response?: CM[S]["response"],
        options: Partial<{
          code: number;
          codeDescription: string;
          headers: Record<string, string>;
        }> = {}
      ) => {
        const hs = natsHeaders(options.code, options.codeDescription);
        if (isDefined(options.headers)) {
          for (const [key, value] of Object.entries(options.headers)) {
            hs.set(key, value);
          }
        }
        if (isUndefined(response)) {
          connection.publish(message.reply!);

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
      const sendError = async (
        error: unknown,

        options: Partial<{
          code: number;

          codeDescription: string;
          headers: Record<string, string>;
        }> = {}
      ) => {
        const errorDetail = await errorToErrorDetail({
          error,
          extra: [message.subject],
        });
        const hs = natsHeaders(
          options.code ?? 500,
          options.codeDescription ?? "Error"
        );
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
    } catch (error) {
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
