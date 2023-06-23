import { Animates } from "@mjtdev/animate";
import { isDefined, Objects } from "@mjtdev/object";
import { InputListenOptions } from "./type/InputListenOptions";
import { KeyActions } from "./type/KeyActions";

export const listenToKey = (
  keyAction: KeyActions,
  options: InputListenOptions = {}
) => {
  const {
    ratePerSecond: ticksPerSecond = 60,
    parent = document.body,
    debug = false,
    autoUp = true,
    propagate = true,
    signal,
    dropMultiple = false,
  } = options;

  const curKeys: { [k in string]: boolean } = {};

  const animationState = Animates.create({
    ticksPerSecond,
    ticker: () => {
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
    },
  });

  if (!autoUp) {
    parent.addEventListener(
      "keyup",
      (event) => {
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
          .filter(isDefined)
          .join("+")
          .toUpperCase();
        if (debug) {
          console.log(`keyup ${keyCombo}`, event);
        }
        curKeys[keyCombo] = false;
        return propagate;
      },
      {
        signal,
      }
    );
  }
  parent.addEventListener(
    "keydown",
    (event) => {
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
        .filter(isDefined)
        .join("+")
        .toUpperCase();
      if (debug) {
        console.log(`keydown ${keyCombo}`, event);
      }
      curKeys[keyCombo] = true;
      return propagate;
    },
    { signal }
  );

  const ignoreCaseKeyActions = Objects.fromEntries(
    Objects.entries(keyAction).map(([key, action]) => [
      key.toUpperCase(),
      action,
    ])
  );

  return animationState;
};
