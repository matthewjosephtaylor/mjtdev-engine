import { Scene } from "babylonjs";
import { ModelBuilder, ModelPath } from "./ModelBuilder";
export declare const builder: (props?: {
    scene?: Scene;
    path?: ModelPath;
    exposure?: number;
    toneMappingEnabled?: boolean;
    addDefaultLights?: boolean;
    clearColor?: string;
}) => Promise<ModelBuilder>;
//# sourceMappingURL=builder.d.ts.map