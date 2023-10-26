import { jsx as _jsx } from "react/jsx-runtime";
import { isDefined } from "@mjtdev/object";
export const lineToComponents = ({ line, key, actions, }) => {
    {
        const anchorMatches = Array.from(line.matchAll(/^(.*)(https:[a-z0-9\.\\\/\-]*)(.*)$/gi));
        if (anchorMatches.length > 0) {
            return (_jsx("div", { children: anchorMatches
                    .map((m, i) => {
                    return m.map((part, j) => {
                        const childKey = `${key}-${i}-${j}`;
                        if (j === 0) {
                            return undefined;
                        }
                        if (/^http/i.test(part)) {
                            return (_jsx("a", { href: part, children: part }, childKey));
                        }
                        return _jsx("span", { children: part }, childKey);
                    });
                })
                    .filter(isDefined) }, key));
        }
    }
    {
        const linkMatches = Array.from(line.matchAll(/^(.*)(link:[a-z0-9\.\\\/\-]*)(.*)$/gi));
        if (linkMatches.length > 0) {
            return (_jsx("div", { children: linkMatches
                    .map((m, i) => {
                    return m.map((part, j) => {
                        const childKey = `${key}-${i}-${j}`;
                        if (j === 0) {
                            return undefined;
                        }
                        if (/^link/i.test(part)) {
                            const name = part.replace("link:", "").trim();
                            return (_jsx("button", { onClick: () => {
                                    const action = actions[name];
                                    if (isDefined(action)) {
                                        return action();
                                    }
                                    console.log(`No action named ${name} found`);
                                    console.log({ actions, action, name });
                                }, children: name }, childKey));
                        }
                        return _jsx("span", { children: part }, childKey);
                    });
                })
                    .filter(isDefined) }, key));
        }
    }
    return _jsx("div", { children: line }, key);
};
//# sourceMappingURL=lineToComponents.js.map