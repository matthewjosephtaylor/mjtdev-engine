import { isUndefined } from "@mjtdev/object";
import { useUpdateDesk } from "./../component/Desk";
import { useFragId } from "./../component/Frag";
export const useBringToFront = () => {
    const setDesk = useUpdateDesk();
    const currentId = useFragId();
    return (id = currentId) => {
        setDesk((desk) => {
            const idNode = desk.nodes.find(([key, value]) => {
                return key === id;
            });
            if (isUndefined(idNode)) {
                console.log({ desk });
                throw new Error(`Window id: ${id} NOT in Desk!`);
            }
            const updated = desk.nodes.filter(([key, value]) => {
                return key !== id;
            });
            updated.push(idNode);
            return {
                nodes: updated,
            };
        });
    };
};
//# sourceMappingURL=useBringToFront.js.map