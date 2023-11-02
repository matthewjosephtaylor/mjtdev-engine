import { Runner } from "matter-js";
export const runRunner = (engine) => {
    const runner = Runner.create();
    Runner.run(runner, engine);
    return runner;
};
//# sourceMappingURL=runRunner.js.map