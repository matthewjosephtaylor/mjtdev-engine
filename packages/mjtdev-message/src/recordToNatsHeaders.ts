import { isUndefined } from "@mjtdev/object";
import { headers as natsHeaders } from "nats.ws";

export const recordToNatsHeaders = (record?: Record<string, string>) => {
  if (isUndefined(record)) {
    return undefined;
  }
  const hs = natsHeaders();
  for (const [key, value] of Object.entries(record)) {
    hs.set(key, value);
  }

  return hs;
};
