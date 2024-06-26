export const dataUrlToBlob = (dataUrl) => {
    if (!dataUrl) {
        return;
    }
    const arr = dataUrl.split(",");
    const match = arr[0].match(/:(.*?);/) ?? [];
    const mime = match[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
};
//# sourceMappingURL=dataUrlToBlob.js.map