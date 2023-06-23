import { Asserts } from "@mjtdev/assert";


export const idStringToIdBytes = ({ id }: { id: string; }) => {
  const splitValue = id.split(":");
  Asserts.assert(splitValue.length === 2);

  // TODO only SHA FOR NOW
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [algorithm, base64] = splitValue;
  const binaryString = atob(base64);
  const result = new Uint8Array(binaryString.length);
  binaryString
    .split("")
    .map((s) => s.charCodeAt(0))
    .forEach((b, i) => {
      result[i] = b;
    });
  return result;
};
