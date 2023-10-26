import { jsx as _jsx } from "react/jsx-runtime";
import { Center } from "./Center";
import { Grid } from "./Grid";
import { textToReactComponents } from "./textToReactComponents";
export const TextScreen = ({ text, actions, style, }) => {
    return (_jsx(Center, { style: style, children: _jsx(Grid, { direction: "row", children: textToReactComponents(text, actions) }) }));
};
//# sourceMappingURL=TextScreen.js.map