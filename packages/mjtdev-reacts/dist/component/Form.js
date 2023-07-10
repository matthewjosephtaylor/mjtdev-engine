import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Objects } from "@mjtdev/object";
import { useEffect, useState } from "react";
import { Grid } from "./Grid";
export const INPUT_VALUE_CONTROLS = {
    string: (key, value) => (_jsx("input", { name: key, defaultValue: value }, `${key}-${value}`)),
    number: (key, value) => (_jsx("input", { name: key, defaultValue: value, type: "number" }, key)),
    boolean: (key, value) => (_jsx("input", { name: key, defaultValue: value, type: "checkbox" }, key)),
    color: (key, value) => (_jsx("input", { name: key, defaultValue: value, type: "color" }, key)),
};
export const formEntryToFormLine = (key, valueType) => {
    return [_jsx("div", { children: key }, key), INPUT_VALUE_CONTROLS[valueType]];
};
export const Form = ({ format, initial = {}, onChange = () => { }, onSubmit = () => { }, submitText = "Ok", }) => {
    const [record, setRecord] = useState({ ...initial });
    const [formLines, setFormLines] = useState([]);
    useEffect(() => {
        onChange(record);
    }, [record]);
    useEffect(() => {
        console.log({ initial });
        setFormLines(Objects.mapOf(format, (key, value) => {
            return [
                _jsx("div", { children: key }, `lbl-${key}`),
                INPUT_VALUE_CONTROLS[value](key, initial[key]),
            ];
        }).flat());
    }, [initial, format]);
    return (_jsx("form", { onChange: (evt) => {
            const { target } = evt;
            if (target instanceof HTMLInputElement) {
                const { name, value } = target;
                setRecord({ ...record, [name]: value });
            }
        }, onSubmit: (evt) => {
            evt.preventDefault();
            onSubmit(record);
        }, children: _jsx(Grid, { style: { margin: "auto" }, cellSize: "min-content", direction: "row", gap: "2em", children: _jsxs(Grid, { style: { margin: "auto" }, cellSize: "min-content", count: 2, gap: "0.5em", direction: "column", children: [formLines, _jsx("button", { children: submitText })] }) }) }));
};
//# sourceMappingURL=Form.js.map