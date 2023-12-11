import { jsx as _jsx } from "react/jsx-runtime";
export const Drag = (props) => {
    const { className, dataType = "text/plain", data, children, dropped = () => { }, } = props;
    return (_jsx("div", { className: className, draggable: true, onDragStart: (event) => {
            if (!data) {
                return;
            }
            event.dataTransfer.setData(dataType, data);
        }, onDrop: (event) => {
            dropped(event);
        }, children: children }));
};
//# sourceMappingURL=Drag.js.map