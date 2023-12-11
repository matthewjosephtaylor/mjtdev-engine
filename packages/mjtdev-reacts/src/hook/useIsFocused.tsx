import { isUndefined } from "@mjtdev/object";
import { useDesk } from "../component/Desk";
import { useFragId } from "../component/Frag";

export const useIsFocused = () => {
  const desk = useDesk();
  const id = useFragId();
  if (!id) {
    console.warn("no id");
    return false;
  }
  if (!desk?.nodes) {
    console.warn(`no nodes for id ${id}`);
    return false;
  }

  const idNode = desk.nodes.find(([key, value]) => {
    return key === id;
  });
  if (!idNode) {
    return;
  }
  const idx = desk.nodes.indexOf(idNode);
  const length = desk.nodes.length;
  // console.log({ idx, length, id });
  const focused = idx === length - 1;
  return focused;
};
