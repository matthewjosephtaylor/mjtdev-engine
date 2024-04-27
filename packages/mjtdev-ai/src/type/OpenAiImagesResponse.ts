import type { OpenAiImage } from "./OpenAiImage";


export type OpenAiImagesResponse = {
  created: number;
  data: OpenAiImage[];
};
