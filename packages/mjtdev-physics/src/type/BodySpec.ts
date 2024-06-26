import { Point2 } from "@mjtdev/math";
import { IBodyRenderOptions } from "matter-js";
import { BodyType } from "./BodyType";
import { Vertices } from "./Vertices";

export type BodySpec = Partial<{
  type: BodyType;
  x: number;
  y: number;
  width: number;
  height: number;
  chamfer: number;
  slope: number;
  radius: number;
  sides: number;
  vertexSets: Vertices[];
  label: string;
  frictionAir: number;
  isStatic: boolean;
  mass: number;
  density: number;
  rotation: number;
  position: Point2;
  render: IBodyRenderOptions;
}>;
