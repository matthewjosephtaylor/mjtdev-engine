import { jsx as _jsx } from "react/jsx-runtime";
export const DropTarget = (props) => {
    const { children, action = () => { }, dataType = "text/plain", dropEffect = "copy", } = props;
    return (_jsx("div", { onDragOver: (event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = dropEffect;
        }, onDrop: (event) => {
            event.preventDefault();
            const data = event.dataTransfer.getData(dataType);
            action(data);
        }, children: children }));
};
//# sourceMappingURL=DropTarget.js.map