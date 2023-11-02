import { Engine, Render } from "matter-js";
export declare const helloWorld: ({ engine, canvas, run, }?: Partial<{
    canvas: HTMLCanvasElement;
    engine: Engine;
    run: boolean;
}>) => {
    engine: Engine;
    canvas: HTMLCanvasElement;
    render: Render;
} | {
    engine: Engine;
    canvas: HTMLCanvasElement;
    render?: undefined;
};
//# sourceMappingURL=helloWorld.d.ts.map