import { isBrowser } from "./isBrowser";
export const iffBrowser = (producer) => {
    return isBrowser() ? producer() : undefined;
};
//# sourceMappingURL=iffBrowser.js.map