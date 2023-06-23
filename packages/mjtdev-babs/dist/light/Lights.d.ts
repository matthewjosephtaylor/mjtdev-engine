/// <reference types="babylonjs" />
import { Vec3 } from "@mjtdev/math";
export type LightOptions = Partial<{
    intensity: number;
}>;
export type HemisphericLightOptions = Partial<LightOptions & {
    direction: Vec3;
}>;
export type PointLightOptions = Partial<LightOptions & {
    position: Vec3;
}>;
export type AllLightOptions = LightOptions & HemisphericLightOptions & PointLightOptions;
export declare const Lights: {
    getLight: <T extends import("babylonjs/Lights/light").Light>(scene: import("babylonjs/scene").Scene, name: string, producer: () => T) => T;
    getHemisphericLight: (scene: import("babylonjs/scene").Scene, name: string, options?: Partial<Partial<{
        intensity: number;
    }> & {
        direction: Vec3;
    }>) => void;
    getPointLight: (scene: import("babylonjs/scene").Scene, name: string, options?: Partial<Partial<{
        intensity: number;
    }> & {
        position: Vec3;
    }>) => void;
    updateLight: (light: import("babylonjs/Lights/light").Light, options: AllLightOptions) => void;
};
//# sourceMappingURL=Lights.d.ts.map