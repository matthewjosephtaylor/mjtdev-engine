import { createSseParser } from "./createSseParser";
import { detectSimpleStop } from "./detectSimpleStop";
import { detectStop } from "./detectStop";
import { detectStopAfter } from "./detectStopAfter";
import { escapeRegExp } from "./escapeRegExp";

export const Parsers = {
  createSseParser,
  detectStop,
  detectSimpleStop,
  detectStopAfter,
  escapeRegExp,
};