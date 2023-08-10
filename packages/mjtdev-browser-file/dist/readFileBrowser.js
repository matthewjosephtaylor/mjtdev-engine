import { Asserts } from "@mjtdev/assert";
import { isDefined, isUndefined } from "@mjtdev/object";
export const readFileBrowser = async (path) => {
    return new Promise((resolve, reject) => {
        const fileInput = Asserts.assertValue(document.querySelector(path));
        fileInput.type = "file";
        const listener = () => {
            fileInput.removeEventListener("change", listener);
            const files = fileInput.files;
            isDefined;
            if (isUndefined(files) || files.length === 0) {
                return reject("No files");
            }
            const file = Asserts.assertValue(files.item(0));
            resolve({
                data: file,
                name: file.name,
            });
        };
        fileInput.addEventListener("change", listener);
    });
};
//# sourceMappingURL=readFileBrowser.js.map