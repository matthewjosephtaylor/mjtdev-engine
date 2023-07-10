import { useEffect, useRef } from "react";
export default function useRenderCount() {
    const count = useRef(0);
    function inc() {
        count.current++;
    }
    useEffect(() => inc());
    return count.current;
}
//# sourceMappingURL=useRenderCount.js.map