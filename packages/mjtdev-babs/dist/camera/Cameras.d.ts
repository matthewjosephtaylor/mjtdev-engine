import { Vec3 } from "@mjtdev/math";
import { Camera } from "babylonjs";
export declare const CAMERA_MODES: {
    orthographic: number;
    perspective: number;
};
export type CameraModeMap = typeof CAMERA_MODES;
export type CameraOptions = Partial<{
    mode: keyof CameraModeMap;
    position: Vec3;
    minZ: number;
    maxZ: number;
    target: Vec3;
    orthoTop: number;
    orthoBottom: number;
    orthoLeft: number;
    orthoRight: number;
}>;
export type ArcRotateCameraOptions = Partial<CameraOptions & {
    alpha: number;
    beta: number;
    radius: number;
}>;
export type UniversalCameraOptions = Partial<CameraOptions & {
    rotation: Vec3;
}>;
export type AllCameraOptions = ArcRotateCameraOptions & UniversalCameraOptions;
export declare const Cameras: {
    getArcRotateCamera: (scene: import("babylonjs").Scene, name: string, options?: Partial<Partial<{
        mode: keyof CameraModeMap;
        position: Vec3;
        minZ: number;
        maxZ: number;
        target: Vec3;
        orthoTop: number;
        orthoBottom: number;
        orthoLeft: number;
        orthoRight: number;
    }> & {
        alpha: number;
        beta: number;
        radius: number;
    }>) => import("babylonjs").ArcRotateCamera;
    getCamera: <T extends Camera>(scene: import("babylonjs").Scene, name: string, producer: () => T) => T;
    updateCamera: (camera: Camera, options: AllCameraOptions) => void;
    getUniversalCamera: (scene: import("babylonjs").Scene, name: string, options?: Partial<Partial<{
        mode: keyof CameraModeMap;
        position: Vec3;
        minZ: number;
        maxZ: number;
        target: Vec3;
        orthoTop: number;
        orthoBottom: number;
        orthoLeft: number;
        orthoRight: number;
    }> & {
        rotation: Vec3;
    }>) => import("babylonjs").UniversalCamera;
    attachArcRotateCameraControls: (camera: import("babylonjs").ArcRotateCamera, options?: Partial<{
        keySensitivity: number;
        mouseSensitivity: number;
        parent: HTMLElement;
        action: () => void;
    }>) => import("@mjtdev/animate").AnimateState[];
    attachUniversalCameraControls: (camera: import("babylonjs").UniversalCamera, options?: Partial<{
        keySensitivity: number;
        mouseSensitivity: number;
        parent: HTMLElement;
    }>) => void;
    createTopDownCamera: (scene: import("babylonjs").Scene, name: string, { unitsTall, unitsWide, height, disposeActive, }?: Partial<{
        height: number;
        disposeActive: boolean;
        unitsTall: number;
        unitsWide: number;
    }>) => import("babylonjs").UniversalCamera;
    createDebugCamera: (scene: import("babylonjs").Scene, name: string, {}?: Partial<{}>) => void;
};
//# sourceMappingURL=Cameras.d.ts.map