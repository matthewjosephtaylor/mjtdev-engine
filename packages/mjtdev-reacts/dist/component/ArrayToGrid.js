import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Grid } from "./Grid";
export const ArrayToGrid = ({ arr, columns = 2, mapper = (v) => _jsx("span", { children: String(v) }), }) => {
    return (_jsx(Grid, { direction: "column", count: columns, gap: "1em", children: arr.map(mapper).map((entry, index) => {
            return _jsx(React.Fragment, { children: entry }, index);
        }) }));
};
//# sourceMappingURL=ArrayToGrid.js.map