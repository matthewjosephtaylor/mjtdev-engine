import { useEffect } from "react";
export const useAsyncEffect = async (func, deps, destructor) => {
    return useEffect(() => {
        func();
        return destructor;
    }, deps);
};
//# sourceMappingURL=useAsyncEffect.js.map