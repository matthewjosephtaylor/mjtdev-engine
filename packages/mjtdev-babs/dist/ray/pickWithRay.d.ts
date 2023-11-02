import { AbstractMesh, Ray, Scene, TrianglePickingPredicate } from "babylonjs";
export declare const pickWithRay: (scene: Scene, ray: Ray, options?: Partial<{
    predicate: (mesh: AbstractMesh) => boolean;
    fastCheck: boolean;
    trianglePredicate: TrianglePickingPredicate;
}>) => import("babylonjs").PickingInfo;
//# sourceMappingURL=pickWithRay.d.ts.map