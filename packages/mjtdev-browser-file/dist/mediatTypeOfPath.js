import mimeDb from "mime-db";
export const mediaTypeOfPath = (path) => {
    const ext = path.replace(/.*\./i, "").toLowerCase();
    const mimeEntry = Object.entries(mimeDb).find((entry) => {
        const [mediaType, mimeEntry] = entry;
        const { extensions = [] } = mimeEntry;
        return extensions.includes(ext);
    });
    if (mimeEntry) {
        return mimeEntry[0];
    }
    return undefined;
};
//# sourceMappingURL=mediatTypeOfPath.js.map