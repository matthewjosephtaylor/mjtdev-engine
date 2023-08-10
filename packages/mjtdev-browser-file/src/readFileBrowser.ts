import { Asserts } from "@mjtdev/assert";
import { isDefined, isUndefined } from "@mjtdev/object";
import { Fil } from "./type/Fil";

export const readFileBrowser = async (path: string): Promise<Fil> => {
  return new Promise((resolve, reject) => {
    const fileInput: HTMLInputElement = Asserts.assertValue(
      document.querySelector(path)
    );
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
