export declare const Voxels: {
    animateExplosion: (particle: import("@babylonjs/core").SolidParticle, options?: Partial<{
        random: import("@mjtdev/random").NextRandom;
        radius: number;
        maxBounce: number;
        groundZ: number;
        speed: number;
        decay: number;
        dispose: () => void;
    }>) => void;
    voxDataToSps: (scene: import("@babylonjs/core").Scene, voxData: import("@mjtdev/magica-voxels").VoxData, name: string) => import("@babylonjs/core").SolidParticleSystem;
    voxDataToMergedModel: (scene: import("@babylonjs/core").Scene, voxData: import("@mjtdev/magica-voxels").VoxData, name: string) => import("@babylonjs/core").Mesh;
    voxDataToComplexModel: (scene: import("@babylonjs/core").Scene, voxData: import("@mjtdev/magica-voxels").VoxData, name: string) => import("@babylonjs/core").Mesh;
};
//# sourceMappingURL=Voxels.d.ts.map