/// <reference types="matter-js" />
export declare const Physics: {
    removeBody: (world: import("matter-js").World, label: string) => void;
    getBodyType: (world: import("matter-js").World, type: import(".").BodyType, id: string, options?: Partial<{
        type: import(".").BodyType;
        x: number;
        y: number;
        width: number;
        height: number;
        chamfer: number;
        slope: number;
        radius: number;
        sides: number;
        vertexSets: import("./type/Vertices").Vertices[];
        label: string;
        frictionAir: number;
        isStatic: boolean;
        mass: number;
        density: number;
        rotation: number;
        position: import("@mjtdev/math").Point2;
        render: import("matter-js").IBodyRenderOptions;
    }> & Partial<{
        addToWorld: boolean;
    }>) => import("matter-js").Body;
    getCompoundBody: (world: import("matter-js").World, id: string, parts: import("matter-js").Body[], options?: Partial<{
        type: import(".").BodyType;
        x: number;
        y: number;
        width: number;
        height: number;
        chamfer: number;
        slope: number;
        radius: number;
        sides: number;
        vertexSets: import("./type/Vertices").Vertices[];
        label: string;
        frictionAir: number;
        isStatic: boolean;
        mass: number;
        density: number;
        rotation: number;
        position: import("@mjtdev/math").Point2;
        render: import("matter-js").IBodyRenderOptions;
    }>) => import("matter-js").Body;
    updateBody: (body: import("matter-js").Body, options: Partial<{
        type: import(".").BodyType;
        x: number;
        y: number;
        width: number;
        height: number;
        chamfer: number;
        slope: number;
        radius: number;
        sides: number;
        vertexSets: import("./type/Vertices").Vertices[];
        label: string;
        frictionAir: number;
        isStatic: boolean;
        mass: number;
        density: number;
        rotation: number;
        position: import("@mjtdev/math").Point2;
        render: import("matter-js").IBodyRenderOptions;
    }>) => void;
    update: (engine: import("matter-js").Engine, deltaMs: number, lastDeltaMs?: number) => void;
    updateRender: (render: import("matter-js").Render) => void;
    createRender: (engine: import("matter-js").Engine, options?: Partial<{
        canvas: HTMLCanvasElement;
    } & import("matter-js").IRenderDefinition>) => import("matter-js").Render;
    helloWorld: ({ engine, canvas, run, }?: Partial<{
        canvas: HTMLCanvasElement;
        engine: import("matter-js").Engine;
        run: boolean;
    }>) => {
        engine: import("matter-js").Engine;
        canvas: HTMLCanvasElement;
        render: import("matter-js").Render;
    } | {
        engine: import("matter-js").Engine;
        canvas: HTMLCanvasElement;
        render?: undefined;
    };
    applyForce: (world: import("matter-js").World, id: string, force: import("@mjtdev/math").Point2, position?: import("@mjtdev/math").Point2) => void;
    createEngine: (options?: Partial<{
        enableSleeping: boolean;
        gravity: Partial<{
            scale: number;
            x: number;
            y: number;
        }>;
    }>) => import("matter-js").Engine;
    allBodies: (world: import("matter-js").World) => import("matter-js").Body[];
    findBody: (world: import("matter-js").World, labelOrPredicate: string | ((body: import("matter-js").Body) => boolean)) => import("matter-js").Body;
    findBodies: (world: import("matter-js").World, labelOrPredicate: string | ((body: import("matter-js").Body) => boolean)) => import("matter-js").Body[];
    queryCollisions: (world: import("matter-js").World, needle: string | import("@mjtdev/math").Point2, hayStack: string[]) => import("matter-js").Body[] | import("matter-js").ICollision[];
    runRunner: (engine: import("matter-js").Engine) => import("matter-js").Runner;
    runRender: (render: import("matter-js").Render) => void;
    setPosition: (world: import("matter-js").World, label: string, position?: import("@mjtdev/math").Point2) => void;
    getPosition: (world: import("matter-js").World, label: string) => import("@mjtdev/math").PointObject2;
    getRotation: (world: import("matter-js").World, label: string) => number;
    setRotation: (world: import("matter-js").World, id: string, rotation: number) => void;
    getInertia: (world: import("matter-js").World, label: string) => number;
    setInertia: (world: import("matter-js").World, label: string, inertia?: number) => void;
    getVelocity: (world: import("matter-js").World, label: string) => import("@mjtdev/math").PointObject2;
    setVelocity: (world: import("matter-js").World, label: string, velocity?: import("@mjtdev/math").Point2) => void;
    getMass: (world: import("matter-js").World, label: string) => number;
};
//# sourceMappingURL=Physics.d.ts.map