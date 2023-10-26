import { usePopupState } from "./usePopupState";
export const openPopup = (content, options = {}) => {
    const { name = crypto.randomUUID(), x, y, showFrame = true, visible = true, } = options;
    usePopupState.setState((state) => ({
        ...state,
        popups: {
            ...state.popups,
            [name]: {
                content,
                x,
                y,
                visible,
                moveEnabled: false,
                offsetX: 0,
                offsetY: 0,
                showFrame,
            },
        },
    }));
    return name;
};
//# sourceMappingURL=openPopup.js.map