import { ByteLike, Bytes } from "@mjtdev/byte";

export const writeFileBrowser = (path: string, data: ByteLike) => {
  const a = document.createElement("a");
  const blob = Bytes.toBlob(data);
  a.href = window.URL.createObjectURL(blob);
  a.download = path;
  a.click();
};
