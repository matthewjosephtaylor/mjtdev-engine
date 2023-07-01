import { safe } from "../common/safe";
import { TextGenParams } from "./TextGenParams";
import { useTextGenState } from "./useTextGenState";

export const textgen = async (
  prompt: string,
  paramOverrides: Partial<TextGenParams> = {}
): Promise<string> => {
  const { generationUrl, textgenParams } = useTextGenState.getState();

  return safe(
    async () => {
      const response = await fetch(generationUrl, {
        method: "POST",
        body: JSON.stringify({
          ...textgenParams,
          prompt,
          ...paramOverrides,
        }),
      });
      const responseJson = await response.json();

      return responseJson["results"][0]["text"];
    },
    (error) => {
      console.log(prompt);
      console.log(error);
      return undefined;
    }
  );
};
