"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listenToKey = void 0;
const animate_1 = require("@mjtdev/animate");
const object_1 = require("@mjtdev/object");
const listenToKey = (keyAction, options = {}) => {
    const { ratePerSecond: ticksPerSecond = 60, parent = document.body, debug = false, autoUp = true, propagate = true, signal, dropMultiple = false, } = options;
    const curKeys = {};
    const animationState = animate_1.Animates.create({
        ticksPerSecond,
        ticker: () => {
            Object.entries(curKeys)
                .filter(([k, v]) => v === true)
                .map(([k]) => {
                if (autoUp) {
                    curKeys[k] = false;
                }
                const action = ignoreCaseKeyActions[k];
                if ((0, object_1.isDefined)(action)) {
                    action();
                }
            });
        },
    });
    if (!autoUp) {
        parent.addEventListener("keyup", (event) => {
            if (!animationState.running) {
                return propagate;
            }
            event.cancelBubble = propagate;
            const { key, altKey, shiftKey, ctrlKey, metaKey } = event;
            const keyCombo = [
                altKey ? "alt" : undefined,
                ctrlKey ? "ctrl" : undefined,
                shiftKey ? "shift" : undefined,
                metaKey ? "meta" : undefined,
                key.toUpperCase(),
            ]
                .filter(object_1.isDefined)
                .join("+")
                .toUpperCase();
            if (debug) {
                console.log(`keyup ${keyCombo}`, event);
            }
            curKeys[keyCombo] = false;
            return propagate;
        }, {
            signal,
        });
    }
    parent.addEventListener("keydown", (event) => {
        if (!animationState.running) {
            return propagate;
        }
        event.cancelBubble = propagate;
        const { key, altKey, shiftKey, ctrlKey, metaKey } = event;
        const keyCombo = [
            altKey ? "alt" : undefined,
            ctrlKey ? "ctrl" : undefined,
            shiftKey ? "shift" : undefined,
            metaKey ? "meta" : undefined,
            key.toUpperCase(),
        ]
            .filter(object_1.isDefined)
            .join("+")
            .toUpperCase();
        if (debug) {
            console.log(`keydown ${keyCombo}`, event);
        }
        curKeys[keyCombo] = true;
        return propagate;
    }, { signal });
    const ignoreCaseKeyActions = object_1.Objects.fromEntries(object_1.Objects.entries(keyAction).map(([key, action]) => [
        key.toUpperCase(),
        action,
    ]));
    return animationState;
};
exports.listenToKey = listenToKey;
//# sourceMappingURL=listenToKey.js.map