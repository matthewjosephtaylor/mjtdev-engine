export interface ModelInfo {
    model_name: string;
    lora_names: any[];
    "shared.settings": SharedSettings;
    "shared.args": SharedArgs;
}
export interface SharedSettings {
    dark_theme: boolean;
    autoload_model: boolean;
    max_new_tokens: number;
    max_new_tokens_min: number;
    max_new_tokens_max: number;
    seed: number;
    character: string;
    name1: string;
    name2: string;
    context: string;
    greeting: string;
    turn_template: string;
    custom_stopping_strings: string;
    stop_at_newline: boolean;
    add_bos_token: boolean;
    ban_eos_token: boolean;
    skip_special_tokens: boolean;
    truncation_length: number;
    truncation_length_min: number;
    truncation_length_max: number;
    mode: string;
    start_with: string;
    chat_style: string;
    instruction_template: string;
    "chat-instruct_command": string;
    chat_generation_attempts: number;
    chat_generation_attempts_min: number;
    chat_generation_attempts_max: number;
    default_extensions: any[];
    chat_default_extensions: string[];
    preset: string;
    prompt: string;
}
export interface SharedArgs {
    notebook: boolean;
    chat: boolean;
    character: any;
    model: any;
    lora: any;
    model_dir: string;
    lora_dir: string;
    model_menu: boolean;
    no_stream: boolean;
    settings: any;
    extensions: string[];
    verbose: boolean;
    loader: string;
    cpu: boolean;
    auto_devices: boolean;
    gpu_memory: string[];
    cpu_memory: any;
    disk: boolean;
    disk_cache_dir: string;
    load_in_8bit: boolean;
    bf16: boolean;
    no_cache: boolean;
    xformers: boolean;
    sdp_attention: boolean;
    trust_remote_code: boolean;
    load_in_4bit: boolean;
    compute_dtype: string;
    quant_type: string;
    use_double_quant: boolean;
    threads: number;
    n_batch: number;
    no_mmap: boolean;
    mlock: boolean;
    cache_capacity: any;
    n_gpu_layers: number;
    n_ctx: number;
    llama_cpp_seed: number;
    wbits: number;
    model_type: string;
    groupsize: number;
    pre_layer: any;
    checkpoint: any;
    monkey_patch: boolean;
    quant_attn: boolean;
    warmup_autotune: boolean;
    fused_mlp: boolean;
    gptq_for_llama: boolean;
    autogptq: boolean;
    triton: boolean;
    no_inject_fused_attention: boolean;
    no_inject_fused_mlp: boolean;
    no_use_cuda_fp16: boolean;
    desc_act: boolean;
    gpu_split: string;
    max_seq_len: number;
    compress_pos_emb: number;
    flexgen: boolean;
    percent: number[];
    compress_weight: boolean;
    pin_weight: boolean;
    deepspeed: boolean;
    nvme_offload_dir: any;
    local_rank: number;
    rwkv_strategy: any;
    rwkv_cuda_on: boolean;
    listen: boolean;
    listen_host: any;
    listen_port: any;
    share: boolean;
    auto_launch: boolean;
    gradio_auth: any;
    gradio_auth_path: any;
    api: boolean;
    api_blocking_port: number;
    api_streaming_port: number;
    public_api: boolean;
    multimodal_pipeline: any;
}
//# sourceMappingURL=ModelInfo.d.ts.map