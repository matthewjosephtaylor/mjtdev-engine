import { ByteLike } from "@mjtdev/byte";

export type ImageLike =
  | string
  | HTMLImageElement
  | HTMLCanvasElement
  | HTMLVideoElement
  | ByteLike;
