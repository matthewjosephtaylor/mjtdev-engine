import { useLocation, useNavigate } from "react-router-dom";
export const useNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (path) => {
        navigate(path, {
            state: {
                previous: location.pathname,
            },
        });
    };
};
//# sourceMappingURL=useNav.js.map