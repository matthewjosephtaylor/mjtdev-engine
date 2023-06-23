import { IParticleSystem, Scene, SolidParticleSystem } from "babylonjs";
export type SpsOptions = Partial<{
    useModelMaterial: boolean;
}>;
export declare const getParticleSystem: <T extends SolidParticleSystem | IParticleSystem>(scene: Scene, name: string, producer?: () => T) => T;
export declare const getSolidParticleSystem: (scene: Scene, name: string, options?: SpsOptions) => SolidParticleSystem;
export declare const Particles: {
    getSolidParticleSystem: (scene: Scene, name: string, options?: SpsOptions) => SolidParticleSystem;
};
//# sourceMappingURL=Particles.d.ts.map