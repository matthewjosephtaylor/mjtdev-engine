import { Animates } from "@mjtdev/animate";
import { Objects, iff } from "@mjtdev/object";
export const listenToMouse = (mouseActions, options = {}) => {
    const { ratePerSecond: ticksPerSecond = 60, parent = document.body, propagate = true, passive = false, debug = false, dropMultiple = true, animateState = Animates.create({ ticksPerSecond }), } = options;
    const abortControllers = [];
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
    Objects.keys(mouseActions).map((eventType) => {
        if (debug) {
            console.log(`attaching to ${eventType}`, parent);
        }
        const abortController = new AbortController();
        abortControllers.push(abortController);
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
            signal: abortController.signal,
            passive,
        });
    });
    animateState.tickers.push(() => {
        Objects.entries(events).map(([eventType, events]) => {
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
    const animDestroy = animateState.destroy;
    const destroy = () => {
        animDestroy();
        abortControllers.forEach((ac) => ac.abort());
    };
    animateState.destroy = destroy;
    return animateState;
};
//# sourceMappingURL=listenToMouse.js.map