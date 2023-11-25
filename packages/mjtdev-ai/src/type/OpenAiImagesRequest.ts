
export type OpenAiImagesRequest = {
  prompt: string;
  model?: string;
  n?: number; // number of images to generate
  quality?: string; // 'hd' is the only listed quality
  response_format?: "url" | "b64_json";
  size?: string; // defaults to '1024x1024',
  style?: "vivid" | "natural";
  user?: string; //optional string to help ID user for abuse
};
