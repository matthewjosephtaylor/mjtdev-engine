export type MonitorFunction = (
  message: string,
  state: "CALL" | "RESPONSE" | "ERROR",
  traceId: number | string
) => void;
