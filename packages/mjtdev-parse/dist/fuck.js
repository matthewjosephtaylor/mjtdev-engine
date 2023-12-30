import { processSsePartial } from "./processSsePartial";
export const processSsePartialUntilNoMoreStops = async (params) => {
    let rest = await processSsePartial(params);
    if (rest.length === 0 || rest === params.partial) {
        return rest;
    }
    return processSsePartialUntilNoMoreStops({ ...params, partial: rest });
};
//# sourceMappingURL=fuck.js.map