import type { AnimateState } from "@mjtdev/animate";
import type { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
export declare const attachArcRotateCameraControls: (camera: ArcRotateCamera, options?: Partial<{
    keySensitivity: number;
    mouseSensitivity: number;
    parent: HTMLElement;
    action: () => void;
}>) => AnimateState[];
//# sourceMappingURL=attachArcRotateCameraControls.d.ts.map