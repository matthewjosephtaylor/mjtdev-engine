
export type TextGenParams = {
  prompt: string;
  max_new_tokens: number;
  add_bos_token: boolean;
  skip_special_tokens: boolean;
  seed: number;
  stopping_strings: string[];

  // # Generation params. If 'preset' is set to different than 'None', the values
  // # in presets/preset-name.yaml are used instead of the individual numbers.
  preset: "None" | string;
  // # 'do_sample': True,
  temperature: number;
};
