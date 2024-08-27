import { isDefined } from "./isDefined";
export const createSettler = ({ settleAction, settledAfterMs, }) => {
    let lastValue = undefined;
    let lastModification = Date.now();
    let settling = false;
    const attemptToSettle = () => {
        if (Date.now() > lastModification + settledAfterMs) {
            if (isDefined(lastValue)) {
                settleAction(lastValue);
            }
            settling = false;
            return;
        }
        settling = true;
        setTimeout(attemptToSettle, settledAfterMs);
    };
    return {
        update: (value) => {
            lastValue = value;
            lastModification = Date.now();
            if (!settling) {
                attemptToSettle();
            }
        },
    };
};
//# sourceMappingURL=createSettler.js.map