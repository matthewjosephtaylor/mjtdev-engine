import { Animates } from "@mjtdev/animate";
import { isDefined, Objects } from "@mjtdev/object";
export const listenToKey = (keyAction, options = {}) => {
    const { ratePerSecond: ticksPerSecond = 60, parent = document.body, debug = false, autoUp = true, propagate = true, dropMultiple = false, animateState = Animates.create({ ticksPerSecond }), } = options;
    const curKeys = {};
    animateState.tickers.push(() => {
        Object.entries(curKeys)
            .filter(([k, v]) => v === true)
            .map(([k]) => {
            if (autoUp) {
                curKeys[k] = false;
            }
            const action = ignoreCaseKeyActions[k];
            if (isDefined(action)) {
                action();
            }
        });
    });
    const abortControllers = [];
    if (!autoUp) {
        const abortController = new AbortController();
        abortControllers.push(abortController);
        parent.addEventListener("keyup", (event) => {
            if (!animateState.running) {
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
                .filter(isDefined)
                .join("+")
                .toUpperCase();
            if (debug) {
                console.log(`keyup ${keyCombo}`, event);
            }
            curKeys[keyCombo] = false;
            return propagate;
        }, {
            signal: abortController.signal,
        });
    }
    {
        const abortController = new AbortController();
        abortControllers.push(abortController);
        parent.addEventListener("keydown", (event) => {
            if (!animateState.running) {
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
                .filter(isDefined)
                .join("+")
                .toUpperCase();
            if (debug) {
                console.log(`keydown ${keyCombo}`, event);
            }
            curKeys[keyCombo] = true;
            return propagate;
        }, { signal: abortController.signal });
    }
    const ignoreCaseKeyActions = Objects.fromEntries(Objects.entries(keyAction).map(([key, action]) => [
        key.toUpperCase(),
        action,
    ]));
    const animDestroy = animateState.destroy;
    const destroy = () => {
        animDestroy();
        abortControllers.forEach((ac) => ac.abort());
    };
    animateState.destroy = destroy;
    return animateState;
};
//# sourceMappingURL=listenToKey.js.map