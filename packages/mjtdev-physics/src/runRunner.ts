import { Runner } from "matter-js";

export const runRunner = (engine: Matter.Engine) => {
  const runner = Runner.create();
  Runner.run(runner, engine);
  return runner;
};
