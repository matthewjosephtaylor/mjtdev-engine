import { Animates } from "@mjtdev/animate";
import { iff } from "@mjtdev/object";
import { InputListenOptions } from "./type/InputListenOptions";
import { MouseActions } from "./type/MouseActions";
import { PointerEventType } from "./type/PointerEventType";

export const listenToMouse = (
  mouseActions: Partial<MouseActions>,
  options: InputListenOptions = {}
) => {
  const {
    ratePerSecond: ticksPerSecond = 60,
    parent = document.body,
    propagate = true,
    passive = false,
    debug = false,
    dropMultiple = true,

    animateState = Animates.create({ ticksPerSecond }),
  } = options;

  const abortControllers: AbortController[] = [];
  const events: { [k in PointerEventType]: MouseEvent[] } = {
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
    const abortController = new AbortController();
    abortControllers.push(abortController);
    parent.addEventListener(
      eventType,
      (event) => {
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
      },
      {
        signal: abortController.signal,
        passive,
      }
    );
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
  const animDestroy = animateState.destroy;
  const destroy = () => {
    animDestroy();
    abortControllers.forEach((ac) => ac.abort());
  };
  animateState.destroy = destroy;
  return animateState;
};
