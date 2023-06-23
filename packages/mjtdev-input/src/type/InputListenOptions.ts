import { AnimateState } from "@mjtdev/animate";

export type InputListenOptions = Partial<{
  ratePerSecond: number;
  parent: HTMLElement;
  debug: boolean;
  autoUp: boolean;
  signal: AbortSignal;
  propagate: boolean;
  passive: boolean;
  dropMultiple: boolean;
  animateState: AnimateState
}>;
