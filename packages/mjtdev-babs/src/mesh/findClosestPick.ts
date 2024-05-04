import type { PickingInfo } from "@babylonjs/core/Collisions/pickingInfo";
import { isUndefined } from "@mjtdev/object";

export const findClosestPick = (picks: PickingInfo[]) => {
  if (isUndefined(picks)) {
    return undefined;
  }
  picks.sort((a, b) => {
    return a.distance - b.distance;
  });
  return picks[0];
};
