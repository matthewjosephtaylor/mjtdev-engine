/** @see https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events */
import { isDefined, safe } from "@mjtdev/object";
export const decodeSseValue = (value) => {
    const fields = ["event", "data", "id", "retry"];
    if (value.startsWith(":")) {
        // console.log(`COMMENT?: ${value}`);
        return undefined;
    }
    const regex = new RegExp(`(${fields.join("|")}):(.*$)`, "igm");
    const matches = Array.from(value.trim().matchAll(regex));
    return matches
        .map((match) => {
        return safe(() => ({
            field: match[1],
            value: match[2].trim(),
        }));
    })
        .filter(isDefined);
};
//# sourceMappingURL=decodeSseValue.js.map