"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listenToMouse = void 0;
const animate_1 = require("@mjtdev/animate");
const object_1 = require("@mjtdev/object");
const listenToMouse = (mouseActions, options = {}) => {
    const { ratePerSecond: ticksPerSecond = 60, parent = document.body, propagate = true, passive = false, debug = false, dropMultiple = true, animateState = animate_1.Animates.create({ ticksPerSecond }), } = options;
    const events = {
        click: [],
        auxclick: [],
        contextmenu: [],
        pointerdown: [],
        pointerenter: [],
        pointerleave: [],
        pointermove: [],
        pointerout: [],
        pointerover: [],
        pointerup: [],
        wheel: [],
    };
    Object.keys(mouseActions).map((eventType) => {
        if (debug) {
            console.log(`attaching to ${eventType}`, parent);
        }
        parent.addEventListener(eventType, (event) => {
            if (!propagate) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (debug) {
                console.log(`received event ${eventType}`);
            }
            if (dropMultiple && events[eventType].length > 0) {
                events[eventType].length = 0;
            }
            events[eventType].push(event);
        }, {
            passive,
        });
    });
    animateState.tickers.push(() => {
        Object.entries(events).map(([eventType, events]) => {
            (0, object_1.iff)(events.shift(), (mouseEvent) => {
                (0, object_1.iff)(mouseActions[eventType], (action) => {
                    if (debug) {
                        console.log(`performing action ${action}`);
                    }
                    action(mouseEvent);
                });
            });
        });
    });
    return animateState;
};
exports.listenToMouse = listenToMouse;
//# sourceMappingURL=listenToMouse.js.map