/// <reference types="babylonjs" />
export declare const Meshes: {
    lookAt: (from: import("@mjtdev/math").Point2, to: import("@mjtdev/math").Point2) => number;
    getBox: (scene: import("babylonjs/scene").Scene, name: string, options?: Partial<{
        position: import("@mjtdev/math").PointObject2 | import("@mjtdev/math").PointObject3 | import("@mjtdev/math").PointObject4 | import("@mjtdev/math").Vec4 | import("@mjtdev/math").Vec3 | import("@mjtdev/math").Vec2;
        color: string;
        material: string;
        receiveShadows: boolean;
    }> & Partial<{
        width: number;
        height: number;
        depth: number;
        colors: string[];
    }>) => import("babylonjs/Meshes/mesh").Mesh;
    getPlane: (scene: import("babylonjs/scene").Scene, name: string, options?: Partial<{
        position: import("@mjtdev/math").PointObject2 | import("@mjtdev/math").PointObject3 | import("@mjtdev/math").PointObject4 | import("@mjtdev/math").Vec4 | import("@mjtdev/math").Vec3 | import("@mjtdev/math").Vec2;
        color: string;
        material: string;
        receiveShadows: boolean;
    }> & Partial<{
        width: number;
        height: number;
        tag: string | string[];
        billboard: boolean;
    }>) => import("babylonjs/Meshes/mesh").Mesh;
    getBoxInstance: (scene: import("babylonjs/scene").Scene, name: string, options: Partial<{
        position: import("@mjtdev/math").PointObject2 | import("@mjtdev/math").PointObject3 | import("@mjtdev/math").PointObject4 | import("@mjtdev/math").Vec4 | import("@mjtdev/math").Vec3 | import("@mjtdev/math").Vec2;
        color: string;
        material: string;
        receiveShadows: boolean;
    }> & Partial<{
        width: number;
        height: number;
        depth: number;
        receiveShadows: boolean;
    }>) => import("babylonjs/Meshes/instancedMesh").InstancedMesh;
    getSphere: (scene: import("babylonjs/scene").Scene, name: string, options: Partial<{
        position: import("@mjtdev/math").PointObject2 | import("@mjtdev/math").PointObject3 | import("@mjtdev/math").PointObject4 | import("@mjtdev/math").Vec4 | import("@mjtdev/math").Vec3 | import("@mjtdev/math").Vec2;
        color: string;
        material: string;
        receiveShadows: boolean;
    }> & Partial<{
        radius: number;
    }>) => import("babylonjs/Meshes/mesh").Mesh;
    getCylinder: (scene: import("babylonjs/scene").Scene, name: string, options?: Partial<{
        position: import("@mjtdev/math").PointObject2 | import("@mjtdev/math").PointObject3 | import("@mjtdev/math").PointObject4 | import("@mjtdev/math").Vec4 | import("@mjtdev/math").Vec3 | import("@mjtdev/math").Vec2;
        color: string;
        material: string;
        receiveShadows: boolean;
    }> & Partial<{
        height: number;
        arc: number;
        radius: number;
        tag: string | string[];
    }>) => import("babylonjs/Meshes/mesh").Mesh;
    getTorusKnot: (scene: import("babylonjs/scene").Scene, name: string, options?: Partial<{
        position: import("@mjtdev/math").PointObject2 | import("@mjtdev/math").PointObject3 | import("@mjtdev/math").PointObject4 | import("@mjtdev/math").Vec4 | import("@mjtdev/math").Vec3 | import("@mjtdev/math").Vec2;
        color: string;
        material: string;
        receiveShadows: boolean;
    }> & Partial<{
        radius: number;
        material: string;
    }>) => import("babylonjs/Meshes/mesh").Mesh;
    getLine: (scene: import("babylonjs/scene").Scene, name: string, options: Partial<{
        position: import("@mjtdev/math").PointObject2 | import("@mjtdev/math").PointObject3 | import("@mjtdev/math").PointObject4 | import("@mjtdev/math").Vec4 | import("@mjtdev/math").Vec3 | import("@mjtdev/math").Vec2;
        color: string;
        material: string;
        receiveShadows: boolean;
    }> & Partial<{
        points: import("@mjtdev/math").Point3[];
        colors: string[];
        updatable: boolean;
        useVertexAlpha: boolean;
    }>) => import("babylonjs/Meshes/linesMesh").LinesMesh;
    walkMeshes: (mesh: import("babylonjs/Meshes/abstractMesh").AbstractMesh | import("babylonjs/scene").Scene, walker: (mesh: import("babylonjs/Meshes/abstractMesh").AbstractMesh) => void) => any;
    pickMesh: (scene: import("babylonjs/scene").Scene, x: number, y: number, options?: Partial<{
        camera: import("babylonjs/Cameras/camera").Camera;
        predicate: (mesh: import("babylonjs/Meshes/abstractMesh").AbstractMesh) => boolean;
    }>) => import("babylonjs/Meshes/abstractMesh").AbstractMesh;
    getMesh: <T extends import("babylonjs/Meshes/mesh").Mesh | import("babylonjs/Meshes/instancedMesh").InstancedMesh>(scene: import("babylonjs/scene").Scene, name: string, producer?: (instance?: T) => T, updatable?: boolean) => T;
    getMeshAsync: <T_1 extends import("babylonjs/Meshes/mesh").Mesh | import("babylonjs/Meshes/instancedMesh").InstancedMesh>(scene: import("babylonjs/scene").Scene, name: string, producer?: () => Promise<T_1>) => Promise<T_1>;
    calcTopOfMeshWorldPosition: (mesh: import("babylonjs/Meshes/abstractMesh").AbstractMesh) => import("@mjtdev/math").Point3;
    mergeMeshes: (meshes: import("babylonjs/Meshes/mesh").Mesh[], options?: Partial<{
        disposeSource: boolean;
        allow32BitsIndices: boolean;
        meshSubclass: import("babylonjs/Meshes/mesh").Mesh;
        subdivideWithSubMeshes: boolean;
        multiMultiMaterials: boolean;
    }>) => import("babylonjs/Meshes/mesh").Mesh;
    getVoxModel: (scene: import("babylonjs/scene").Scene, name: string, src: string, options?: Partial<{
        position: import("@mjtdev/math").PointObject2 | import("@mjtdev/math").PointObject3 | import("@mjtdev/math").PointObject4 | import("@mjtdev/math").Vec4 | import("@mjtdev/math").Vec3 | import("@mjtdev/math").Vec2;
        color: string;
        material: string;
        receiveShadows: boolean;
    }> & Partial<{
        merged: boolean;
    }>) => import("babylonjs/Particles/solidParticleSystem").SolidParticleSystem;
    calcClientRectForMesh: (mesh: import("babylonjs/Meshes/abstractMesh").AbstractMesh) => {
        width: number;
        height: number;
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    updateArcRotateCameraPosition: (camera: import("babylonjs/Cameras/arcRotateCamera").ArcRotateCamera, position: import("@mjtdev/math").Point3) => void;
    findClosestPick: (picks: import("babylonjs/Collisions/pickingInfo").PickingInfo[]) => import("babylonjs/Collisions/pickingInfo").PickingInfo;
    destroyMesh: (scene: import("babylonjs/scene").Scene, name: string, options?: Partial<{
        recurse: boolean;
        disposeMaterials: boolean;
        disposeTextures: boolean;
    }>) => void;
    getMeshInstance: <T_2 extends import("babylonjs/Meshes/mesh").Mesh>(scene: import("babylonjs/scene").Scene, name: string, rootName: string, producer?: () => T_2) => import("babylonjs/Meshes/instancedMesh").InstancedMesh;
    getMeshInstanceAsync: <T_3 extends import("babylonjs/Meshes/mesh").Mesh>(scene: import("babylonjs/scene").Scene, name: string, rootName: string, producer?: () => Promise<T_3>) => Promise<import("babylonjs/Meshes/instancedMesh").InstancedMesh>;
    isInstancedMesh: (mesh: import("babylonjs/Meshes/abstractMesh").AbstractMesh) => mesh is import("babylonjs/Meshes/instancedMesh").InstancedMesh;
    pickMeshes: (scene: import("babylonjs/scene").Scene, x: number, y: number, options?: Partial<{
        camera: import("babylonjs/Cameras/camera").Camera;
        predicate: (mesh: import("babylonjs/Meshes/abstractMesh").AbstractMesh) => boolean;
    }>) => import("babylonjs/Collisions/pickingInfo").PickingInfo[];
    getPolyhedron: (scene: import("babylonjs/scene").Scene, name: string, options?: Partial<{
        position: import("@mjtdev/math").PointObject2 | import("@mjtdev/math").PointObject3 | import("@mjtdev/math").PointObject4 | import("@mjtdev/math").Vec4 | import("@mjtdev/math").Vec3 | import("@mjtdev/math").Vec2;
        color: string;
        material: string;
        receiveShadows: boolean;
    }> & Partial<{
        size: number;
        type: "tetrahedron" | "octahedron" | "dodecahedron" | "icosahedron" | "rhombicuboctahadron" | "triangularPrism" | "pentagonalPrism" | "hexagonalPrism" | "squarePyramid" | "pentagonalPyramid" | "triangularDipyramid" | "pentagonalDipryramid" | "elongatedSquareDipyramid" | "elongatedPentagonalDipyramid" | "elongatedPentagonalCupola";
        material: string;
    }>) => import("babylonjs/Meshes/mesh").Mesh;
};
//# sourceMappingURL=Meshes.d.ts.map