import type { MaterialTypeMap } from "./MaterialTypeMap";
import type { AllMaterialOptions } from "./Materials";
import type { Scene } from "@babylonjs/core/scene";
export declare const getMaterial: <T extends keyof MaterialTypeMap = keyof MaterialTypeMap>(scene: Scene, name: string, options?: T | AllMaterialOptions) => MaterialTypeMap[T];
//# sourceMappingURL=getMaterial.d.ts.map