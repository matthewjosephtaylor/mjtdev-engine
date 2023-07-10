// import { isDefined } from "@mjtdev/object";
// import React, { ReactChild, useState } from "react";
// import { render } from "./render";
// import { RenderGroup } from "./type/RenderGroup";
// import { FrameControls } from "./type/FrameControls";
// import { RenderControl } from "./type/RenderControl";
// import { RenderState } from "./type/RenderState";
// import { Win } from "./Win";
// import { reorderGroup } from "./reorderGroup";
// import { WindowActions } from "./element/type/WindowActions";

// export const renderWindow = ({
//   content,
//   title,
//   style,
//   controls = [["close", (state) => state.control.dispose()]],
//   group = [],
// }: {
//   group?: RenderGroup;
//   title?: string;
//   controls?: FrameControls;
//   content: ReactChild;
//   style?: React.CSSProperties;
// }) => {
//   const state: RenderState = {
//     control: undefined as RenderControl,
//     actions: undefined as WindowActions,
//   };

//   state.control = render(
//     <Win
//       group={group}
//       state={state}
//       controls={controls}
//       style={style}
//       title={title}
//     >
//       {content}
//     </Win>
//   );
//   group.push(state);
//   return state;
// };
