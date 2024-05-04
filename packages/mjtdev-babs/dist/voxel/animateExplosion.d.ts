import type { SolidParticle } from "@babylonjs/core/Particles/solidParticle";
import { type NextRandom } from "@mjtdev/random";
export declare const animateExplosion: (particle: SolidParticle, options?: Partial<{
    random: NextRandom;
    radius: number;
    maxBounce: number;
    groundZ: number;
    speed: number;
    decay: number;
    dispose: () => void;
}>) => void;
//# sourceMappingURL=animateExplosion.d.ts.map