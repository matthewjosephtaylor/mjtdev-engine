import { WinCtx } from "../ctx/WinCtx";
import { RenderState } from "./RenderState";

// export type FrameControl = (state: RenderState) => void;
export type FrameControl = (winCtx: WinCtx) => void;
