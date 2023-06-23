import { isDefined } from "@mjtdev/object";
import { SolidParticleSystem } from "babylonjs";
export const getParticleSystem = (scene, name, producer = () => undefined) => {
    const metadata = scene.metadata ?? {};
    const spsMaybe = metadata["solidParticleSystems"]?.[name];
    if (isDefined(spsMaybe)) {
        spsMaybe;
    }
    return producer();
};
export const getSolidParticleSystem = (scene, name, options = {}) => {
    return getParticleSystem(scene, name, () => {
        const { useModelMaterial = false } = options;
        const sps = new SolidParticleSystem(name, scene, {
            useModelMaterial,
        });
        const metadata = scene.metadata ?? {};
        scene.metadata = metadata;
        const spsMap = metadata["solidParticleSystems"] ?? {};
        metadata["solidParticleSystems"] = spsMap;
        spsMap[name] = sps;
        return sps;
    });
};
export const Particles = { getSolidParticleSystem };
//# sourceMappingURL=Particles.js.map