import { Properties } from "csstype";
export type HtmlTagName = keyof HTMLElementTagNameMap;
export type CssStyle = Properties;
export type CreateElementSpec<K extends HtmlTagName> = Partial<{
    textContent: string;
    style: CssStyle;
    tagName: K;
    parent: HTMLElement;
    attributes: unknown;
    datasets: {
        [k in string]: string;
    };
    clazz: string;
    id: string;
}>;
//# sourceMappingURL=CreateElementSpec.d.ts.map