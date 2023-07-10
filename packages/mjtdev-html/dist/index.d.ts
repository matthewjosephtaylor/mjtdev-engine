import { createElement } from "./createElement";
import { readFile } from "./readFile";
import { textNodesOfElement } from "./textNodesOfElement";
import { textOfElement } from "./textOfElement";
export * from "./type/CreateElementSpec";
export declare const Htmls: {
    textNodesOfElement: typeof textNodesOfElement;
    textOfElement: typeof textOfElement;
    createElement: typeof createElement;
    readFile: typeof readFile;
    from: <K extends keyof HTMLElementTagNameMap>(tagName?: K, options?: Partial<{
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
    updateStyle: ({ style, element, }: {
        style?: import("csstype").Properties<0 | (string & {}), string & {}>;
        element: HTMLElement | SVGElement;
    }) => import("csstype").Properties<0 | (string & {}), string & {}>;
};
//# sourceMappingURL=index.d.ts.map