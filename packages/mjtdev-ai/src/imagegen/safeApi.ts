import { Api } from "./api/AutomaticApi";
import { safe } from "../common/safe";
import { useImageGenState } from "./useImageGenState";

export const safeApi = <T>(f: (api: Api<unknown>) => T): T | undefined => {
  const { automaticBaseUrl } = useImageGenState.getState();
  const api = new Api({
    baseUrl: automaticBaseUrl,
  });
  return safe(() => f(api));
};
