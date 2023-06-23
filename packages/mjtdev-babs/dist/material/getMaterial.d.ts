import { Scene } from "babylonjs";
import { MaterialTypeMap } from "./MaterialTypeMap";
import { AllMaterialOptions } from "./Materials";
export declare const getMaterial: <T extends keyof MaterialTypeMap = keyof MaterialTypeMap>(scene: Scene, name: string, options?: AllMaterialOptions | T) => MaterialTypeMap[T];
//# sourceMappingURL=getMaterial.d.ts.map