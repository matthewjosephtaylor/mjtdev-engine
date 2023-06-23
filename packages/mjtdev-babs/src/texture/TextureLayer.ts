import { StandardMaterial } from "babylonjs";
import { ModelMesh, ModelTexture } from "../model/ModelBuilder";
import { TextureImageSrc } from "./TextureImageSrc";

export type TextureLayer = Partial<{
  image: TextureImageSrc;
  color: string;
  size: number;
  _texture: ModelTexture;
  _mesh: ModelMesh;
  _material: StandardMaterial;
  _cached: boolean;
}>;
