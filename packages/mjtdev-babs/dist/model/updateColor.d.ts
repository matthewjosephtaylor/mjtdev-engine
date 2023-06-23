import { AbstractMesh } from "babylonjs";
export declare const HIDE: any[];
export declare const GLOSS: string[];
export type UpdateColorProps = {
    mesh: AbstractMesh;
    color: string;
    textureMatcher: RegExp;
    meshMatcher: RegExp;
};
export declare const updateColor: (props: UpdateColorProps) => void;
//# sourceMappingURL=updateColor.d.ts.map