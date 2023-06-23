import { builder } from "./builder";
import { darken } from "./darken";
import { desaturate } from "./desaturate";
import { lighten } from "./lighten";
import { opacity } from "./opacity";
import { randomColor } from "./randomColor";
import { rotateHue } from "./rotateHue";
import { saturate } from "./saturate";
import { toCssFilters } from "./SomeColorToCssFilters";
import { textColor } from "./textColor";
import { toCss } from "./toCss";
import { toRgbInteger } from "./toRgbInteger";
export declare const Colors: {
    from: (color: import("./ColorTypes").ColorLike) => import("./ColorTypes").ColorBuilder;
    builder: typeof builder;
    toCss: typeof toCss;
    toRgbInteger: typeof toRgbInteger;
    darken: typeof darken;
    desaturate: typeof desaturate;
    lighten: typeof lighten;
    randomColor: typeof randomColor;
    saturate: typeof saturate;
    textColor: typeof textColor;
    toCssFilters: typeof toCssFilters;
    rotateHue: typeof rotateHue;
    operateOn: (spec: Partial<{
        darken: string | number;
        lighten: string | number;
        random: string | number;
        rotateHue: string | number;
        opacity: string | number;
        desaturate: string | number;
        saturate: string | number;
        color: string | number;
    }>) => string;
    opacity: typeof opacity;
    palletteFrom: (src: string | HTMLImageElement, options: {
        colorCount?: number;
        quality?: number;
    }) => Promise<never>;
};
//# sourceMappingURL=Colors.d.ts.map