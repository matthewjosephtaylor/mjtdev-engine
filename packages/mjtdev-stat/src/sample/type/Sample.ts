import { ClearWhen } from "../../type/ClearWhen";

export type Sample = {
  name: string;
  values: unknown[];
  logEnabled: boolean;
  lastLogged: number;
  clearAfter: ClearWhen;
  frequencySecs: number;
  maxSamples: number
};
