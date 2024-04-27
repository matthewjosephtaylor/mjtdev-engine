import { safe } from "../common/safe";
import type { ModelInfo } from "../type/ModelInfo";
import { useTextGenState } from "./useTextGenState";

export const getModelInfo = (): Promise<ModelInfo> | undefined => {
  const { baseUrl } = useTextGenState.getState();

  return safe(
    async () => {
      const response = await fetch(`${baseUrl}/api/v1/model`, {
        method: "POST",
        body: JSON.stringify({ action: "info" }),
      });
      const json = await response.json();
      return json["result"] as ModelInfo;
    },

    (error) => {
      console.log(error);
      return undefined;
    }
  );
};
