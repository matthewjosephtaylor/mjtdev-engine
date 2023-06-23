import { UniversalCamera } from "babylonjs";

import { Inputs } from "@mjtdev/input";
import { isDefined, isUndefined } from "@mjtdev/object";
import { v3 } from "../bab/v3";
import { pickMesh } from "../model/pickMesh";
import { walkMeshes } from "../model/walkMeshes";

export const attachUniversalCameraControls = (
  camera: UniversalCamera,
  options: Partial<{
    keySensitivity: number;
    mouseSensitivity: number;
    parent: HTMLElement;
  }> = {}
) => {
  const {
    keySensitivity = 0.05,
    mouseSensitivity = 0.05,
    parent = document.body,
  } = options;

  Inputs.listenToKey(
    {
      w: () => {
        camera.position.addInPlace(v3(0, 0, -keySensitivity));
      },
      a: () => {
        camera.rotation.y -= keySensitivity / 2;
      },
      s: () => {
        camera.position.addInPlace(v3(0, 0, keySensitivity));
      },
      d: () => {
        camera.rotation.y += keySensitivity / 2;
      },
      i: () => {
        camera.position.addInPlace(v3(0, keySensitivity, 0));
      },
      j: () => {
        camera.position.addInPlace(v3(keySensitivity, 0, 0));
      },
      k: () => {
        camera.position.addInPlace(v3(0, -keySensitivity, 0));
      },
      l: () => {
        camera.position.addInPlace(v3(-keySensitivity, 0, 0));
      },
    },
    {
      propagate: false,
      parent,
    }
  );

  Inputs.listenToMouse(
    {
      wheel: (event) => {
        if (event instanceof WheelEvent) {
          if (event.shiftKey) {
            const delta = event.deltaX * mouseSensitivity;
            camera.position.addInPlace(v3(0, -delta, 0));
            return;
          }

          const delta = event.deltaY * mouseSensitivity;
          camera.position.addInPlace(v3(0, 0, delta));
        }
      },
      click: (e) => {
        if (e.buttons === 0) {
          const position = e as unknown as HasLayerPosition;
          const scene = camera.getScene();
          const mesh = pickMesh(scene, position.layerX, position.layerY);
          if (isDefined(mesh)) {
            console.log({ mesh });
            walkMeshes(scene, (m) => {
              if (isUndefined(m.material)) {
                return;
              }
              m.material.wireframe = false;
            });
            mesh.material.wireframe = true;
          }
        }
      },
      auxclick: (e) => {
        if (e.button !== 1) {
          return;
        }
        const scene = camera.getScene();
        const mesh = pickMesh(scene, e.clientX, e.clientY);
        if (isUndefined(mesh)) {
          return;
        }
      },
      contextmenu: (e) => {
        console.log("should context");
      },
    },
    {
      propagate: false,
      parent,
    }
  );
};

export type HasLayerPosition = { layerX: number; layerY: number };
