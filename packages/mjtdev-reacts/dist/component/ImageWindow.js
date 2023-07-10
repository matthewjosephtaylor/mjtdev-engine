import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useEffect } from "react";
import { BasicWindow } from "./BasicWindow";
import { Images } from "@mjtdev/image";
export const ImageWindow = ({ src }) => {
    const [content, setContent] = useState(_jsx(_Fragment, { children: "Loading..." }));
    const update = async (s) => {
        const ab = await s.arrayBuffer();
        const srcString = await Images.toSrcString(ab);
        setContent(_jsx("img", { src: srcString }));
    };
    useEffect(() => {
        update(src);
    }, [src]);
    return _jsx(BasicWindow, { title: `${src.name} ${src.type}`, children: content });
};
//# sourceMappingURL=ImageWindow.js.map