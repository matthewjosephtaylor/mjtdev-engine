/**
 * ---BOILERPLATE---
 *
 * const fileInput = Htmls.createElement({
 *   tagName: "input",
 *   attributes: { type: "file" },
 *   parent,
 * });
 * const content = await readFile({ fileInput });
 */
export function readFile({ fileInput, }) {
    return new Promise((resolve, reject) => {
        fileInput.addEventListener("change", () => {
            resolve(fileInput.files);
        });
    });
}
//# sourceMappingURL=readFile.js.map