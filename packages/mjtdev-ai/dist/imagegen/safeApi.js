import { Api } from "./api/AutomaticApi";
import { safe } from "../common/safe";
import { useImageGenState } from "./useImageGenState";
export const safeApi = (f) => {
    const { automaticBaseUrl } = useImageGenState.getState();
    const api = new Api({
        baseUrl: automaticBaseUrl,
    });
    return safe(() => f(api));
};
//# sourceMappingURL=safeApi.js.map