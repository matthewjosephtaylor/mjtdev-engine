import { applyForce } from "./applyForce";
import { allBodies } from "./allBodies";
import { createEngine } from "./createEngine";
import { createRender } from "./createRender";
import { getBodyType } from "./getBodyType";
import { getInertia } from "./getInertia";
import { getMass } from "./getMass";
import { getPosition } from "./getPosition";
import { getRotation } from "./getRotation";
import { getVelocity } from "./getVelocity";
import { helloWorld } from "./helloWorld";
import { removeBody } from "./removeBody";
import { runRender } from "./runRender";
import { runRunner } from "./runRunner";
import { setInertia } from "./setInertia";
import { setPosition } from "./setPosition";
import { setRotation } from "./setRotation.";
import { setVelocity } from "./setVelocity";
import { update } from "./update";
import { updateBody } from "./updateBody";
import { updateRender } from "./updateRender";
import { findBody } from "./findBody";
import { getCompoundBody } from "./getCompoundBody";
import { findBodies } from "./findBodies";
import { queryCollisions } from "./queryCollisions";

export const Physics = {
  removeBody,
  getBodyType,
  getCompoundBody,
  updateBody,
  update,
  updateRender,
  createRender,
  helloWorld,
  applyForce,
  createEngine,
  allBodies,
  findBody,
  findBodies,
  queryCollisions,

  runRunner,
  runRender,

  // TODO refactor old interface
  // createBody,
  setPosition,
  getPosition,
  getRotation,
  setRotation,
  getInertia,
  setInertia,
  getVelocity,
  setVelocity,
  getMass,
};
