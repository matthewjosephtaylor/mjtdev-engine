import { Asserts } from "@mjtdev/assert";
import { isDefined } from "@mjtdev/object";
import { IParticleSystem, Scene, SolidParticleSystem } from "babylonjs";

export type SpsOptions = Partial<{ useModelMaterial: boolean }>;

export const getParticleSystem = <
  T extends IParticleSystem | SolidParticleSystem
>(
  scene: Scene,
  name: string,
  producer: () => T = () => undefined
) => {
  const metadata = scene.metadata ?? {};
  const spsMaybe = metadata["solidParticleSystems"]?.[name];

  if (isDefined(spsMaybe)) {
    spsMaybe;
  }

  return producer();
};

export const getSolidParticleSystem = (
  scene: Scene,
  name: string,
  options: SpsOptions = {}
): SolidParticleSystem => {
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
