import { Scene, Sprite, SpriteManager } from "babylonjs";
export type SpriteManagerOptions = Partial<{
    capacity: number;
    cellSize: {
        width: number;
        height: number;
    } | number;
    imgUrl: string;
}>;
export declare const getSpriteManager: (scene: Scene, name: string, options?: SpriteManagerOptions) => import("babylonjs").ISpriteManager | SpriteManager;
export declare const getSprite: (scene: Scene, name: string, spriteManagerName: string) => Sprite;
export declare const Sprites: {
    getSpriteManager: (scene: Scene, name: string, options?: SpriteManagerOptions) => import("babylonjs").ISpriteManager | SpriteManager;
    getSprite: (scene: Scene, name: string, spriteManagerName: string) => Sprite;
};
//# sourceMappingURL=Sprites.d.ts.map