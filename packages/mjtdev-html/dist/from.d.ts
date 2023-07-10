import { CreateElementSpec } from "./type/CreateElementSpec";
export declare const from: <K extends keyof HTMLElementTagNameMap>(tagName?: K, options?: Partial<{
    textContent: string;
    style: import("./type/CreateElementSpec").CssStyle;
    tagName: K;
    parent: HTMLElement;
    attributes: unknown;
    datasets: {
        [x: string]: string;
    };
    clazz: string;
    id: string;
}>) => HTMLElementTagNameMap[K];
//# sourceMappingURL=from.d.ts.map