import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Grid } from "./Grid";
export const RecordToGrid = ({ value, }) => {
    return (_jsx(Grid, { direction: "column", count: 2, gap: "1em", cellSize: ["max-content", "auto"], children: Object.entries(value).map((entry, index) => {
            const [key, value] = entry;
            return (_jsxs(React.Fragment, { children: [_jsx("div", { children: key }), value] }, index));
        }) }));
};
//# sourceMappingURL=RecordToGrid.js.map