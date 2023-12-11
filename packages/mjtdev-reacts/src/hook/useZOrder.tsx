import { isUndefined } from "@mjtdev/object";
import { useDesk } from "./../component/Desk";
import { useFragId } from "./../component/Frag";

export const useZOrder = () => {
  const desk = useDesk();
  const id = useFragId();
  if (!id) {
    return undefined;
  }
  if (!desk?.nodes) {
    return undefined;
  }

  const idNode = desk.nodes.find(([key, value]) => {
    return key === id;
  });
  if (!idNode) {
    return undefined;
  }
  return desk.nodes.indexOf(idNode);
};
