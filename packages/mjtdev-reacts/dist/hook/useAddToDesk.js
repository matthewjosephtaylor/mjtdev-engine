import { jsx as _jsx } from "react/jsx-runtime";
import { isDefined, isUndefined } from "@mjtdev/object";
import { Randoms } from "@mjtdev/random";
import { useDesk, useUpdateDesk } from "./../component/Desk";
import { Frag } from "./../component/Frag";
import { useBringToFront } from "./useBringToFront";
export const useAddToDesk = () => {
    const setDeskCtx = useUpdateDesk();
    const windowById = useWindowById();
    const bringToFront = useBringToFront();
    if (isUndefined(setDeskCtx)) {
        throw new Error("No Desk found");
    }
    return (node, id = Randoms.randomUuid()) => {
        const existing = windowById(id);
        if (isDefined(existing)) {
            bringToFront(id);
            return existing;
        }
        const frag = (_jsx(Frag, { id: id, children: node }, id));
        setDeskCtx((ctx) => {
            return {
                nodes: [...ctx.nodes, [id, frag]],
            };
        });
        return frag;
    };
};
export const useWindowById = () => {
    const desk = useDesk();
    return (id) => {
        return desk.nodes.find((entry) => {
            return id === entry[0];
        })?.[1];
    };
};
//# sourceMappingURL=useAddToDesk.js.map