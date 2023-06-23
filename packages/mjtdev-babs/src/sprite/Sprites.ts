import { assertValue } from "@mjtdev/assert/dist/assertValue";
import { isDefined, isUndefined } from "@mjtdev/object";
import { Scene, Sprite, SpriteManager } from "babylonjs";
import { getMesh } from "../mesh/getMesh";

export type SpriteManagerOptions = Partial<{
  capacity: number;
  cellSize: { width: number; height: number } | number;
  imgUrl: string;
}>;

export const getSpriteManager = (
  scene: Scene,
  name: string,
  options: SpriteManagerOptions = {}
) => {
  const managerMaybe = scene?.spriteManagers?.find((sm) => sm.name === name);
  if (isDefined(managerMaybe)) {
    return managerMaybe;
  }
  const { capacity, cellSize, imgUrl } = options;
  return new SpriteManager(name, imgUrl, capacity, cellSize, scene);
};

export const getSprite = (
  scene: Scene,
  name: string,
  spriteManagerName: string
): Sprite => {
  const spriteManager = assertValue(getSpriteManager(scene, spriteManagerName));
  const spriteMaybe = spriteManager?.sprites?.find((s) => s.name === name);
  if (isDefined(spriteMaybe)) {
    return spriteMaybe;
  }
  return new Sprite(name, spriteManager);
};
export const Sprites = { getSpriteManager, getSprite };
