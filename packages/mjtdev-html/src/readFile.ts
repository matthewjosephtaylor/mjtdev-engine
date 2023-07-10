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
export function readFile({
  fileInput,
}: {
  fileInput: HTMLInputElement;
}): Promise<ArrayLike<Blob>> {
  return new Promise((resolve, reject) => {
    fileInput.addEventListener("change", () => {
      resolve(fileInput.files);
    });
  });
}
