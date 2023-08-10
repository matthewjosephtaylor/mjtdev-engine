import { nextTraceId } from "../common/nextTraceId";
import { safe } from "../common/safe";
import { TextGenParams } from "../type/TextGenParams";
import { useTextGenState } from "./useTextGenState";

export const textgen = async (
  prompt: string,
  paramOverrides: Partial<TextGenParams> = {}
): Promise<string> => {
  const { monitor, debug, baseUrl, textgenParams } = useTextGenState.getState();

  const traceId = nextTraceId();
  return safe(
    async () => {
      monitor(prompt, "CALL", traceId);
      const response = await fetch(`${baseUrl}/api/v1/generate`, {
        method: "POST",
        signal: textgenParams?.signal,
        body: JSON.stringify({
          ...textgenParams,
          prompt,
          ...paramOverrides,
        }),
      });
      const responseJson = await response.json();

      if (!response.ok) {
        monitor(String(response.statusText), "ERROR", traceId);
        console.log("ERROR");
        console.log({ prompt, paramOverrides });
        console.log(response);
        return undefined;
      }
      const text = responseJson["results"][0]["text"];
      if (debug) {
        console.log(prompt);
        console.log("----------");
        console.log(text);
        console.log("----------");
      }
      monitor(text, "RESPONSE", traceId);
      return text;
    },
    (error) => {
      console.log(prompt);
      console.log(error);
      return undefined;
    }
  );
};
