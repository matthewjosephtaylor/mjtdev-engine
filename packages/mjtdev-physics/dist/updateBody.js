import { iff } from "@mjtdev/object";
import { Body } from "matter-js";
import { toMatterVector } from "./toMatterVector";
export const updateBody = (body, options) => {
    const { isStatic, label, frictionAir, mass, density, rotation, position, render, } = options;
    iff(isStatic, (value) => {
        body.isStatic = value;
    });
    iff(label, (value) => {
        body.label = value;
    });
    iff(frictionAir, (value) => {
        body.frictionAir = value;
    });
    iff(mass, (value) => {
        Body.setMass(body, value);
    });
    iff(density, (value) => {
        Body.setDensity(body, value);
    });
    iff(rotation, (value) => {
        Body.setAngle(body, value);
    });
    iff(position, (value) => {
        Body.setPosition(body, toMatterVector(value));
    });
    iff(render, (value) => {
        body.render = value;
    });
};
//# sourceMappingURL=updateBody.js.map