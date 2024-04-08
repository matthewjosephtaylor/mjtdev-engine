import { toBlob } from "./toBlob";
import type { ByteLike } from "./type/ByteLike";

export const toDataUrl = async (bytes: ByteLike): Promise<string> => {
  const blob = toBlob(bytes);
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    const callback = (result: string | ArrayBuffer | undefined | null) => {
      if (typeof result === "string") {
        return resolve(result);
      }
      console.log({ bytes });
      return reject("Unable to convert to data URL");
    };
    reader.onload = function (e) {
      callback(e.target?.result);
    };
    reader.readAsDataURL(blob);
  });
};
