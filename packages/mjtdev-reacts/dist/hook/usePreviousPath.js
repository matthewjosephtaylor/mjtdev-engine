import { useLocation } from "react-router-dom";
export const usePreviousPath = () => {
    const location = useLocation();
    const state = location.state;
    return state?.["previous"] ?? "/";
};
//# sourceMappingURL=usePreviousPath.js.map