import { useUpdateDesk } from "./../component/Desk";
import { useFragId } from "./../component/Frag";
export const useRemoveFromDesk = () => {
    const setDeskCtx = useUpdateDesk();
    const id = useFragId();
    return () => {
        setDeskCtx((ctx) => {
            const updated = ctx.nodes.filter(([key, value]) => {
                return key !== id;
            });
            return {
                nodes: updated,
            };
        });
    };
};
//# sourceMappingURL=useRemoveFromDesk.js.map