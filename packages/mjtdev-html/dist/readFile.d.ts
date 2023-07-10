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
export declare function readFile({ fileInput, }: {
    fileInput: HTMLInputElement;
}): Promise<ArrayLike<Blob>>;
//# sourceMappingURL=readFile.d.ts.map