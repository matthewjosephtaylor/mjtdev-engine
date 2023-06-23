import { Animates } from "@mjtdev/animate";
import { iff } from "@mjtdev/object";
export const listenToMouse = (mouseActions, options = {}) => {
    const { ratePerSecond: ticksPerSecond = 60, parent = document.body, propagate = true, passive = false, debug = false, dropMultiple = true, animateState = Animates.create({ ticksPerSecond }), } = options;
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
            iff(events.shift(), (mouseEvent) => {
                iff(mouseActions[eventType], (action) => {
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
//# sourceMappingURL=listenToMouse.js.map