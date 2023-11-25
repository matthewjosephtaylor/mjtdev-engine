import { OpenAiImage } from "./OpenAiImage";


export type OpenAiImagesResponse = {
  created: number;
  data: OpenAiImage[];
};
