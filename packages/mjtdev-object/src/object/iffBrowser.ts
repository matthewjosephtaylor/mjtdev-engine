import { isBrowser } from "./isBrowser";


export const iffBrowser = <T>(producer: () => T) => {
  return isBrowser() ? producer() : undefined;
};
