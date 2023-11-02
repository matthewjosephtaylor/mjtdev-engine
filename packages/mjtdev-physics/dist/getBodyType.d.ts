import { World } from "matter-js";
import { BodySpec } from "./type/BodySpec";
import { BodyType } from "./type/BodyType";
import { PhysicsBody } from "./type/PhysicsTypes";
export declare const getBodyType: (world: World, type: BodyType, id: string, options?: BodySpec & Partial<{
    addToWorld: boolean;
}>) => PhysicsBody;
//# sourceMappingURL=getBodyType.d.ts.map