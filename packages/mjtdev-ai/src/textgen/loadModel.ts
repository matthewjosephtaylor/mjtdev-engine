import { safe } from "../common/safe";
import { ModelInfo } from "../type/ModelInfo";
import { useTextGenState } from "./useTextGenState";

export const loadModel = (
  modelName: string,
  options: Partial<{
    loader: "AutoGPTQ" | "ExLlama" | "ExLlama_HF";
    auto_devices: boolean;
    max_seq_len: number;
    compress_pos_emb: number;
  }> = {}
): Promise<ModelInfo> => {
  const { baseUrl } = useTextGenState.getState();
  const {
    auto_devices = true,
    loader = "AutoGPTQ",
    max_seq_len = 2048,
  } = options;

  return safe(
    async () => {
      const response = await fetch(`${baseUrl}/api/v1/model`, {
        method: "POST",
        body: JSON.stringify({
          action: "load",
          model_name: modelName,
          args: {
            // loader,
            // auto_devices,
            // max_seq_len,
            ...options,
          },
        }),
      });
      const json = await response.json();
      return json["result"];
    },

    (error) => {
      console.log(error);
      return undefined;
    }
  );
};
