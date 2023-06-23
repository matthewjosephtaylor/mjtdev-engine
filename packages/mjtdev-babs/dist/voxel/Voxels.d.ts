/// <reference types="babylonjs" />
export declare const Voxels: {
    animateExplosion: (particle: import("babylonjs/Particles/solidParticle").SolidParticle, options?: Partial<{
        random: import("@mjtdev/random").NextRandom;
        radius: number;
        maxBounce: number;
        groundZ: number;
        speed: number;
        decay: number;
        dispose: () => void;
    }>) => void;
    voxDataToSps: (scene: import("babylonjs/scene").Scene, voxData: import("@mjtdev/magica-voxels").VoxData, name: string) => import("babylonjs/Particles/solidParticleSystem").SolidParticleSystem;
    voxDataToMergedModel: (scene: import("babylonjs/scene").Scene, voxData: import("@mjtdev/magica-voxels").VoxData, name: string) => import("babylonjs/Meshes/mesh").Mesh;
    voxDataToComplexModel: (scene: import("babylonjs/scene").Scene, voxData: import("@mjtdev/magica-voxels").VoxData, name: string) => import("babylonjs/Meshes/mesh").Mesh;
};
//# sourceMappingURL=Voxels.d.ts.map