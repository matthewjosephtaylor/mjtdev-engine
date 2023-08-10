import { Point3 } from "@mjtdev/math";
import { LinesMesh, MeshBuilder, Scene } from "babylonjs";
import { c4 } from "../bab/c4";
import { v3 } from "../bab/v3";
import { getMesh } from "./getMesh";
import { MeshOptions, updateMesh } from "./updateMesh";

export const getLine = (
  scene: Scene,
  name: string,
  options: MeshOptions &
    Partial<{
      points: Point3[];
      colors: string[];
      updatable: boolean;
      useVertexAlpha: boolean;
    }>
) => {
  const { updatable = false } = options;

  return getMesh(
    scene,
    name,
    (instance: LinesMesh) => {
      return buildLineMesh(scene, name, {
        ...options,
        instance,
        // updatable: undefined,
      });
    },
    updatable
  );
};

const buildLineMesh = (
  scene: Scene,
  name: string,
  options: MeshOptions &
    Partial<{
      points: Point3[];
      colors: string[];
      updatable: boolean;
      useVertexAlpha: boolean;
      instance: LinesMesh;
    }>
) => {
  const {
    colors = [],
    points = [],
    color = "white",
    updatable = false,
    useVertexAlpha,
    instance,
  } = options;
  const pointColors = points
    .map((_, index) => colors[index] ?? color)
    .map((c) => c4(c));
  const fleshedPoints = points.map((p) => v3(p));
  const mesh = MeshBuilder.CreateLines(name, {
    points: fleshedPoints,
    colors: pointColors,
    updatable,
    useVertexAlpha,
    instance,
  });
  updateMesh(scene, mesh, options);
  return mesh;
};
