import { EventualByteLike } from "./EventualByteLike";
import { ImmediateByteLike } from "./ImmediateByteLike";

export type ByteLike = EventualByteLike | ImmediateByteLike;
