import { createElement } from "./createElement";
import { CreateElementSpec } from "./type/CreateElementSpec";

export const from = <K extends keyof HTMLElementTagNameMap>(
  tagName = "div" as K,
  options: CreateElementSpec<K> = {}
) => {
  return createElement({ tagName, ...options });
};
