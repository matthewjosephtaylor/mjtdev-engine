import { jsx as _jsx } from "react/jsx-runtime";
import { closePopup } from "../popup/closePopup";
import { openPopup } from "../popup/openPopup";
import { CenteredPopup } from "./CenteredPopup";
export const openCenteredPopup = (content, options = {}) => {
    const { escapeCloses, onClose: superOnClose = () => { }, name = crypto.randomUUID(), } = options;
    const onClose = () => {
        closePopup(name);
        superOnClose();
    };
    return openPopup(_jsx(CenteredPopup, { options: { escapeCloses }, name: name, onClose: onClose, children: content }), { name, ...options });
};
//# sourceMappingURL=openCenteredPopup.js.map