/// <reference types="babylonjs" />
export declare const Rays: {
    createRay: (origin: import("@mjtdev/math").Point3, direction: import("@mjtdev/math").Point3, length?: number) => import("babylonjs/Culling/ray").Ray;
    pickWithRay: (scene: import("babylonjs/scene").Scene, ray: import("babylonjs/Culling/ray").Ray, options?: Partial<{
        predicate: (mesh: import("babylonjs/Meshes/abstractMesh").AbstractMesh) => boolean;
        fastCheck: boolean;
        trianglePredicate: import("babylonjs/Culling/ray").TrianglePickingPredicate;
    }>) => import("babylonjs/Collisions/pickingInfo").PickingInfo;
};
//# sourceMappingURL=Rays.d.ts.map