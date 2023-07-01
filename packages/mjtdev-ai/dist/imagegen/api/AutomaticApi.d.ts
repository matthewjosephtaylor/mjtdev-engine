/** AddCustomTagReq */
export interface AddCustomTagReq {
    /** Tag Name */
    tag_name: string;
}
/** AutoSAMConfig */
export interface AutoSAMConfig {
    /**
     * Points Per Side
     * @default 32
     */
    points_per_side?: number;
    /**
     * Points Per Batch
     * @default 64
     */
    points_per_batch?: number;
    /**
     * Pred Iou Thresh
     * @default 0.88
     */
    pred_iou_thresh?: number;
    /**
     * Stability Score Thresh
     * @default 0.95
     */
    stability_score_thresh?: number;
    /**
     * Stability Score Offset
     * @default 1
     */
    stability_score_offset?: number;
    /**
     * Box Nms Thresh
     * @default 0.7
     */
    box_nms_thresh?: number;
    /**
     * Crop N Layers
     * @default 0
     */
    crop_n_layers?: number;
    /**
     * Crop Nms Thresh
     * @default 0.7
     */
    crop_nms_thresh?: number;
    /**
     * Crop Overlap Ratio
     * @default 0.3413333333333333
     */
    crop_overlap_ratio?: number;
    /**
     * Crop N Points Downscale Factor
     * @default 1
     */
    crop_n_points_downscale_factor?: number;
    /**
     * Min Mask Region Area
     * @default 0
     */
    min_mask_region_area?: number;
}
/** Body_api_category_mask_sam_category_mask_post */
export interface BodyApiCategoryMaskSamCategoryMaskPost {
    payload: CategoryMaskRequest;
    autosam_conf: AutoSAMConfig;
}
/** Body_api_controlnet_seg_sam_controlnet_seg_post */
export interface BodyApiControlnetSegSamControlnetSegPost {
    payload: ControlNetSegRequest;
    autosam_conf: AutoSAMConfig;
}
/** Body_detect_controlnet_detect_post */
export interface BodyDetectControlnetDetectPost {
    /**
     * Controlnet Module
     * @default "none"
     */
    controlnet_module?: string;
    /**
     * Controlnet Input Images
     * @default []
     */
    controlnet_input_images?: string[];
    /**
     * Controlnet Processor Resolution
     * @default 512
     */
    controlnet_processor_res?: number;
    /**
     * Controlnet Threshold a
     * @default 64
     */
    controlnet_threshold_a?: number;
    /**
     * Controlnet Threshold b
     * @default 64
     */
    controlnet_threshold_b?: number;
}
/** Body_login_login__post */
export interface BodyLoginLoginPost {
    /**
     * Grant Type
     * @pattern password
     */
    grant_type?: string;
    /** Username */
    username: string;
    /** Password */
    password: string;
    /**
     * Scope
     * @default ""
     */
    scope?: string;
    /** Client Id */
    client_id?: string;
    /** Client Secret */
    client_secret?: string;
}
/** Body_login_login_post */
export interface BodyLoginLoginPost {
    /**
     * Grant Type
     * @pattern password
     */
    grant_type?: string;
    /** Username */
    username: string;
    /** Password */
    password: string;
    /**
     * Scope
     * @default ""
     */
    scope?: string;
    /** Client Id */
    client_id?: string;
    /** Client Secret */
    client_secret?: string;
}
/** Body_return_model_unet_channel_count_openOutpaint_unet_count_post */
export interface BodyReturnModelUnetChannelCountOpenOutpaintUnetCountPost {
    /**
     * Model Name
     * the model to be inspected
     */
    model_name: string;
}
/** Body_upload_file_upload_post */
export interface BodyUploadFileUploadPost {
    /** Files */
    files: File[];
}
/** CategoryMaskRequest */
export interface CategoryMaskRequest {
    /**
     * Sam Model Name
     * @default "sam_vit_h_4b8939.pth"
     */
    sam_model_name?: string;
    /**
     * Processor
     * @default "seg_ofade20k"
     */
    processor?: string;
    /**
     * Processor Res
     * @default 512
     */
    processor_res?: number;
    /**
     * Pixel Perfect
     * @default false
     */
    pixel_perfect?: boolean;
    /**
     * Resize Mode
     * @default 1
     */
    resize_mode?: number;
    /** Target W */
    target_W?: number;
    /** Target H */
    target_H?: number;
    /** Category */
    category: string;
    /** Input Image */
    input_image: string;
}
/** CheckPathExistsReq */
export interface CheckPathExistsReq {
    /** Paths */
    paths: string[];
}
/** ConfigResponse */
export interface ConfigResponse {
    /** Sample Path */
    sample_path: string;
    /**
     * Save Samples
     * @default false
     */
    save_samples?: boolean;
    /** Upscalers */
    upscalers: string[];
    /** Samplers */
    samplers: string[];
    /** Samplers Img2Img */
    samplers_img2img: string[];
    /** Scripts Txt2Img */
    scripts_txt2img: Record<string, object[]>;
    /** Scripts Img2Img */
    scripts_img2img: Record<string, object[]>;
    /** Face Restorers */
    face_restorers: string[];
    /** Sd Models */
    sd_models: string[];
    /** Sd Vaes */
    sd_vaes: string[];
}
/** ControlNetSegRequest */
export interface ControlNetSegRequest {
    /**
     * Sam Model Name
     * @default "sam_vit_h_4b8939.pth"
     */
    sam_model_name?: string;
    /** Input Image */
    input_image: string;
    /**
     * Processor
     * @default "seg_ofade20k"
     */
    processor?: string;
    /**
     * Processor Res
     * @default 512
     */
    processor_res?: number;
    /**
     * Pixel Perfect
     * @default false
     */
    pixel_perfect?: boolean;
    /**
     * Resize Mode
     * @default 1
     */
    resize_mode?: number;
    /** Target W */
    target_W?: number;
    /** Target H */
    target_H?: number;
}
/** CreateResponse */
export interface CreateResponse {
    /**
     * Create info
     * Response string from create embedding or hypernetwork task.
     */
    info: string;
}
/** DINOPredictRequest */
export interface DINOPredictRequest {
    /** Input Image */
    input_image: string;
    /**
     * Dino Model Name
     * @default "GroundingDINO_SwinT_OGC (694MB)"
     */
    dino_model_name?: string;
    /** Text Prompt */
    text_prompt: string;
    /**
     * Box Threshold
     * @default 0.3
     */
    box_threshold?: number;
}
/** DeleteFilesReq */
export interface DeleteFilesReq {
    /** File Paths */
    file_paths: string[];
}
/** DilateMaskRequest */
export interface DilateMaskRequest {
    /** Input Image */
    input_image: string;
    /** Mask */
    mask: string;
    /**
     * Dilate Amount
     * @default 10
     */
    dilate_amount?: number;
}
/** EmbeddingItem */
export interface EmbeddingItem {
    /**
     * Step
     * The number of steps that were used to train this embedding, if available
     */
    step?: number;
    /**
     * SD Checkpoint
     * The hash of the checkpoint this embedding was trained on, if available
     */
    sd_checkpoint?: string;
    /**
     * SD Checkpoint Name
     * The name of the checkpoint this embedding was trained on, if available. Note that this is the name that was used by the trainer; for a stable identifier, use `sd_checkpoint` instead
     */
    sd_checkpoint_name?: string;
    /**
     * Shape
     * The length of each individual vector in the embedding
     */
    shape: number;
    /**
     * Vectors
     * The number of vectors in the embedding
     */
    vectors: number;
}
/** EmbeddingsResponse */
export interface EmbeddingsResponse {
    /**
     * Loaded
     * Embeddings loaded for the current model
     */
    loaded: Record<string, EmbeddingItem>;
    /**
     * Skipped
     * Embeddings skipped for the current model (likely due to architecture incompatibility)
     */
    skipped: Record<string, EmbeddingItem>;
}
/** Estimation */
export interface Estimation {
    /**
     * Msg
     * @default "estimation"
     */
    msg?: string;
    /** Rank */
    rank?: number;
    /** Queue Size */
    queue_size: number;
    /** Avg Event Process Time */
    avg_event_process_time?: number;
    /** Avg Event Concurrent Process Time */
    avg_event_concurrent_process_time?: number;
    /** Rank Eta */
    rank_eta?: number;
    /** Queue Eta */
    queue_eta: number;
}
/** ExtrasBatchImagesRequest */
export interface ExtrasBatchImagesRequest {
    /**
     * Resize Mode
     * Sets the resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
     * @default 0
     */
    resize_mode?: 0 | 1;
    /**
     * Show results
     * Should the backend return the generated image?
     * @default true
     */
    show_extras_results?: boolean;
    /**
     * GFPGAN Visibility
     * Sets the visibility of GFPGAN, values should be between 0 and 1.
     * @min 0
     * @max 1
     * @default 0
     */
    gfpgan_visibility?: number;
    /**
     * CodeFormer Visibility
     * Sets the visibility of CodeFormer, values should be between 0 and 1.
     * @min 0
     * @max 1
     * @default 0
     */
    codeformer_visibility?: number;
    /**
     * CodeFormer Weight
     * Sets the weight of CodeFormer, values should be between 0 and 1.
     * @min 0
     * @max 1
     * @default 0
     */
    codeformer_weight?: number;
    /**
     * Upscaling Factor
     * By how much to upscale the image, only used when resize_mode=0.
     * @min 1
     * @max 8
     * @default 2
     */
    upscaling_resize?: number;
    /**
     * Target Width
     * Target width for the upscaler to hit. Only used when resize_mode=1.
     * @min 1
     * @default 512
     */
    upscaling_resize_w?: number;
    /**
     * Target Height
     * Target height for the upscaler to hit. Only used when resize_mode=1.
     * @min 1
     * @default 512
     */
    upscaling_resize_h?: number;
    /**
     * Crop to fit
     * Should the upscaler crop the image to fit in the chosen size?
     * @default true
     */
    upscaling_crop?: boolean;
    /**
     * Main upscaler
     * The name of the main upscaler to use, it has to be one of this list:
     * @default "None"
     */
    upscaler_1?: string;
    /**
     * Secondary upscaler
     * The name of the secondary upscaler to use, it has to be one of this list:
     * @default "None"
     */
    upscaler_2?: string;
    /**
     * Secondary upscaler visibility
     * Sets the visibility of secondary upscaler, values should be between 0 and 1.
     * @min 0
     * @max 1
     * @default 0
     */
    extras_upscaler_2_visibility?: number;
    /**
     * Upscale first
     * Should the upscaler run before restoring faces?
     * @default false
     */
    upscale_first?: boolean;
    /**
     * Images
     * List of images to work on. Must be Base64 strings
     */
    imageList: FileData[];
}
/** ExtrasBatchImagesResponse */
export interface ExtrasBatchImagesResponse {
    /**
     * HTML info
     * A series of HTML tags containing the process info.
     */
    html_info: string;
    /**
     * Images
     * The generated images in base64 format.
     */
    images: string[];
}
/** ExtrasSingleImageRequest */
export interface ExtrasSingleImageRequest {
    /**
     * Resize Mode
     * Sets the resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
     * @default 0
     */
    resize_mode?: 0 | 1;
    /**
     * Show results
     * Should the backend return the generated image?
     * @default true
     */
    show_extras_results?: boolean;
    /**
     * GFPGAN Visibility
     * Sets the visibility of GFPGAN, values should be between 0 and 1.
     * @min 0
     * @max 1
     * @default 0
     */
    gfpgan_visibility?: number;
    /**
     * CodeFormer Visibility
     * Sets the visibility of CodeFormer, values should be between 0 and 1.
     * @min 0
     * @max 1
     * @default 0
     */
    codeformer_visibility?: number;
    /**
     * CodeFormer Weight
     * Sets the weight of CodeFormer, values should be between 0 and 1.
     * @min 0
     * @max 1
     * @default 0
     */
    codeformer_weight?: number;
    /**
     * Upscaling Factor
     * By how much to upscale the image, only used when resize_mode=0.
     * @min 1
     * @max 8
     * @default 2
     */
    upscaling_resize?: number;
    /**
     * Target Width
     * Target width for the upscaler to hit. Only used when resize_mode=1.
     * @min 1
     * @default 512
     */
    upscaling_resize_w?: number;
    /**
     * Target Height
     * Target height for the upscaler to hit. Only used when resize_mode=1.
     * @min 1
     * @default 512
     */
    upscaling_resize_h?: number;
    /**
     * Crop to fit
     * Should the upscaler crop the image to fit in the chosen size?
     * @default true
     */
    upscaling_crop?: boolean;
    /**
     * Main upscaler
     * The name of the main upscaler to use, it has to be one of this list:
     * @default "None"
     */
    upscaler_1?: string;
    /**
     * Secondary upscaler
     * The name of the secondary upscaler to use, it has to be one of this list:
     * @default "None"
     */
    upscaler_2?: string;
    /**
     * Secondary upscaler visibility
     * Sets the visibility of secondary upscaler, values should be between 0 and 1.
     * @min 0
     * @max 1
     * @default 0
     */
    extras_upscaler_2_visibility?: number;
    /**
     * Upscale first
     * Should the upscaler run before restoring faces?
     * @default false
     */
    upscale_first?: boolean;
    /**
     * Image
     * Image to work on, must be a Base64 string containing the image's data.
     * @default ""
     */
    image?: string;
}
/** ExtrasSingleImageResponse */
export interface ExtrasSingleImageResponse {
    /**
     * HTML info
     * A series of HTML tags containing the process info.
     */
    html_info: string;
    /**
     * Image
     * The generated image in base64 format.
     */
    image?: string;
}
/** FaceRestorerItem */
export interface FaceRestorerItem {
    /** Name */
    name: string;
    /** Path */
    cmd_dir?: string;
}
/** FileData */
export interface FileData {
    /**
     * File data
     * Base64 representation of the file
     */
    data: string;
    /** File name */
    name: string;
}
/** Flags */
export interface Flags {
    /**
     * F
     * ==SUPPRESS==
     * @default false
     */
    f?: boolean;
    /**
     * Update All Extensions
     * launch.py argument: download updates for all extensions when starting the program
     * @default false
     */
    update_all_extensions?: boolean;
    /**
     * Skip Python Version Check
     * launch.py argument: do not check python version
     * @default false
     */
    skip_python_version_check?: boolean;
    /**
     * Skip Torch Cuda Test
     * launch.py argument: do not check if CUDA is able to work properly
     * @default false
     */
    skip_torch_cuda_test?: boolean;
    /**
     * Reinstall Xformers
     * launch.py argument: install the appropriate version of xformers even if you have some version already installed
     * @default false
     */
    reinstall_xformers?: boolean;
    /**
     * Reinstall Torch
     * launch.py argument: install the appropriate version of torch even if you have some version already installed
     * @default false
     */
    reinstall_torch?: boolean;
    /**
     * Update Check
     * launch.py argument: chck for updates at startup
     * @default false
     */
    update_check?: boolean;
    /**
     * Test Server
     * launch.py argument: configure server for testing
     * @default false
     */
    test_server?: boolean;
    /**
     * Skip Prepare Environment
     * launch.py argument: skip all environment preparation
     * @default false
     */
    skip_prepare_environment?: boolean;
    /**
     * Skip Install
     * launch.py argument: skip installation of packages
     * @default false
     */
    skip_install?: boolean;
    /**
     * Data Dir
     * base path where all user data is stored
     * @default "/home/user/automatic1111/stable-diffusion-webui"
     */
    data_dir?: string;
    /**
     * Config
     * path to config which constructs model
     * @default "/home/user/automatic1111/stable-diffusion-webui/configs/v1-inference.yaml"
     */
    config?: string;
    /**
     * Ckpt
     * path to checkpoint of stable diffusion model; if specified, this checkpoint will be added to the list of checkpoints and loaded
     * @default "/home/user/automatic1111/stable-diffusion-webui/model.ckpt"
     */
    ckpt?: string;
    /**
     * Ckpt Dir
     * Path to directory with stable diffusion checkpoints
     */
    ckpt_dir?: string;
    /**
     * Vae Dir
     * Path to directory with VAE files
     */
    vae_dir?: string;
    /**
     * Gfpgan Dir
     * GFPGAN directory
     * @default "./GFPGAN"
     */
    gfpgan_dir?: string;
    /**
     * Gfpgan Model
     * GFPGAN model file name
     */
    gfpgan_model?: string;
    /**
     * No Half
     * do not switch the model to 16-bit floats
     * @default false
     */
    no_half?: boolean;
    /**
     * No Half Vae
     * do not switch the VAE model to 16-bit floats
     * @default false
     */
    no_half_vae?: boolean;
    /**
     * No Progressbar Hiding
     * do not hide progressbar in gradio UI (we hide it because it slows down ML if you have hardware acceleration in browser)
     * @default false
     */
    no_progressbar_hiding?: boolean;
    /**
     * Max Batch Count
     * maximum batch count value for the UI
     * @default 16
     */
    max_batch_count?: number;
    /**
     * Embeddings Dir
     * embeddings directory for textual inversion (default: embeddings)
     * @default "/home/user/automatic1111/stable-diffusion-webui/embeddings"
     */
    embeddings_dir?: string;
    /**
     * Textual Inversion Templates Dir
     * directory with textual inversion templates
     * @default "/home/user/automatic1111/stable-diffusion-webui/textual_inversion_templates"
     */
    textual_inversion_templates_dir?: string;
    /**
     * Hypernetwork Dir
     * hypernetwork directory
     * @default "/home/user/automatic1111/stable-diffusion-webui/models/hypernetworks"
     */
    hypernetwork_dir?: string;
    /**
     * Localizations Dir
     * localizations directory
     * @default "/home/user/automatic1111/stable-diffusion-webui/localizations"
     */
    localizations_dir?: string;
    /**
     * Allow Code
     * allow custom script execution from webui
     * @default false
     */
    allow_code?: boolean;
    /**
     * Medvram
     * enable stable diffusion model optimizations for sacrificing a little speed for low VRM usage
     * @default false
     */
    medvram?: boolean;
    /**
     * Lowvram
     * enable stable diffusion model optimizations for sacrificing a lot of speed for very low VRM usage
     * @default false
     */
    lowvram?: boolean;
    /**
     * Lowram
     * load stable diffusion checkpoint weights to VRAM instead of RAM
     * @default false
     */
    lowram?: boolean;
    /**
     * Always Batch Cond Uncond
     * disables cond/uncond batching that is enabled to save memory with --medvram or --lowvram
     * @default false
     */
    always_batch_cond_uncond?: boolean;
    /**
     * Unload Gfpgan
     * does not do anything.
     * @default false
     */
    unload_gfpgan?: boolean;
    /**
     * Precision
     * evaluate at this precision
     * @default "autocast"
     */
    precision?: string;
    /**
     * Upcast Sampling
     * upcast sampling. No effect with --no-half. Usually produces similar results to --no-half with better performance while using less memory.
     * @default false
     */
    upcast_sampling?: boolean;
    /**
     * Share
     * use share=True for gradio and make the UI accessible through their site
     * @default false
     */
    share?: boolean;
    /**
     * Ngrok
     * ngrok authtoken, alternative to gradio --share
     */
    ngrok?: string;
    /**
     * Ngrok Region
     * does not do anything.
     * @default ""
     */
    ngrok_region?: string;
    /**
     * Ngrok Options
     * The options to pass to ngrok in JSON format, e.g.: '{"authtoken_from_env":true, "basic_auth":"user:password", "oauth_provider":"google", "oauth_allow_emails":"user@asdf.com"}'
     * @default {}
     */
    ngrok_options?: object;
    /**
     * Enable Insecure Extension Access
     * enable extensions tab regardless of other options
     * @default false
     */
    enable_insecure_extension_access?: boolean;
    /**
     * Codeformer Models Path
     * Path to directory with codeformer model file(s).
     * @default "/home/user/automatic1111/stable-diffusion-webui/models/Codeformer"
     */
    codeformer_models_path?: string;
    /**
     * Gfpgan Models Path
     * Path to directory with GFPGAN model file(s).
     * @default "/home/user/automatic1111/stable-diffusion-webui/models/GFPGAN"
     */
    gfpgan_models_path?: string;
    /**
     * Esrgan Models Path
     * Path to directory with ESRGAN model file(s).
     * @default "/home/user/automatic1111/stable-diffusion-webui/models/ESRGAN"
     */
    esrgan_models_path?: string;
    /**
     * Bsrgan Models Path
     * Path to directory with BSRGAN model file(s).
     * @default "/home/user/automatic1111/stable-diffusion-webui/models/BSRGAN"
     */
    bsrgan_models_path?: string;
    /**
     * Realesrgan Models Path
     * Path to directory with RealESRGAN model file(s).
     * @default "/home/user/automatic1111/stable-diffusion-webui/models/RealESRGAN"
     */
    realesrgan_models_path?: string;
    /**
     * Clip Models Path
     * Path to directory with CLIP model file(s).
     */
    clip_models_path?: string;
    /**
     * Xformers
     * enable xformers for cross attention layers
     * @default false
     */
    xformers?: boolean;
    /**
     * Force Enable Xformers
     * enable xformers for cross attention layers regardless of whether the checking code thinks you can run it; do not make bug reports if this fails to work
     * @default false
     */
    force_enable_xformers?: boolean;
    /**
     * Xformers Flash Attention
     * enable xformers with Flash Attention to improve reproducibility (supported for SD2.x or variant only)
     * @default false
     */
    xformers_flash_attention?: boolean;
    /**
     * Deepdanbooru
     * does not do anything
     * @default false
     */
    deepdanbooru?: boolean;
    /**
     * Opt Split Attention
     * prefer Doggettx's cross-attention layer optimization for automatic choice of optimization
     * @default false
     */
    opt_split_attention?: boolean;
    /**
     * Opt Sub Quad Attention
     * prefer memory efficient sub-quadratic cross-attention layer optimization for automatic choice of optimization
     * @default false
     */
    opt_sub_quad_attention?: boolean;
    /**
     * Sub Quad Q Chunk Size
     * query chunk size for the sub-quadratic cross-attention layer optimization to use
     * @default 1024
     */
    sub_quad_q_chunk_size?: number;
    /**
     * Sub Quad Kv Chunk Size
     * kv chunk size for the sub-quadratic cross-attention layer optimization to use
     */
    sub_quad_kv_chunk_size?: string;
    /**
     * Sub Quad Chunk Threshold
     * the percentage of VRAM threshold for the sub-quadratic cross-attention layer optimization to use chunking
     */
    sub_quad_chunk_threshold?: string;
    /**
     * Opt Split Attention Invokeai
     * prefer InvokeAI's cross-attention layer optimization for automatic choice of optimization
     * @default false
     */
    opt_split_attention_invokeai?: boolean;
    /**
     * Opt Split Attention V1
     * prefer older version of split attention optimization for automatic choice of optimization
     * @default false
     */
    opt_split_attention_v1?: boolean;
    /**
     * Opt Sdp Attention
     * prefer scaled dot product cross-attention layer optimization for automatic choice of optimization; requires PyTorch 2.*
     * @default false
     */
    opt_sdp_attention?: boolean;
    /**
     * Opt Sdp No Mem Attention
     * prefer scaled dot product cross-attention layer optimization without memory efficient attention for automatic choice of optimization, makes image generation deterministic; requires PyTorch 2.*
     * @default false
     */
    opt_sdp_no_mem_attention?: boolean;
    /**
     * Disable Opt Split Attention
     * does not do anything
     * @default false
     */
    disable_opt_split_attention?: boolean;
    /**
     * Disable Nan Check
     * do not check if produced images/latent spaces have nans; useful for running without a checkpoint in CI
     * @default false
     */
    disable_nan_check?: boolean;
    /**
     * Use Cpu
     * use CPU as torch device for specified modules
     * @default []
     */
    use_cpu?: any[];
    /**
     * Listen
     * launch gradio with 0.0.0.0 as server name, allowing to respond to network requests
     * @default false
     */
    listen?: boolean;
    /**
     * Port
     * launch gradio with given server port, you need root/admin rights for ports < 1024, defaults to 7860 if available
     */
    port?: string;
    /**
     * Show Negative Prompt
     * does not do anything
     * @default false
     */
    show_negative_prompt?: boolean;
    /**
     * Ui Config File
     * filename to use for ui configuration
     * @default "/home/user/automatic1111/stable-diffusion-webui/ui-config.json"
     */
    ui_config_file?: string;
    /**
     * Hide Ui Dir Config
     * hide directory configuration from webui
     * @default false
     */
    hide_ui_dir_config?: boolean;
    /**
     * Freeze Settings
     * disable editing settings
     * @default false
     */
    freeze_settings?: boolean;
    /**
     * Ui Settings File
     * filename to use for ui settings
     * @default "/home/user/automatic1111/stable-diffusion-webui/config.json"
     */
    ui_settings_file?: string;
    /**
     * Gradio Debug
     * launch gradio with --debug option
     * @default false
     */
    gradio_debug?: boolean;
    /**
     * Gradio Auth
     * set gradio authentication like "username:password"; or comma-delimit multiple like "u1:p1,u2:p2,u3:p3"
     */
    gradio_auth?: string;
    /**
     * Gradio Auth Path
     * set gradio authentication file path ex. "/path/to/auth/file" same auth format as --gradio-auth
     */
    gradio_auth_path?: string;
    /**
     * Gradio Img2Img Tool
     * does not do anything
     */
    gradio_img2img_tool?: string;
    /**
     * Gradio Inpaint Tool
     * does not do anything
     */
    gradio_inpaint_tool?: string;
    /**
     * Gradio Allowed Path
     * add path to gradio's allowed_paths, make it possible to serve files from it
     */
    gradio_allowed_path?: string;
    /**
     * Opt Channelslast
     * change memory type for stable diffusion to channels last
     * @default false
     */
    opt_channelslast?: boolean;
    /**
     * Styles File
     * filename to use for styles
     * @default "/home/user/automatic1111/stable-diffusion-webui/styles.csv"
     */
    styles_file?: string;
    /**
     * Autolaunch
     * open the webui URL in the system's default browser upon launch
     * @default false
     */
    autolaunch?: boolean;
    /**
     * Theme
     * launches the UI with light or dark theme
     */
    theme?: string;
    /**
     * Use Textbox Seed
     * use textbox for seeds in UI (no up/down, but possible to input long seeds)
     * @default false
     */
    use_textbox_seed?: boolean;
    /**
     * Disable Console Progressbars
     * do not output progressbars to console
     * @default false
     */
    disable_console_progressbars?: boolean;
    /**
     * Enable Console Prompts
     * print prompts to console when generating with txt2img and img2img
     * @default false
     */
    enable_console_prompts?: boolean;
    /**
     * Vae Path
     * Checkpoint to use as VAE; setting this argument disables all settings related to VAE
     */
    vae_path?: string;
    /**
     * Disable Safe Unpickle
     * disable checking pytorch models for malicious code
     * @default false
     */
    disable_safe_unpickle?: boolean;
    /**
     * Api
     * use api=True to launch the API together with the webui (use --nowebui instead for only the API)
     * @default false
     */
    api?: boolean;
    /**
     * Api Auth
     * Set authentication for API like "username:password"; or comma-delimit multiple like "u1:p1,u2:p2,u3:p3"
     */
    api_auth?: string;
    /**
     * Api Log
     * use api-log=True to enable logging of all API requests
     * @default false
     */
    api_log?: boolean;
    /**
     * Nowebui
     * use api=True to launch the API instead of the webui
     * @default false
     */
    nowebui?: boolean;
    /**
     * Ui Debug Mode
     * Don't load model to quickly launch UI
     * @default false
     */
    ui_debug_mode?: boolean;
    /**
     * Device Id
     * Select the default CUDA device to use (export CUDA_VISIBLE_DEVICES=0,1,etc might be needed before)
     */
    device_id?: string;
    /**
     * Administrator
     * Administrator rights
     * @default false
     */
    administrator?: boolean;
    /**
     * Cors Allow Origins
     * Allowed CORS origin(s) in the form of a comma-separated list (no spaces)
     */
    cors_allow_origins?: string;
    /**
     * Cors Allow Origins Regex
     * Allowed CORS origin(s) in the form of a single regular expression
     */
    cors_allow_origins_regex?: string;
    /**
     * Tls Keyfile
     * Partially enables TLS, requires --tls-certfile to fully function
     */
    tls_keyfile?: string;
    /**
     * Tls Certfile
     * Partially enables TLS, requires --tls-keyfile to fully function
     */
    tls_certfile?: string;
    /**
     * Disable Tls Verify
     * When passed, enables the use of self-signed certificates.
     */
    disable_tls_verify?: string;
    /**
     * Server Name
     * Sets hostname of server
     */
    server_name?: string;
    /**
     * Gradio Queue
     * does not do anything
     * @default true
     */
    gradio_queue?: boolean;
    /**
     * No Gradio Queue
     * Disables gradio queue; causes the webpage to use http requests instead of websockets; was the defaul in earlier versions
     * @default false
     */
    no_gradio_queue?: boolean;
    /**
     * Skip Version Check
     * Do not check versions of torch and xformers
     * @default false
     */
    skip_version_check?: boolean;
    /**
     * No Hashing
     * disable sha256 hashing of checkpoints to help loading performance
     * @default false
     */
    no_hashing?: boolean;
    /**
     * No Download Sd Model
     * don't download SD1.5 model even if no model is found in --ckpt-dir
     * @default false
     */
    no_download_sd_model?: boolean;
    /**
     * Subpath
     * customize the subpath for gradio, use with reverse proxy
     */
    subpath?: string;
    /**
     * Add Stop Route
     * add /_stop route to stop server
     * @default false
     */
    add_stop_route?: boolean;
    /**
     * Lock Oo Submodule
     * (openOutpaint-webUI-extension) Prevent checking for main openOutpaint submodule updates.
     * @default false
     */
    lock_oo_submodule?: boolean;
    /**
     * Controlnet Dir
     * Path to directory with ControlNet models
     */
    controlnet_dir?: string;
    /**
     * Controlnet Annotator Models Path
     * Path to directory with annotator model directories
     */
    controlnet_annotator_models_path?: string;
    /**
     * No Half Controlnet
     * do not switch the ControlNet models to 16-bit floats (only needed without --no-half)
     */
    no_half_controlnet?: string;
    /**
     * Controlnet Preprocessor Cache Size
     * Cache size for controlnet preprocessor results
     * @default 16
     */
    controlnet_preprocessor_cache_size?: number;
    /**
     * Ldsr Models Path
     * Path to directory with LDSR model file(s).
     * @default "/home/user/automatic1111/stable-diffusion-webui/models/LDSR"
     */
    ldsr_models_path?: string;
    /**
     * Lora Dir
     * Path to directory with Lora networks.
     * @default "/home/user/automatic1111/stable-diffusion-webui/models/Lora"
     */
    lora_dir?: string;
    /**
     * Scunet Models Path
     * Path to directory with ScuNET model file(s).
     * @default "/home/user/automatic1111/stable-diffusion-webui/models/ScuNET"
     */
    scunet_models_path?: string;
    /**
     * Swinir Models Path
     * Path to directory with SwinIR model file(s).
     * @default "/home/user/automatic1111/stable-diffusion-webui/models/SwinIR"
     */
    swinir_models_path?: string;
}
/** HTTPValidationError */
export interface HTTPValidationError {
    /** Detail */
    detail?: ValidationError[];
}
/** HypernetworkItem */
export interface HypernetworkItem {
    /** Name */
    name: string;
    /** Path */
    path?: string;
}
/** ImageResponse */
export interface ImageResponse {
    /** Outputs */
    outputs: string[];
    /** Info */
    info: string;
}
/** ImageToImageResponse */
export interface ImageToImageResponse {
    /**
     * Image
     * The generated image in base64 format.
     */
    images?: string[];
    /** Parameters */
    parameters: object;
    /** Info */
    info: string;
}
/**
 * Img2ImgRequest
 * Img2Img API request. If optional attributes aren't set, the defaults from
 * `krita_config.yaml` will be used.
 */
export interface Img2ImgRequest {
    /**
     * Restore Faces
     * @default false
     */
    restore_faces?: boolean;
    /**
     * Face Restorer
     * @default "CodeFormer"
     */
    face_restorer?: string;
    /**
     * Codeformer Weight
     * @default 0.5
     */
    codeformer_weight?: number;
    /**
     * Inpainting Fill
     * @default 1
     */
    inpainting_fill?: number;
    /**
     * Inpaint Full Res
     * @default false
     */
    inpaint_full_res?: boolean;
    /**
     * Inpaint Full Res Padding
     * @default 0
     */
    inpaint_full_res_padding?: number;
    /**
     * Mask Blur
     * @default 0
     */
    mask_blur?: number;
    /**
     * Invert Mask
     * @default false
     */
    invert_mask?: boolean;
    /**
     * Inpaint Mask Weight
     * @default 1
     */
    inpaint_mask_weight?: number;
    /**
     * Sd Model
     * @default "model.ckpt"
     */
    sd_model?: string;
    /**
     * Sd Vae
     * @default "Automatic"
     */
    sd_vae?: string;
    /**
     * Clip Skip
     * @default 1
     */
    clip_skip?: number;
    /**
     * Script
     * @default "None"
     */
    script?: string;
    /** Script Args */
    script_args?: any[];
    /**
     * Prompt
     * @default "dog"
     */
    prompt?: any;
    /**
     * Negative Prompt
     * @default ""
     */
    negative_prompt?: any;
    /**
     * Seed
     * @default -1
     */
    seed?: number;
    /**
     * Seed Enable Extras
     * @default false
     */
    seed_enable_extras?: boolean;
    /**
     * Subseed
     * @default -1
     */
    subseed?: number;
    /**
     * Subseed Strength
     * @default 0
     */
    subseed_strength?: number;
    /**
     * Seed Resize From H
     * @default 0
     */
    seed_resize_from_h?: number;
    /**
     * Seed Resize From W
     * @default 0
     */
    seed_resize_from_w?: number;
    /**
     * Sampler Name
     * @default "Euler a"
     */
    sampler_name?: string;
    /**
     * Steps
     * @default 50
     */
    steps?: number;
    /**
     * Cfg Scale
     * @default 7.5
     */
    cfg_scale?: number;
    /**
     * Denoising Strength
     * @default 0.35
     */
    denoising_strength?: number;
    /**
     * Batch Count
     * @default 1
     */
    batch_count?: number;
    /**
     * Batch Size
     * @default 1
     */
    batch_size?: number;
    /**
     * Base Size
     * @default 512
     */
    base_size?: number;
    /**
     * Max Size
     * @default 768
     */
    max_size?: number;
    /**
     * Disable Sddebz Highres
     * @default false
     */
    disable_sddebz_highres?: boolean;
    /**
     * Tiling
     * @default false
     */
    tiling?: boolean;
    /**
     * Highres Fix
     * @default false
     */
    highres_fix?: boolean;
    /**
     * Firstphase Height
     * @default 512
     */
    firstphase_height?: number;
    /**
     * Firstphase Width
     * @default 512
     */
    firstphase_width?: number;
    /**
     * Upscaler Name
     * @default "None"
     */
    upscaler_name?: string;
    /**
     * Filter Nsfw
     * @default false
     */
    filter_nsfw?: boolean;
    /**
     * Include Grid
     * @default false
     */
    include_grid?: boolean;
    /**
     * Sample Path
     * @default "outputs/krita-out"
     */
    sample_path?: string;
    /**
     * Save Samples
     * @default false
     */
    save_samples?: boolean;
    /**
     * Is Inpaint
     * @default false
     */
    is_inpaint?: boolean;
    /**
     * Resize Mode
     * @default 1
     */
    resize_mode?: number;
    /**
     * Color Correct
     * @default true
     */
    color_correct?: boolean;
    /**
     * Do Exact Steps
     * @default true
     */
    do_exact_steps?: boolean;
    /** Src Img */
    src_img: string;
    /** Mask Img */
    mask_img?: string;
}
/** InterrogateRequest */
export interface InterrogateRequest {
    /**
     * Image
     * Image to work on, must be a Base64 string containing the image's data.
     * @default ""
     */
    image?: string;
    /**
     * Model
     * The interrogate model used.
     * @default "clip"
     */
    model?: string;
}
/** MatchImagesByTagsReq */
export interface MatchImagesByTagsReq {
    /** And Tags */
    and_tags: number[];
    /** Or Tags */
    or_tags: number[];
    /** Not Tags */
    not_tags: number[];
}
/** MemoryResponse */
export interface MemoryResponse {
    /**
     * RAM
     * System memory stats
     */
    ram: object;
    /**
     * CUDA
     * nVidia CUDA memory stats
     */
    cuda: object;
}
/** MoveFilesReq */
export interface MoveFilesReq {
    /** File Paths */
    file_paths: string[];
    /** Dest */
    dest: string;
}
/** OpenFolderReq */
export interface OpenFolderReq {
    /** Path */
    path: string;
}
/** Options */
export interface Options {
    /**
     * Samples Save
     * Always save all generated images
     * @default true
     */
    samples_save?: boolean;
    /**
     * Samples Format
     * File format for images
     * @default "png"
     */
    samples_format?: string;
    /**
     * Samples Filename Pattern
     * Images filename pattern
     * @default ""
     */
    samples_filename_pattern?: string;
    /**
     * Save Images Add Number
     * Add number to filename when saving
     * @default true
     */
    save_images_add_number?: boolean;
    /**
     * Grid Save
     * Always save all generated image grids
     * @default true
     */
    grid_save?: boolean;
    /**
     * Grid Format
     * File format for grids
     * @default "png"
     */
    grid_format?: string;
    /**
     * Grid Extended Filename
     * Add extended info (seed, prompt) to filename when saving grid
     * @default false
     */
    grid_extended_filename?: boolean;
    /**
     * Grid Only If Multiple
     * Do not save grids consisting of one picture
     * @default true
     */
    grid_only_if_multiple?: boolean;
    /**
     * Grid Prevent Empty Spots
     * Prevent empty spots in grid (when set to autodetect)
     * @default false
     */
    grid_prevent_empty_spots?: boolean;
    /**
     * N Rows
     * Grid row count; use -1 for autodetect and 0 for it to be same as batch size
     * @default -1
     */
    n_rows?: number;
    /**
     * Enable Pnginfo
     * Save text information about generation parameters as chunks to png files
     * @default true
     */
    enable_pnginfo?: boolean;
    /**
     * Save Txt
     * Create a text file next to every image with generation parameters.
     * @default false
     */
    save_txt?: boolean;
    /**
     * Save Images Before Face Restoration
     * Save a copy of image before doing face restoration.
     * @default false
     */
    save_images_before_face_restoration?: boolean;
    /**
     * Save Images Before Highres Fix
     * Save a copy of image before applying highres fix.
     * @default false
     */
    save_images_before_highres_fix?: boolean;
    /**
     * Save Images Before Color Correction
     * Save a copy of image before applying color correction to img2img results
     * @default false
     */
    save_images_before_color_correction?: boolean;
    /**
     * Save Mask
     * For inpainting, save a copy of the greyscale mask
     * @default false
     */
    save_mask?: boolean;
    /**
     * Save Mask Composite
     * For inpainting, save a masked composite
     * @default false
     */
    save_mask_composite?: boolean;
    /**
     * Jpeg Quality
     * Quality for saved jpeg images
     * @default 80
     */
    jpeg_quality?: number;
    /**
     * Webp Lossless
     * Use lossless compression for webp images
     * @default false
     */
    webp_lossless?: boolean;
    /**
     * Export For 4Chan
     * Save copy of large images as JPG
     * @default true
     */
    export_for_4chan?: boolean;
    /**
     * Img Downscale Threshold
     * File size limit for the above option, MB
     * @default 4
     */
    img_downscale_threshold?: number;
    /**
     * Target Side Length
     * Width/height limit for the above option, in pixels
     * @default 4000
     */
    target_side_length?: number;
    /**
     * Img Max Size Mp
     * Maximum image size
     * @default 200
     */
    img_max_size_mp?: number;
    /**
     * Use Original Name Batch
     * Use original name for output filename during batch process in extras tab
     * @default true
     */
    use_original_name_batch?: boolean;
    /**
     * Use Upscaler Name As Suffix
     * Use upscaler name as filename suffix in the extras tab
     * @default false
     */
    use_upscaler_name_as_suffix?: boolean;
    /**
     * Save Selected Only
     * When using 'Save' button, only save a single selected image
     * @default true
     */
    save_selected_only?: boolean;
    /**
     * Save Init Img
     * Save init images when using img2img
     * @default false
     */
    save_init_img?: boolean;
    /**
     * Temp Dir
     * Directory for temporary images; leave empty for default
     * @default ""
     */
    temp_dir?: string;
    /**
     * Clean Temp Dir At Start
     * Cleanup non-default temporary directory when starting webui
     * @default false
     */
    clean_temp_dir_at_start?: boolean;
    /**
     * Outdir Samples
     * Output directory for images; if empty, defaults to three directories below
     * @default ""
     */
    outdir_samples?: string;
    /**
     * Outdir Txt2Img Samples
     * Output directory for txt2img images
     * @default "outputs/txt2img-images"
     */
    outdir_txt2img_samples?: string;
    /**
     * Outdir Img2Img Samples
     * Output directory for img2img images
     * @default "outputs/img2img-images"
     */
    outdir_img2img_samples?: string;
    /**
     * Outdir Extras Samples
     * Output directory for images from extras tab
     * @default "outputs/extras-images"
     */
    outdir_extras_samples?: string;
    /**
     * Outdir Grids
     * Output directory for grids; if empty, defaults to two directories below
     * @default ""
     */
    outdir_grids?: string;
    /**
     * Outdir Txt2Img Grids
     * Output directory for txt2img grids
     * @default "outputs/txt2img-grids"
     */
    outdir_txt2img_grids?: string;
    /**
     * Outdir Img2Img Grids
     * Output directory for img2img grids
     * @default "outputs/img2img-grids"
     */
    outdir_img2img_grids?: string;
    /**
     * Outdir Save
     * Directory for saving images using the Save button
     * @default "log/images"
     */
    outdir_save?: string;
    /**
     * Outdir Init Images
     * Directory for saving init images when using img2img
     * @default "outputs/init-images"
     */
    outdir_init_images?: string;
    /**
     * Save To Dirs
     * Save images to a subdirectory
     * @default true
     */
    save_to_dirs?: boolean;
    /**
     * Grid Save To Dirs
     * Save grids to a subdirectory
     * @default true
     */
    grid_save_to_dirs?: boolean;
    /**
     * Use Save To Dirs For Ui
     * When using "Save" button, save images to a subdirectory
     * @default false
     */
    use_save_to_dirs_for_ui?: boolean;
    /**
     * Directories Filename Pattern
     * Directory name pattern
     * @default "[date]"
     */
    directories_filename_pattern?: string;
    /**
     * Directories Max Prompt Words
     * Max prompt words for [prompt_words] pattern
     * @default 8
     */
    directories_max_prompt_words?: number;
    /**
     * Esrgan Tile
     * Tile size for ESRGAN upscalers.
     * @default 192
     */
    ESRGAN_tile?: number;
    /**
     * Esrgan Tile Overlap
     * Tile overlap for ESRGAN upscalers.
     * @default 8
     */
    ESRGAN_tile_overlap?: number;
    /**
     * Realesrgan Enabled Models
     * Select which Real-ESRGAN models to show in the web UI.
     * @default ["R-ESRGAN 4x+","R-ESRGAN 4x+ Anime6B"]
     */
    realesrgan_enabled_models?: any[];
    /**
     * Upscaler For Img2Img
     * Upscaler for img2img
     */
    upscaler_for_img2img?: null;
    /**
     * Face Restoration Model
     * Face restoration model
     * @default "CodeFormer"
     */
    face_restoration_model?: string;
    /**
     * Code Former Weight
     * CodeFormer weight
     * @default 0.5
     */
    code_former_weight?: number;
    /**
     * Face Restoration Unload
     * Move face restoration model from VRAM into RAM after processing
     * @default false
     */
    face_restoration_unload?: boolean;
    /**
     * Show Warnings
     * Show warnings in console.
     * @default false
     */
    show_warnings?: boolean;
    /**
     * Memmon Poll Rate
     * VRAM usage polls per second during generation.
     * @default 8
     */
    memmon_poll_rate?: number;
    /**
     * Samples Log Stdout
     * Always print all generation info to standard output
     * @default false
     */
    samples_log_stdout?: boolean;
    /**
     * Multiple Tqdm
     * Add a second progress bar to the console that shows progress for an entire job.
     * @default true
     */
    multiple_tqdm?: boolean;
    /**
     * Print Hypernet Extra
     * Print extra hypernetwork information to console.
     * @default false
     */
    print_hypernet_extra?: boolean;
    /**
     * List Hidden Files
     * Load models/files in hidden directories
     * @default true
     */
    list_hidden_files?: boolean;
    /**
     * Unload Models When Training
     * Move VAE and CLIP to RAM when training if possible. Saves VRAM.
     * @default false
     */
    unload_models_when_training?: boolean;
    /**
     * Pin Memory
     * Turn on pin_memory for DataLoader. Makes training slightly faster but can increase memory usage.
     * @default false
     */
    pin_memory?: boolean;
    /**
     * Save Optimizer State
     * Saves Optimizer state as separate *.optim file. Training of embedding or HN can be resumed with the matching optim file.
     * @default false
     */
    save_optimizer_state?: boolean;
    /**
     * Save Training Settings To Txt
     * Save textual inversion and hypernet settings to a text file whenever training starts.
     * @default true
     */
    save_training_settings_to_txt?: boolean;
    /**
     * Dataset Filename Word Regex
     * Filename word regex
     * @default ""
     */
    dataset_filename_word_regex?: string;
    /**
     * Dataset Filename Join String
     * Filename join string
     * @default " "
     */
    dataset_filename_join_string?: string;
    /**
     * Training Image Repeats Per Epoch
     * Number of repeats for a single input image per epoch; used only for displaying epoch number
     * @default 1
     */
    training_image_repeats_per_epoch?: number;
    /**
     * Training Write Csv Every
     * Save an csv containing the loss to log directory every N steps, 0 to disable
     * @default 500
     */
    training_write_csv_every?: number;
    /**
     * Training Xattention Optimizations
     * Use cross attention optimizations while training
     * @default false
     */
    training_xattention_optimizations?: boolean;
    /**
     * Training Enable Tensorboard
     * Enable tensorboard logging.
     * @default false
     */
    training_enable_tensorboard?: boolean;
    /**
     * Training Tensorboard Save Images
     * Save generated images within tensorboard.
     * @default false
     */
    training_tensorboard_save_images?: boolean;
    /**
     * Training Tensorboard Flush Every
     * How often, in seconds, to flush the pending tensorboard events and summaries to disk.
     * @default 120
     */
    training_tensorboard_flush_every?: number;
    /**
     * Sd Model Checkpoint
     * Stable Diffusion checkpoint
     */
    sd_model_checkpoint?: string;
    /**
     * Sd Checkpoint Cache
     * Checkpoints to cache in RAM
     * @default 0
     */
    sd_checkpoint_cache?: number;
    /**
     * Sd Vae Checkpoint Cache
     * VAE Checkpoints to cache in RAM
     * @default 0
     */
    sd_vae_checkpoint_cache?: number;
    /**
     * Sd Vae
     * SD VAE
     * @default "Automatic"
     */
    sd_vae?: string;
    /**
     * Sd Vae As Default
     * Ignore selected VAE for stable diffusion checkpoints that have their own .vae.pt next to them
     * @default true
     */
    sd_vae_as_default?: boolean;
    /**
     * Inpainting Mask Weight
     * Inpainting conditioning mask strength
     * @default 1
     */
    inpainting_mask_weight?: number;
    /**
     * Initial Noise Multiplier
     * Noise multiplier for img2img
     * @default 1
     */
    initial_noise_multiplier?: number;
    /**
     * Img2Img Color Correction
     * Apply color correction to img2img results to match original colors.
     * @default false
     */
    img2img_color_correction?: boolean;
    /**
     * Img2Img Fix Steps
     * With img2img, do exactly the amount of steps the slider specifies.
     * @default false
     */
    img2img_fix_steps?: boolean;
    /**
     * Img2Img Background Color
     * With img2img, fill image's transparent parts with this color.
     * @default "#ffffff"
     */
    img2img_background_color?: string;
    /**
     * Enable Quantization
     * Enable quantization in K samplers for sharper and cleaner results. This may change existing seeds. Requires restart to apply.
     * @default false
     */
    enable_quantization?: boolean;
    /**
     * Enable Emphasis
     * Enable emphasis
     * @default true
     */
    enable_emphasis?: boolean;
    /**
     * Enable Batch Seeds
     * Make K-diffusion samplers produce same images in a batch as when making a single image
     * @default true
     */
    enable_batch_seeds?: boolean;
    /**
     * Comma Padding Backtrack
     * Prompt word wrap length limit
     * @default 20
     */
    comma_padding_backtrack?: number;
    /**
     * Clip Stop At Last Layers
     * Clip skip
     * @default 1
     */
    CLIP_stop_at_last_layers?: number;
    /**
     * Upcast Attn
     * Upcast cross attention layer to float32
     * @default false
     */
    upcast_attn?: boolean;
    /**
     * Randn Source
     * Random number generator source.
     * @default "GPU"
     */
    randn_source?: string;
    /**
     * Cross Attention Optimization
     * Cross attention optimization
     * @default "Automatic"
     */
    cross_attention_optimization?: string;
    /**
     * S Min Uncond
     * Negative Guidance minimum sigma
     * @default 0
     */
    s_min_uncond?: number;
    /**
     * Token Merging Ratio
     * Token merging ratio
     * @default 0
     */
    token_merging_ratio?: number;
    /**
     * Token Merging Ratio Img2Img
     * Token merging ratio for img2img
     * @default 0
     */
    token_merging_ratio_img2img?: number;
    /**
     * Token Merging Ratio Hr
     * Token merging ratio for high-res pass
     * @default 0
     */
    token_merging_ratio_hr?: number;
    /**
     * Use Old Emphasis Implementation
     * Use old emphasis implementation. Can be useful to reproduce old seeds.
     * @default false
     */
    use_old_emphasis_implementation?: boolean;
    /**
     * Use Old Karras Scheduler Sigmas
     * Use old karras scheduler sigmas (0.1 to 10).
     * @default false
     */
    use_old_karras_scheduler_sigmas?: boolean;
    /**
     * No Dpmpp Sde Batch Determinism
     * Do not make DPM++ SDE deterministic across different batch sizes.
     * @default false
     */
    no_dpmpp_sde_batch_determinism?: boolean;
    /**
     * Use Old Hires Fix Width Height
     * For hires fix, use width/height sliders to set final resolution rather than first pass (disables Upscale by, Resize width/height to).
     * @default false
     */
    use_old_hires_fix_width_height?: boolean;
    /**
     * Dont Fix Second Order Samplers Schedule
     * Do not fix prompt schedule for second order samplers.
     * @default false
     */
    dont_fix_second_order_samplers_schedule?: boolean;
    /**
     * Interrogate Keep Models In Memory
     * Keep models in VRAM
     * @default false
     */
    interrogate_keep_models_in_memory?: boolean;
    /**
     * Interrogate Return Ranks
     * Include ranks of model tags matches in results.
     * @default false
     */
    interrogate_return_ranks?: boolean;
    /**
     * Interrogate Clip Num Beams
     * BLIP: num_beams
     * @default 1
     */
    interrogate_clip_num_beams?: number;
    /**
     * Interrogate Clip Min Length
     * BLIP: minimum description length
     * @default 24
     */
    interrogate_clip_min_length?: number;
    /**
     * Interrogate Clip Max Length
     * BLIP: maximum description length
     * @default 48
     */
    interrogate_clip_max_length?: number;
    /**
     * Interrogate Clip Dict Limit
     * CLIP: maximum number of lines in text file
     * @default 1500
     */
    interrogate_clip_dict_limit?: number;
    /**
     * Interrogate Clip Skip Categories
     * CLIP: skip inquire categories
     * @default []
     */
    interrogate_clip_skip_categories?: any[];
    /**
     * Interrogate Deepbooru Score Threshold
     * deepbooru: score threshold
     * @default 0.5
     */
    interrogate_deepbooru_score_threshold?: number;
    /**
     * Deepbooru Sort Alpha
     * deepbooru: sort tags alphabetically
     * @default true
     */
    deepbooru_sort_alpha?: boolean;
    /**
     * Deepbooru Use Spaces
     * deepbooru: use spaces in tags
     * @default true
     */
    deepbooru_use_spaces?: boolean;
    /**
     * Deepbooru Escape
     * deepbooru: escape (\) brackets
     * @default true
     */
    deepbooru_escape?: boolean;
    /**
     * Deepbooru Filter Tags
     * deepbooru: filter out those tags
     * @default ""
     */
    deepbooru_filter_tags?: string;
    /**
     * Extra Networks Show Hidden Directories
     * Show hidden directories
     * @default true
     */
    extra_networks_show_hidden_directories?: boolean;
    /**
     * Extra Networks Hidden Models
     * Show cards for models in hidden directories
     * @default "When searched"
     */
    extra_networks_hidden_models?: string;
    /**
     * Extra Networks Default View
     * Default view for Extra Networks
     * @default "cards"
     */
    extra_networks_default_view?: string;
    /**
     * Extra Networks Default Multiplier
     * Multiplier for extra networks
     * @default 1
     */
    extra_networks_default_multiplier?: number;
    /**
     * Extra Networks Card Width
     * Card width for Extra Networks
     * @default 0
     */
    extra_networks_card_width?: number;
    /**
     * Extra Networks Card Height
     * Card height for Extra Networks
     * @default 0
     */
    extra_networks_card_height?: number;
    /**
     * Extra Networks Add Text Separator
     * Extra networks separator
     * @default " "
     */
    extra_networks_add_text_separator?: string;
    /**
     * Ui Extra Networks Tab Reorder
     * Extra networks tab order
     * @default ""
     */
    ui_extra_networks_tab_reorder?: string;
    /**
     * Sd Hypernetwork
     * Add hypernetwork to prompt
     * @default "None"
     */
    sd_hypernetwork?: string;
    /**
     * Localization
     * Localization
     * @default "None"
     */
    localization?: string;
    /**
     * Gradio Theme
     * Gradio theme
     * @default "Default"
     */
    gradio_theme?: string;
    /**
     * Img2Img Editor Height
     * img2img: height of image editor
     * @default 720
     */
    img2img_editor_height?: number;
    /**
     * Return Grid
     * Show grid in results for web
     * @default true
     */
    return_grid?: boolean;
    /**
     * Return Mask
     * For inpainting, include the greyscale mask in results for web
     * @default false
     */
    return_mask?: boolean;
    /**
     * Return Mask Composite
     * For inpainting, include masked composite in results for web
     * @default false
     */
    return_mask_composite?: boolean;
    /**
     * Do Not Show Images
     * Do not show any images in results for web
     * @default false
     */
    do_not_show_images?: boolean;
    /**
     * Send Seed
     * Send seed when sending prompt or image to other interface
     * @default true
     */
    send_seed?: boolean;
    /**
     * Send Size
     * Send size when sending prompt or image to another interface
     * @default true
     */
    send_size?: boolean;
    /**
     * Font
     * Font for image grids that have text
     * @default ""
     */
    font?: string;
    /**
     * Js Modal Lightbox
     * Enable full page image viewer
     * @default true
     */
    js_modal_lightbox?: boolean;
    /**
     * Js Modal Lightbox Initially Zoomed
     * Show images zoomed in by default in full page image viewer
     * @default true
     */
    js_modal_lightbox_initially_zoomed?: boolean;
    /**
     * Js Modal Lightbox Gamepad
     * Navigate image viewer with gamepad
     * @default false
     */
    js_modal_lightbox_gamepad?: boolean;
    /**
     * Js Modal Lightbox Gamepad Repeat
     * Gamepad repeat period, in milliseconds
     * @default 250
     */
    js_modal_lightbox_gamepad_repeat?: number;
    /**
     * Show Progress In Title
     * Show generation progress in window title.
     * @default true
     */
    show_progress_in_title?: boolean;
    /**
     * Samplers In Dropdown
     * Use dropdown for sampler selection instead of radio group
     * @default true
     */
    samplers_in_dropdown?: boolean;
    /**
     * Dimensions And Batch Together
     * Show Width/Height and Batch sliders in same row
     * @default true
     */
    dimensions_and_batch_together?: boolean;
    /**
     * Keyedit Precision Attention
     * Ctrl+up/down precision when editing (attention:1.1)
     * @default 0.1
     */
    keyedit_precision_attention?: number;
    /**
     * Keyedit Precision Extra
     * Ctrl+up/down precision when editing <extra networks:0.9>
     * @default 0.05
     */
    keyedit_precision_extra?: number;
    /**
     * Keyedit Delimiters
     * Ctrl+up/down word delimiters
     * @default ".,\/!?%^*;:{}=`~()"
     */
    keyedit_delimiters?: string;
    /**
     * Quicksettings List
     * Quicksettings list
     * @default ["sd_model_checkpoint"]
     */
    quicksettings_list?: any[];
    /**
     * Ui Tab Order
     * UI tab order
     * @default []
     */
    ui_tab_order?: any[];
    /**
     * Hidden Tabs
     * Hidden UI tabs
     * @default []
     */
    hidden_tabs?: any[];
    /**
     * Ui Reorder
     * txt2img/img2img UI item order
     * @default "inpaint, sampler, checkboxes, hires_fix, dimensions, cfg, seed, batch, override_settings, scripts"
     */
    ui_reorder?: string;
    /**
     * Hires Fix Show Sampler
     * Hires fix: show hires sampler selection
     * @default false
     */
    hires_fix_show_sampler?: boolean;
    /**
     * Hires Fix Show Prompts
     * Hires fix: show hires prompt and negative prompt
     * @default false
     */
    hires_fix_show_prompts?: boolean;
    /**
     * Add Model Hash To Info
     * Add model hash to generation information
     * @default true
     */
    add_model_hash_to_info?: boolean;
    /**
     * Add Model Name To Info
     * Add model name to generation information
     * @default true
     */
    add_model_name_to_info?: boolean;
    /**
     * Add Version To Infotext
     * Add program version to generation information
     * @default true
     */
    add_version_to_infotext?: boolean;
    /**
     * Disable Weights Auto Swap
     * When reading generation parameters from text into UI (from PNG info or pasted text), do not change the selected model/checkpoint.
     * @default true
     */
    disable_weights_auto_swap?: boolean;
    /**
     * Show Progressbar
     * Show progressbar
     * @default true
     */
    show_progressbar?: boolean;
    /**
     * Live Previews Enable
     * Show live previews of the created image
     * @default true
     */
    live_previews_enable?: boolean;
    /**
     * Live Previews Image Format
     * Live preview file format
     * @default "png"
     */
    live_previews_image_format?: string;
    /**
     * Show Progress Grid
     * Show previews of all images generated in a batch as a grid
     * @default true
     */
    show_progress_grid?: boolean;
    /**
     * Show Progress Every N Steps
     * Live preview display period
     * @default 10
     */
    show_progress_every_n_steps?: number;
    /**
     * Show Progress Type
     * Live preview method
     * @default "Approx NN"
     */
    show_progress_type?: string;
    /**
     * Live Preview Content
     * Live preview subject
     * @default "Prompt"
     */
    live_preview_content?: string;
    /**
     * Live Preview Refresh Period
     * Progressbar and preview update period
     * @default 1000
     */
    live_preview_refresh_period?: number;
    /**
     * Hide Samplers
     * Hide samplers in user interface
     * @default []
     */
    hide_samplers?: any[];
    /**
     * Eta Ddim
     * Eta for DDIM
     * @default 0
     */
    eta_ddim?: number;
    /**
     * Eta Ancestral
     * Eta for ancestral samplers
     * @default 1
     */
    eta_ancestral?: number;
    /**
     * Ddim Discretize
     * img2img DDIM discretize
     * @default "uniform"
     */
    ddim_discretize?: string;
    /**
     * S Churn
     * sigma churn
     * @default 0
     */
    s_churn?: number;
    /**
     * S Tmin
     * sigma tmin
     * @default 0
     */
    s_tmin?: number;
    /**
     * S Noise
     * sigma noise
     * @default 1
     */
    s_noise?: number;
    /**
     * Eta Noise Seed Delta
     * Eta noise seed delta
     * @default 0
     */
    eta_noise_seed_delta?: number;
    /**
     * Always Discard Next To Last Sigma
     * Always discard next-to-last sigma
     * @default false
     */
    always_discard_next_to_last_sigma?: boolean;
    /**
     * Uni Pc Variant
     * UniPC variant
     * @default "bh1"
     */
    uni_pc_variant?: string;
    /**
     * Uni Pc Skip Type
     * UniPC skip type
     * @default "time_uniform"
     */
    uni_pc_skip_type?: string;
    /**
     * Uni Pc Order
     * UniPC order
     * @default 3
     */
    uni_pc_order?: number;
    /**
     * Uni Pc Lower Order Final
     * UniPC lower order final
     * @default true
     */
    uni_pc_lower_order_final?: boolean;
    /**
     * Postprocessing Enable In Main Ui
     * Enable postprocessing operations in txt2img and img2img tabs
     * @default []
     */
    postprocessing_enable_in_main_ui?: any[];
    /**
     * Postprocessing Operation Order
     * Postprocessing operation order
     * @default []
     */
    postprocessing_operation_order?: any[];
    /**
     * Upscaling Max Images In Cache
     * Maximum number of images in upscaling cache
     * @default 5
     */
    upscaling_max_images_in_cache?: number;
    /**
     * Disabled Extensions
     * Disable these extensions
     * @default []
     */
    disabled_extensions?: any[];
    /**
     * Disable All Extensions
     * Disable all extensions (preserves the list of disabled extensions)
     * @default "none"
     */
    disable_all_extensions?: string;
    /**
     * Restore Config State File
     * Config state file to restore from, under 'config-states/' folder
     * @default ""
     */
    restore_config_state_file?: string;
    /**
     * Sd Checkpoint Hash
     * SHA256 hash of the current checkpoint
     * @default ""
     */
    sd_checkpoint_hash?: string;
}
/** PNGInfoRequest */
export interface PNGInfoRequest {
    /**
     * Image
     * The base64 encoded PNG image
     */
    image: string;
}
/** PNGInfoResponse */
export interface PNGInfoResponse {
    /**
     * Image info
     * A string with the parameters used to generate the image
     */
    info: string;
    /**
     * Items
     * An object containing all the info the image had
     */
    items: object;
}
/** PredictBody */
export interface PredictBody {
    /** Session Hash */
    session_hash?: string;
    /** Event Id */
    event_id?: string;
    /** Data */
    data: any[];
    /** Event Data */
    event_data?: any;
    /** Fn Index */
    fn_index?: number;
    /**
     * Batched
     * @default false
     */
    batched?: boolean;
    /** Request */
    request?: object | object[] | (object & object[]);
}
/** PreprocessResponse */
export interface PreprocessResponse {
    /**
     * Preprocess info
     * Response string from preprocessing task.
     */
    info: string;
}
/** ProgressRequest */
export interface ProgressRequest {
    /**
     * Task ID
     * id of the task to get progress for
     */
    id_task?: string;
    /**
     * Live preview image ID
     * id of last received last preview image
     * @default -1
     */
    id_live_preview?: number;
}
/** PromptStyleItem */
export interface PromptStyleItem {
    /** Name */
    name: string;
    /** Prompt */
    prompt?: string;
    /** Negative Prompt */
    negative_prompt?: string;
}
/** QuicksettingsHint */
export interface QuicksettingsHint {
    /** Name of the quicksettings field */
    name: string;
    /** Label of the quicksettings field */
    label: string;
}
/** RealesrganItem */
export interface RealesrganItem {
    /** Name */
    name: string;
    /** Path */
    path?: string;
    /** Scale */
    scale?: number;
}
/** RemoveCustomTagFromReq */
export interface RemoveCustomTagFromReq {
    /** Img Id */
    img_id: number;
    /** Tag Id */
    tag_id: string;
}
/** RemoveCustomTagReq */
export interface RemoveCustomTagReq {
    /** Tag Id */
    tag_id: string;
}
/** ResetBody */
export interface ResetBody {
    /** Session Hash */
    session_hash: string;
    /** Fn Index */
    fn_index: number;
}
/** SDModelItem */
export interface SDModelItem {
    /** Title */
    title: string;
    /** Model Name */
    model_name: string;
    /** Short hash */
    hash?: string;
    /** sha256 hash */
    sha256?: string;
    /** Filename */
    filename: string;
    /** Config file */
    config?: string;
}
/** SamPredictRequest */
export interface SamPredictRequest {
    /**
     * Sam Model Name
     * @default "sam_vit_h_4b8939.pth"
     */
    sam_model_name?: string;
    /** Input Image */
    input_image: string;
    /**
     * Sam Positive Points
     * @default []
     */
    sam_positive_points?: number[][];
    /**
     * Sam Negative Points
     * @default []
     */
    sam_negative_points?: number[][];
    /**
     * Dino Enabled
     * @default false
     */
    dino_enabled?: boolean;
    /**
     * Dino Model Name
     * @default "GroundingDINO_SwinT_OGC (694MB)"
     */
    dino_model_name?: string;
    /** Dino Text Prompt */
    dino_text_prompt?: string;
    /**
     * Dino Box Threshold
     * @default 0.3
     */
    dino_box_threshold?: number;
    /**
     * Dino Preview Checkbox
     * @default false
     */
    dino_preview_checkbox?: boolean;
    /** Dino Preview Boxes Selection */
    dino_preview_boxes_selection?: number[];
}
/** SamplerItem */
export interface SamplerItem {
    /** Name */
    name: string;
    /** Aliases */
    aliases: string[];
    /** Options */
    options: Record<string, string>;
}
/** ScannedPathModel */
export interface ScannedPathModel {
    /** Path */
    path: string;
}
/** ScriptArg */
export interface ScriptArg {
    /**
     * Label
     * Name of the argument in UI
     */
    label?: string;
    /**
     * Value
     * Default value of the argument
     */
    value?: any;
    /**
     * Minimum
     * Minimum allowed value for the argumentin UI
     */
    minimum?: any;
    /**
     * Minimum
     * Maximum allowed value for the argumentin UI
     */
    maximum?: any;
    /**
     * Minimum
     * Step for changing value of the argumentin UI
     */
    step?: any;
    /**
     * Choices
     * Possible values for the argument
     */
    choices?: string[];
}
/** ScriptInfo */
export interface ScriptInfo {
    /**
     * Name
     * Script name
     */
    name?: string;
    /**
     * IsAlwayson
     * Flag specifying whether this script is an alwayson script
     */
    is_alwayson?: boolean;
    /**
     * IsImg2img
     * Flag specifying whether this script is an img2img script
     */
    is_img2img?: boolean;
    /**
     * Arguments
     * List of script's arguments
     */
    args: ScriptArg[];
}
/** ScriptsList */
export interface ScriptsList {
    /**
     * Txt2img
     * Titles of scripts (txt2img)
     */
    txt2img?: any[];
    /**
     * Img2img
     * Titles of scripts (img2img)
     */
    img2img?: any[];
}
/** StableDiffusionProcessingImg2Img */
export interface StableDiffusionProcessingImg2Img {
    /** Init Images */
    init_images?: any[];
    /**
     * Resize Mode
     * @default 0
     */
    resize_mode?: number;
    /**
     * Denoising Strength
     * @default 0.75
     */
    denoising_strength?: number;
    /** Image Cfg Scale */
    image_cfg_scale?: number;
    /** Mask */
    mask?: string;
    /**
     * Mask Blur
     * @default 4
     */
    mask_blur?: number;
    /**
     * Inpainting Fill
     * @default 0
     */
    inpainting_fill?: number;
    /**
     * Inpaint Full Res
     * @default true
     */
    inpaint_full_res?: boolean;
    /**
     * Inpaint Full Res Padding
     * @default 0
     */
    inpaint_full_res_padding?: number;
    /**
     * Inpainting Mask Invert
     * @default 0
     */
    inpainting_mask_invert?: number;
    /** Initial Noise Multiplier */
    initial_noise_multiplier?: number;
    /**
     * Prompt
     * @default ""
     */
    prompt?: string;
    /** Styles */
    styles?: string[];
    /**
     * Seed
     * @default -1
     */
    seed?: number;
    /**
     * Subseed
     * @default -1
     */
    subseed?: number;
    /**
     * Subseed Strength
     * @default 0
     */
    subseed_strength?: number;
    /**
     * Seed Resize From H
     * @default -1
     */
    seed_resize_from_h?: number;
    /**
     * Seed Resize From W
     * @default -1
     */
    seed_resize_from_w?: number;
    /** Sampler Name */
    sampler_name?: string;
    /**
     * Batch Size
     * @default 1
     */
    batch_size?: number;
    /**
     * N Iter
     * @default 1
     */
    n_iter?: number;
    /**
     * Steps
     * @default 50
     */
    steps?: number;
    /**
     * Cfg Scale
     * @default 7
     */
    cfg_scale?: number;
    /**
     * Width
     * @default 512
     */
    width?: number;
    /**
     * Height
     * @default 512
     */
    height?: number;
    /**
     * Restore Faces
     * @default false
     */
    restore_faces?: boolean;
    /**
     * Tiling
     * @default false
     */
    tiling?: boolean;
    /**
     * Do Not Save Samples
     * @default false
     */
    do_not_save_samples?: boolean;
    /**
     * Do Not Save Grid
     * @default false
     */
    do_not_save_grid?: boolean;
    /** Negative Prompt */
    negative_prompt?: string;
    /** Eta */
    eta?: number;
    /**
     * S Min Uncond
     * @default 0
     */
    s_min_uncond?: number;
    /**
     * S Churn
     * @default 0
     */
    s_churn?: number;
    /** S Tmax */
    s_tmax?: number;
    /**
     * S Tmin
     * @default 0
     */
    s_tmin?: number;
    /**
     * S Noise
     * @default 1
     */
    s_noise?: number;
    /** Override Settings */
    override_settings?: object;
    /**
     * Override Settings Restore Afterwards
     * @default true
     */
    override_settings_restore_afterwards?: boolean;
    /**
     * Script Args
     * @default []
     */
    script_args?: any[];
    /**
     * Sampler Index
     * @default "Euler"
     */
    sampler_index?: string;
    /**
     * Include Init Images
     * @default false
     */
    include_init_images?: boolean;
    /** Script Name */
    script_name?: string;
    /**
     * Send Images
     * @default true
     */
    send_images?: boolean;
    /**
     * Save Images
     * @default false
     */
    save_images?: boolean;
    /**
     * Alwayson Scripts
     * @default {}
     */
    alwayson_scripts?: object;
}
/** StableDiffusionProcessingTxt2Img */
export interface StableDiffusionProcessingTxt2Img {
    /**
     * Enable Hr
     * @default false
     */
    enable_hr?: boolean;
    /**
     * Denoising Strength
     * @default 0
     */
    denoising_strength?: number;
    /**
     * Firstphase Width
     * @default 0
     */
    firstphase_width?: number;
    /**
     * Firstphase Height
     * @default 0
     */
    firstphase_height?: number;
    /**
     * Hr Scale
     * @default 2
     */
    hr_scale?: number;
    /** Hr Upscaler */
    hr_upscaler?: string;
    /**
     * Hr Second Pass Steps
     * @default 0
     */
    hr_second_pass_steps?: number;
    /**
     * Hr Resize X
     * @default 0
     */
    hr_resize_x?: number;
    /**
     * Hr Resize Y
     * @default 0
     */
    hr_resize_y?: number;
    /** Hr Sampler Name */
    hr_sampler_name?: string;
    /**
     * Hr Prompt
     * @default ""
     */
    hr_prompt?: string;
    /**
     * Hr Negative Prompt
     * @default ""
     */
    hr_negative_prompt?: string;
    /**
     * Prompt
     * @default ""
     */
    prompt?: string;
    /** Styles */
    styles?: string[];
    /**
     * Seed
     * @default -1
     */
    seed?: number;
    /**
     * Subseed
     * @default -1
     */
    subseed?: number;
    /**
     * Subseed Strength
     * @default 0
     */
    subseed_strength?: number;
    /**
     * Seed Resize From H
     * @default -1
     */
    seed_resize_from_h?: number;
    /**
     * Seed Resize From W
     * @default -1
     */
    seed_resize_from_w?: number;
    /** Sampler Name */
    sampler_name?: string;
    /**
     * Batch Size
     * @default 1
     */
    batch_size?: number;
    /**
     * N Iter
     * @default 1
     */
    n_iter?: number;
    /**
     * Steps
     * @default 50
     */
    steps?: number;
    /**
     * Cfg Scale
     * @default 7
     */
    cfg_scale?: number;
    /**
     * Width
     * @default 512
     */
    width?: number;
    /**
     * Height
     * @default 512
     */
    height?: number;
    /**
     * Restore Faces
     * @default false
     */
    restore_faces?: boolean;
    /**
     * Tiling
     * @default false
     */
    tiling?: boolean;
    /**
     * Do Not Save Samples
     * @default false
     */
    do_not_save_samples?: boolean;
    /**
     * Do Not Save Grid
     * @default false
     */
    do_not_save_grid?: boolean;
    /** Negative Prompt */
    negative_prompt?: string;
    /** Eta */
    eta?: number;
    /**
     * S Min Uncond
     * @default 0
     */
    s_min_uncond?: number;
    /**
     * S Churn
     * @default 0
     */
    s_churn?: number;
    /** S Tmax */
    s_tmax?: number;
    /**
     * S Tmin
     * @default 0
     */
    s_tmin?: number;
    /**
     * S Noise
     * @default 1
     */
    s_noise?: number;
    /** Override Settings */
    override_settings?: object;
    /**
     * Override Settings Restore Afterwards
     * @default true
     */
    override_settings_restore_afterwards?: boolean;
    /**
     * Script Args
     * @default []
     */
    script_args?: any[];
    /**
     * Sampler Index
     * @default "Euler"
     */
    sampler_index?: string;
    /** Script Name */
    script_name?: string;
    /**
     * Send Images
     * @default true
     */
    send_images?: boolean;
    /**
     * Save Images
     * @default false
     */
    save_images?: boolean;
    /**
     * Alwayson Scripts
     * @default {}
     */
    alwayson_scripts?: object;
}
/** TextToImageResponse */
export interface TextToImageResponse {
    /**
     * Image
     * The generated image in base64 format.
     */
    images?: string[];
    /** Parameters */
    parameters: object;
    /** Info */
    info: string;
}
/** ToggleCustomTagToImgReq */
export interface ToggleCustomTagToImgReq {
    /** Img Path */
    img_path: string;
    /** Tag Id */
    tag_id: number;
}
/** TrainResponse */
export interface TrainResponse {
    /**
     * Train info
     * Response string from train embedding or hypernetwork task.
     */
    info: string;
}
/**
 * Txt2ImgRequest
 * Text2Img API request. If optional attributes aren't set, the defaults
 * from `krita_config.yaml` will be used.
 */
export interface Txt2ImgRequest {
    /**
     * Restore Faces
     * @default false
     */
    restore_faces?: boolean;
    /**
     * Face Restorer
     * @default "CodeFormer"
     */
    face_restorer?: string;
    /**
     * Codeformer Weight
     * @default 0.5
     */
    codeformer_weight?: number;
    /**
     * Sd Model
     * @default "model.ckpt"
     */
    sd_model?: string;
    /**
     * Sd Vae
     * @default "Automatic"
     */
    sd_vae?: string;
    /**
     * Clip Skip
     * @default 1
     */
    clip_skip?: number;
    /**
     * Script
     * @default "None"
     */
    script?: string;
    /** Script Args */
    script_args?: any[];
    /**
     * Prompt
     * @default "dog"
     */
    prompt?: any;
    /**
     * Negative Prompt
     * @default ""
     */
    negative_prompt?: any;
    /**
     * Seed
     * @default -1
     */
    seed?: number;
    /**
     * Seed Enable Extras
     * @default false
     */
    seed_enable_extras?: boolean;
    /**
     * Subseed
     * @default -1
     */
    subseed?: number;
    /**
     * Subseed Strength
     * @default 0
     */
    subseed_strength?: number;
    /**
     * Seed Resize From H
     * @default 0
     */
    seed_resize_from_h?: number;
    /**
     * Seed Resize From W
     * @default 0
     */
    seed_resize_from_w?: number;
    /**
     * Sampler Name
     * @default "Euler a"
     */
    sampler_name?: string;
    /**
     * Steps
     * @default 30
     */
    steps?: number;
    /**
     * Cfg Scale
     * @default 7.5
     */
    cfg_scale?: number;
    /**
     * Denoising Strength
     * @default 0.35
     */
    denoising_strength?: number;
    /**
     * Batch Count
     * @default 1
     */
    batch_count?: number;
    /**
     * Batch Size
     * @default 1
     */
    batch_size?: number;
    /**
     * Base Size
     * @default 512
     */
    base_size?: number;
    /**
     * Max Size
     * @default 768
     */
    max_size?: number;
    /**
     * Disable Sddebz Highres
     * @default false
     */
    disable_sddebz_highres?: boolean;
    /**
     * Tiling
     * @default false
     */
    tiling?: boolean;
    /**
     * Highres Fix
     * @default false
     */
    highres_fix?: boolean;
    /**
     * Firstphase Height
     * @default 512
     */
    firstphase_height?: number;
    /**
     * Firstphase Width
     * @default 512
     */
    firstphase_width?: number;
    /**
     * Upscaler Name
     * @default "None"
     */
    upscaler_name?: string;
    /**
     * Filter Nsfw
     * @default false
     */
    filter_nsfw?: boolean;
    /**
     * Include Grid
     * @default false
     */
    include_grid?: boolean;
    /**
     * Sample Path
     * @default "outputs/krita-out"
     */
    sample_path?: string;
    /**
     * Save Samples
     * @default false
     */
    save_samples?: boolean;
    /** Orig Width */
    orig_width: number;
    /** Orig Height */
    orig_height: number;
}
/**
 * UpscaleRequest
 * Upscale API request. If optional attributes aren't set, the defaults from
 * `krita_config.yaml` will be used.
 */
export interface UpscaleRequest {
    /**
     * Sample Path
     * @default "outputs/krita-out"
     */
    sample_path?: string;
    /**
     * Save Samples
     * @default false
     */
    save_samples?: boolean;
    /**
     * Upscaler Name
     * @default "None"
     */
    upscaler_name?: string;
    /**
     * Downscale First
     * @default false
     */
    downscale_first?: boolean;
    /** Src Img */
    src_img: string;
}
/** UpscaleResponse */
export interface UpscaleResponse {
    /** Output */
    output: string;
}
/** UpscalerItem */
export interface UpscalerItem {
    /** Name */
    name: string;
    /** Model Name */
    model_name?: string;
    /** Path */
    model_path?: string;
    /** URL */
    model_url?: string;
    /** Scale */
    scale?: number;
}
/** ValidationError */
export interface ValidationError {
    /** Location */
    loc: any[];
    /** Message */
    msg: string;
    /** Error Type */
    type: string;
}
/** ProgressResponse */
export interface ModulesApiModelsProgressResponse {
    /**
     * Progress
     * The progress with a range of 0 to 1
     */
    progress: number;
    /** ETA in secs */
    eta_relative: number;
    /**
     * State
     * The current state snapshot
     */
    state: object;
    /**
     * Current image
     * The current image in base64 format. opts.show_progress_every_n_steps is required for this to work.
     */
    current_image?: string;
    /**
     * Info text
     * Info text used by WebUI.
     */
    textinfo?: string;
}
/** ProgressResponse */
export interface ModulesProgressProgressResponse {
    /** Whether the task is being worked on right now */
    active: boolean;
    /** Whether the task is in queue */
    queued: boolean;
    /** Whether the task has already finished */
    completed: boolean;
    /**
     * Progress
     * The progress with a range of 0 to 1
     */
    progress?: number;
    /** ETA in secs */
    eta?: number;
    /**
     * Live preview image
     * Current live preview; a data: uri
     */
    live_preview?: string;
    /**
     * Live preview image ID
     * Send this together with next request to prevent receiving same image
     */
    id_live_preview?: number;
    /**
     * Info text
     * Info text used by WebUI.
     */
    textinfo?: string;
}
export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseFormat;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
    customFetch?: typeof fetch;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker?;
    private abortControllers;
    private customFetch;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected encodeQueryParam(key: string, value: any): string;
    protected addQueryParam(query: QueryParamsType, key: string): string;
    protected addArrayQueryParam(query: QueryParamsType, key: string): any;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams;
    protected createAbortSignal: (cancelToken: CancelToken) => AbortSignal | undefined;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title FastAPI
 * @version 0.1.0
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @name MainGet
     * @summary Main
     * @request GET:/
     */
    mainGet: (params?: RequestParams) => Promise<HttpResponse<string, any>>;
    /**
     * No description
     *
     * @name MainHead
     * @summary Main
     * @request HEAD:/
     */
    mainHead: (params?: RequestParams) => Promise<HttpResponse<string, any>>;
    user: {
        /**
         * No description
         *
         * @name GetCurrentUserUserGet
         * @summary Get Current User
         * @request GET:/user/
         */
        getCurrentUserUserGet: (params?: RequestParams) => Promise<HttpResponse<string, any>>;
        /**
         * No description
         *
         * @name GetCurrentUserUserGet2
         * @summary Get Current User
         * @request GET:/user
         * @originalName getCurrentUserUserGet
         * @duplicate
         */
        getCurrentUserUserGet2: (params?: RequestParams) => Promise<HttpResponse<string, any>>;
    };
    loginCheck: {
        /**
         * No description
         *
         * @name LoginCheckLoginCheckGet
         * @summary Login Check
         * @request GET:/login_check/
         */
        loginCheckLoginCheckGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name LoginCheckLoginCheckGet2
         * @summary Login Check
         * @request GET:/login_check
         * @originalName loginCheckLoginCheckGet
         * @duplicate
         */
        loginCheckLoginCheckGet2: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
    };
    token: {
        /**
         * No description
         *
         * @name GetTokenTokenGet
         * @summary Get Token
         * @request GET:/token/
         */
        getTokenTokenGet: (params?: RequestParams) => Promise<HttpResponse<object, any>>;
        /**
         * No description
         *
         * @name GetTokenTokenGet2
         * @summary Get Token
         * @request GET:/token
         * @originalName getTokenTokenGet
         * @duplicate
         */
        getTokenTokenGet2: (params?: RequestParams) => Promise<HttpResponse<object, any>>;
    };
    appId: {
        /**
         * No description
         *
         * @name AppIdAppIdGet
         * @summary App Id
         * @request GET:/app_id/
         */
        appIdAppIdGet: (params?: RequestParams) => Promise<HttpResponse<object, any>>;
        /**
         * No description
         *
         * @name AppIdAppIdGet2
         * @summary App Id
         * @request GET:/app_id
         * @originalName appIdAppIdGet
         * @duplicate
         */
        appIdAppIdGet2: (params?: RequestParams) => Promise<HttpResponse<object, any>>;
    };
    login: {
        /**
         * No description
         *
         * @name LoginLoginPost
         * @summary Login
         * @request POST:/login/
         */
        loginLoginPost: (data: BodyLoginLoginPost, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name LoginLoginPost2
         * @summary Login
         * @request POST:/login
         * @originalName loginLoginPost
         * @duplicate
         */
        loginLoginPost2: (data: BodyLoginLoginPost, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
    info: {
        /**
         * No description
         *
         * @name ApiInfoInfoGet
         * @summary Api Info
         * @request GET:/info
         */
        apiInfoInfoGet: (query?: {
            /**
             * Serialize
             * @default true
             */
            serialize?: boolean;
        }, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name ApiInfoInfoGet2
         * @summary Api Info
         * @request GET:/info/
         * @originalName apiInfoInfoGet
         * @duplicate
         */
        apiInfoInfoGet2: (query?: {
            /**
             * Serialize
             * @default true
             */
            serialize?: boolean;
        }, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
    config: {
        /**
         * No description
         *
         * @name GetConfigConfigGet
         * @summary Get Config
         * @request GET:/config
         */
        getConfigConfigGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name GetConfigConfigGet2
         * @summary Get Config
         * @request GET:/config/
         * @originalName getConfigConfigGet
         * @duplicate
         */
        getConfigConfigGet2: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
    };
    static: {
        /**
         * No description
         *
         * @name StaticResourceStaticPathGet
         * @summary Static Resource
         * @request GET:/static/{path}
         */
        staticResourceStaticPathGet: (path: string, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
    assets: {
        /**
         * No description
         *
         * @name BuildResourceAssetsPathGet
         * @summary Build Resource
         * @request GET:/assets/{path}
         */
        buildResourceAssetsPathGet: (path: string, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
    faviconIco: {
        /**
         * No description
         *
         * @name FaviconFaviconIcoGet
         * @summary Favicon
         * @request GET:/favicon.ico
         */
        faviconFaviconIcoGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
    };
    proxyUrlPath: {
        /**
         * No description
         *
         * @name ReverseProxyProxyUrlPathGet
         * @summary Reverse Proxy
         * @request GET:/proxy={url_path}
         */
        reverseProxyProxyUrlPathGet: (urlPath: string, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name ReverseProxyProxyUrlPathHead
         * @summary Reverse Proxy
         * @request HEAD:/proxy={url_path}
         */
        reverseProxyProxyUrlPathHead: (urlPath: string, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
    filePathOrUrl: {
        /**
         * No description
         *
         * @name FileFilePathOrUrlGet
         * @summary File
         * @request GET:/file={path_or_url}
         */
        fileFilePathOrUrlGet: (pathOrUrl: string, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name FileFilePathOrUrlHead
         * @summary File
         * @request HEAD:/file={path_or_url}
         */
        fileFilePathOrUrlHead: (pathOrUrl: string, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
    file: {
        /**
         * No description
         *
         * @name FileDeprecatedFilePathGet
         * @summary File Deprecated
         * @request GET:/file/{path}
         */
        fileDeprecatedFilePathGet: (path: string, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
    reset: {
        /**
         * No description
         *
         * @name ResetIteratorResetPost
         * @summary Reset Iterator
         * @request POST:/reset
         */
        resetIteratorResetPost: (data: ResetBody, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name ResetIteratorResetPost2
         * @summary Reset Iterator
         * @request POST:/reset/
         * @originalName resetIteratorResetPost
         * @duplicate
         */
        resetIteratorResetPost2: (data: ResetBody, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
    api: {
        /**
         * No description
         *
         * @name PredictApiApiNamePost
         * @summary Predict
         * @request POST:/api/{api_name}/
         */
        predictApiApiNamePost: (apiName: string, data: PredictBody, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name PredictApiApiNamePost2
         * @summary Predict
         * @request POST:/api/{api_name}
         * @originalName predictApiApiNamePost
         * @duplicate
         */
        predictApiApiNamePost2: (apiName: string, data: PredictBody, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
    run: {
        /**
         * No description
         *
         * @name PredictRunApiNamePost
         * @summary Predict
         * @request POST:/run/{api_name}/
         */
        predictRunApiNamePost: (apiName: string, data: PredictBody, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name PredictRunApiNamePost2
         * @summary Predict
         * @request POST:/run/{api_name}
         * @originalName predictRunApiNamePost
         * @duplicate
         */
        predictRunApiNamePost2: (apiName: string, data: PredictBody, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
    queue: {
        /**
         * No description
         *
         * @name GetQueueStatusQueueStatusGet
         * @summary Get Queue Status
         * @request GET:/queue/status
         */
        getQueueStatusQueueStatusGet: (params?: RequestParams) => Promise<HttpResponse<Estimation, any>>;
    };
    upload: {
        /**
         * No description
         *
         * @name UploadFileUploadPost
         * @summary Upload File
         * @request POST:/upload
         */
        uploadFileUploadPost: (data: BodyUploadFileUploadPost, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
    startupEvents: {
        /**
         * No description
         *
         * @name StartupEventsStartupEventsGet
         * @summary Startup Events
         * @request GET:/startup-events
         */
        startupEventsStartupEventsGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
    };
    themeCss: {
        /**
         * No description
         *
         * @name ThemeCssThemeCssGet
         * @summary Theme Css
         * @request GET:/theme.css
         */
        themeCssThemeCssGet: (params?: RequestParams) => Promise<HttpResponse<string, any>>;
    };
    robotsTxt: {
        /**
         * No description
         *
         * @name RobotsTxtRobotsTxtGet
         * @summary Robots Txt
         * @request GET:/robots.txt
         */
        robotsTxtRobotsTxtGet: (params?: RequestParams) => Promise<HttpResponse<string, any>>;
    };
    internal: {
        /**
         * No description
         *
         * @name ProgressapiInternalProgressPost
         * @summary Progressapi
         * @request POST:/internal/progress
         */
        progressapiInternalProgressPost: (data: ProgressRequest, params?: RequestParams) => Promise<HttpResponse<ModulesProgressProgressResponse, HTTPValidationError>>;
        /**
         * No description
         *
         * @name QuicksettingsHintInternalQuicksettingsHintGet
         * @summary Quicksettings Hint
         * @request GET:/internal/quicksettings-hint
         */
        quicksettingsHintInternalQuicksettingsHintGet: (params?: RequestParams) => Promise<HttpResponse<QuicksettingsHint[], any>>;
        /**
         * No description
         *
         * @name LambdaInternalPingGet
         * @summary <Lambda>
         * @request GET:/internal/ping
         */
        lambdaInternalPingGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
    };
    sdapi: {
        /**
         * No description
         *
         * @name Text2ImgapiSdapiV1Txt2ImgPost
         * @summary Text2Imgapi
         * @request POST:/sdapi/v1/txt2img
         */
        text2ImgapiSdapiV1Txt2ImgPost: (data: StableDiffusionProcessingTxt2Img, params?: RequestParams) => Promise<HttpResponse<TextToImageResponse, HTTPValidationError>>;
        /**
         * No description
         *
         * @name Img2ImgapiSdapiV1Img2ImgPost
         * @summary Img2Imgapi
         * @request POST:/sdapi/v1/img2img
         */
        img2ImgapiSdapiV1Img2ImgPost: (data: StableDiffusionProcessingImg2Img, params?: RequestParams) => Promise<HttpResponse<ImageToImageResponse, HTTPValidationError>>;
        /**
         * No description
         *
         * @name ExtrasSingleImageApiSdapiV1ExtraSingleImagePost
         * @summary Extras Single Image Api
         * @request POST:/sdapi/v1/extra-single-image
         */
        extrasSingleImageApiSdapiV1ExtraSingleImagePost: (data: ExtrasSingleImageRequest, params?: RequestParams) => Promise<HttpResponse<ExtrasSingleImageResponse, HTTPValidationError>>;
        /**
         * No description
         *
         * @name ExtrasBatchImagesApiSdapiV1ExtraBatchImagesPost
         * @summary Extras Batch Images Api
         * @request POST:/sdapi/v1/extra-batch-images
         */
        extrasBatchImagesApiSdapiV1ExtraBatchImagesPost: (data: ExtrasBatchImagesRequest, params?: RequestParams) => Promise<HttpResponse<ExtrasBatchImagesResponse, HTTPValidationError>>;
        /**
         * No description
         *
         * @name PnginfoapiSdapiV1PngInfoPost
         * @summary Pnginfoapi
         * @request POST:/sdapi/v1/png-info
         */
        pnginfoapiSdapiV1PngInfoPost: (data: PNGInfoRequest, params?: RequestParams) => Promise<HttpResponse<PNGInfoResponse, HTTPValidationError>>;
        /**
         * No description
         *
         * @name ProgressapiSdapiV1ProgressGet
         * @summary Progressapi
         * @request GET:/sdapi/v1/progress
         */
        progressapiSdapiV1ProgressGet: (query?: {
            /**
             * Skip Current Image
             * @default false
             */
            skip_current_image?: boolean;
        }, params?: RequestParams) => Promise<HttpResponse<ModulesApiModelsProgressResponse, HTTPValidationError>>;
        /**
         * No description
         *
         * @name InterrogateapiSdapiV1InterrogatePost
         * @summary Interrogateapi
         * @request POST:/sdapi/v1/interrogate
         */
        interrogateapiSdapiV1InterrogatePost: (data: InterrogateRequest, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name InterruptapiSdapiV1InterruptPost
         * @summary Interruptapi
         * @request POST:/sdapi/v1/interrupt
         */
        interruptapiSdapiV1InterruptPost: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name SkipSdapiV1SkipPost
         * @summary Skip
         * @request POST:/sdapi/v1/skip
         */
        skipSdapiV1SkipPost: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name GetConfigSdapiV1OptionsGet
         * @summary Get Config
         * @request GET:/sdapi/v1/options
         */
        getConfigSdapiV1OptionsGet: (params?: RequestParams) => Promise<HttpResponse<Options, any>>;
        /**
         * No description
         *
         * @name SetConfigSdapiV1OptionsPost
         * @summary Set Config
         * @request POST:/sdapi/v1/options
         */
        setConfigSdapiV1OptionsPost: (data: object, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name GetCmdFlagsSdapiV1CmdFlagsGet
         * @summary Get Cmd Flags
         * @request GET:/sdapi/v1/cmd-flags
         */
        getCmdFlagsSdapiV1CmdFlagsGet: (params?: RequestParams) => Promise<HttpResponse<Flags, any>>;
        /**
         * No description
         *
         * @name GetSamplersSdapiV1SamplersGet
         * @summary Get Samplers
         * @request GET:/sdapi/v1/samplers
         */
        getSamplersSdapiV1SamplersGet: (params?: RequestParams) => Promise<HttpResponse<SamplerItem[], any>>;
        /**
         * No description
         *
         * @name GetUpscalersSdapiV1UpscalersGet
         * @summary Get Upscalers
         * @request GET:/sdapi/v1/upscalers
         */
        getUpscalersSdapiV1UpscalersGet: (params?: RequestParams) => Promise<HttpResponse<UpscalerItem[], any>>;
        /**
         * No description
         *
         * @name GetSdModelsSdapiV1SdModelsGet
         * @summary Get Sd Models
         * @request GET:/sdapi/v1/sd-models
         */
        getSdModelsSdapiV1SdModelsGet: (params?: RequestParams) => Promise<HttpResponse<SDModelItem[], any>>;
        /**
         * No description
         *
         * @name GetHypernetworksSdapiV1HypernetworksGet
         * @summary Get Hypernetworks
         * @request GET:/sdapi/v1/hypernetworks
         */
        getHypernetworksSdapiV1HypernetworksGet: (params?: RequestParams) => Promise<HttpResponse<HypernetworkItem[], any>>;
        /**
         * No description
         *
         * @name GetFaceRestorersSdapiV1FaceRestorersGet
         * @summary Get Face Restorers
         * @request GET:/sdapi/v1/face-restorers
         */
        getFaceRestorersSdapiV1FaceRestorersGet: (params?: RequestParams) => Promise<HttpResponse<FaceRestorerItem[], any>>;
        /**
         * No description
         *
         * @name GetRealesrganModelsSdapiV1RealesrganModelsGet
         * @summary Get Realesrgan Models
         * @request GET:/sdapi/v1/realesrgan-models
         */
        getRealesrganModelsSdapiV1RealesrganModelsGet: (params?: RequestParams) => Promise<HttpResponse<RealesrganItem[], any>>;
        /**
         * No description
         *
         * @name GetPromptStylesSdapiV1PromptStylesGet
         * @summary Get Prompt Styles
         * @request GET:/sdapi/v1/prompt-styles
         */
        getPromptStylesSdapiV1PromptStylesGet: (params?: RequestParams) => Promise<HttpResponse<PromptStyleItem[], any>>;
        /**
         * No description
         *
         * @name GetEmbeddingsSdapiV1EmbeddingsGet
         * @summary Get Embeddings
         * @request GET:/sdapi/v1/embeddings
         */
        getEmbeddingsSdapiV1EmbeddingsGet: (params?: RequestParams) => Promise<HttpResponse<EmbeddingsResponse, any>>;
        /**
         * No description
         *
         * @name RefreshCheckpointsSdapiV1RefreshCheckpointsPost
         * @summary Refresh Checkpoints
         * @request POST:/sdapi/v1/refresh-checkpoints
         */
        refreshCheckpointsSdapiV1RefreshCheckpointsPost: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name CreateEmbeddingSdapiV1CreateEmbeddingPost
         * @summary Create Embedding
         * @request POST:/sdapi/v1/create/embedding
         */
        createEmbeddingSdapiV1CreateEmbeddingPost: (data: object, params?: RequestParams) => Promise<HttpResponse<CreateResponse, HTTPValidationError>>;
        /**
         * No description
         *
         * @name CreateHypernetworkSdapiV1CreateHypernetworkPost
         * @summary Create Hypernetwork
         * @request POST:/sdapi/v1/create/hypernetwork
         */
        createHypernetworkSdapiV1CreateHypernetworkPost: (data: object, params?: RequestParams) => Promise<HttpResponse<CreateResponse, HTTPValidationError>>;
        /**
         * No description
         *
         * @name PreprocessSdapiV1PreprocessPost
         * @summary Preprocess
         * @request POST:/sdapi/v1/preprocess
         */
        preprocessSdapiV1PreprocessPost: (data: object, params?: RequestParams) => Promise<HttpResponse<PreprocessResponse, HTTPValidationError>>;
        /**
         * No description
         *
         * @name TrainEmbeddingSdapiV1TrainEmbeddingPost
         * @summary Train Embedding
         * @request POST:/sdapi/v1/train/embedding
         */
        trainEmbeddingSdapiV1TrainEmbeddingPost: (data: object, params?: RequestParams) => Promise<HttpResponse<TrainResponse, HTTPValidationError>>;
        /**
         * No description
         *
         * @name TrainHypernetworkSdapiV1TrainHypernetworkPost
         * @summary Train Hypernetwork
         * @request POST:/sdapi/v1/train/hypernetwork
         */
        trainHypernetworkSdapiV1TrainHypernetworkPost: (data: object, params?: RequestParams) => Promise<HttpResponse<TrainResponse, HTTPValidationError>>;
        /**
         * No description
         *
         * @name GetMemorySdapiV1MemoryGet
         * @summary Get Memory
         * @request GET:/sdapi/v1/memory
         */
        getMemorySdapiV1MemoryGet: (params?: RequestParams) => Promise<HttpResponse<MemoryResponse, any>>;
        /**
         * No description
         *
         * @name UnloadapiSdapiV1UnloadCheckpointPost
         * @summary Unloadapi
         * @request POST:/sdapi/v1/unload-checkpoint
         */
        unloadapiSdapiV1UnloadCheckpointPost: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name ReloadapiSdapiV1ReloadCheckpointPost
         * @summary Reloadapi
         * @request POST:/sdapi/v1/reload-checkpoint
         */
        reloadapiSdapiV1ReloadCheckpointPost: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name GetScriptsListSdapiV1ScriptsGet
         * @summary Get Scripts List
         * @request GET:/sdapi/v1/scripts
         */
        getScriptsListSdapiV1ScriptsGet: (params?: RequestParams) => Promise<HttpResponse<ScriptsList, any>>;
        /**
         * No description
         *
         * @name GetScriptInfoSdapiV1ScriptInfoGet
         * @summary Get Script Info
         * @request GET:/sdapi/v1/script-info
         */
        getScriptInfoSdapiV1ScriptInfoGet: (params?: RequestParams) => Promise<HttpResponse<ScriptInfo[], any>>;
        /**
         * @description Get information about backend API. Returns config from `krita_config.yaml`, other metadata, the path to the rendered image and image mask, etc. Returns: Dict: information.
         *
         * @tags Interpause Backend API
         * @name GetStateSdapiInterpauseConfigGet
         * @summary Get State
         * @request GET:/sdapi/interpause/config
         */
        getStateSdapiInterpauseConfigGet: (params?: RequestParams) => Promise<HttpResponse<ConfigResponse, any>>;
        /**
         * @description Post request for Txt2Img. Args: req (Txt2ImgRequest): Request. Returns: Dict: Outputs and info.
         *
         * @tags Interpause Backend API
         * @name FTxt2ImgSdapiInterpauseTxt2ImgPost
         * @summary F Txt2Img
         * @request POST:/sdapi/interpause/txt2img
         */
        fTxt2ImgSdapiInterpauseTxt2ImgPost: (data: Txt2ImgRequest, params?: RequestParams) => Promise<HttpResponse<ImageResponse, HTTPValidationError>>;
        /**
         * @description Post request for Img2Img. Args: req (Img2ImgRequest): Request. Returns: Dict: Outputs and info.
         *
         * @tags Interpause Backend API
         * @name FImg2ImgSdapiInterpauseImg2ImgPost
         * @summary F Img2Img
         * @request POST:/sdapi/interpause/img2img
         */
        fImg2ImgSdapiInterpauseImg2ImgPost: (data: Img2ImgRequest, params?: RequestParams) => Promise<HttpResponse<ImageResponse, HTTPValidationError>>;
        /**
         * @description Post request for upscaling. Args: req (UpscaleRequest): Request. Returns: Dict: Output.
         *
         * @tags Interpause Backend API
         * @name FUpscaleSdapiInterpauseUpscalePost
         * @summary F Upscale
         * @request POST:/sdapi/interpause/upscale
         */
        fUpscaleSdapiInterpauseUpscalePost: (data: UpscaleRequest, params?: RequestParams) => Promise<HttpResponse<UpscaleResponse, HTTPValidationError>>;
        /**
         * No description
         *
         * @name GetLorasSdapiV1LorasGet
         * @summary Get Loras
         * @request GET:/sdapi/v1/loras
         */
        getLorasSdapiV1LorasGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name RefreshLorasSdapiV1RefreshLorasPost
         * @summary Refresh Loras
         * @request POST:/sdapi/v1/refresh-loras
         */
        refreshLorasSdapiV1RefreshLorasPost: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
    };
    sdExtraNetworks: {
        /**
         * No description
         *
         * @name FetchFileSdExtraNetworksThumbGet
         * @summary Fetch File
         * @request GET:/sd_extra_networks/thumb
         */
        fetchFileSdExtraNetworksThumbGet: (query?: {
            /**
             * Filename
             * @default ""
             */
            filename?: string;
        }, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name GetMetadataSdExtraNetworksMetadataGet
         * @summary Get Metadata
         * @request GET:/sd_extra_networks/metadata
         */
        getMetadataSdExtraNetworksMetadataGet: (query?: {
            /**
             * Page
             * @default ""
             */
            page?: string;
            /**
             * Item
             * @default ""
             */
            item?: string;
        }, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
    openOutpaint: {
        /**
         * No description
         *
         * @name ReturnModelUnetChannelCountOpenOutpaintUnetCountPost
         * @summary Return Model Unet Channel Count
         * @request POST:/openOutpaint/unet-count
         */
        returnModelUnetChannelCountOpenOutpaintUnetCountPost: (data: BodyReturnModelUnetChannelCountOpenOutpaintUnetCountPost, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
    controlnet: {
        /**
         * No description
         *
         * @name VersionControlnetVersionGet
         * @summary Version
         * @request GET:/controlnet/version
         */
        versionControlnetVersionGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name ModelListControlnetModelListGet
         * @summary Model List
         * @request GET:/controlnet/model_list
         */
        modelListControlnetModelListGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name ModuleListControlnetModuleListGet
         * @summary Module List
         * @request GET:/controlnet/module_list
         */
        moduleListControlnetModuleListGet: (query?: {
            /**
             * Alias Names
             * @default false
             */
            alias_names?: boolean;
        }, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name SettingsControlnetSettingsGet
         * @summary Settings
         * @request GET:/controlnet/settings
         */
        settingsControlnetSettingsGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name DetectControlnetDetectPost
         * @summary Detect
         * @request POST:/controlnet/detect
         */
        detectControlnetDetectPost: (data: BodyDetectControlnetDetectPost, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
    infiniteImageBrowsing: {
        /**
         * No description
         *
         * @name GreetingInfiniteImageBrowsingHelloGet
         * @summary Greeting
         * @request GET:/infinite_image_browsing/hello
         */
        greetingInfiniteImageBrowsingHelloGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name GlobalSettingInfiniteImageBrowsingGlobalSettingGet
         * @summary Global Setting
         * @request GET:/infinite_image_browsing/global_setting
         */
        globalSettingInfiniteImageBrowsingGlobalSettingGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name DeleteFilesInfiniteImageBrowsingDeleteFilesPost
         * @summary Delete Files
         * @request POST:/infinite_image_browsing/delete_files
         */
        deleteFilesInfiniteImageBrowsingDeleteFilesPost: (data: DeleteFilesReq, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name MoveFilesInfiniteImageBrowsingMoveFilesPost
         * @summary Move Files
         * @request POST:/infinite_image_browsing/move_files
         */
        moveFilesInfiniteImageBrowsingMoveFilesPost: (data: MoveFilesReq, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name GetTargetFloderFilesInfiniteImageBrowsingFilesGet
         * @summary Get Target Floder Files
         * @request GET:/infinite_image_browsing/files
         */
        getTargetFloderFilesInfiniteImageBrowsingFilesGet: (query: {
            /** Folder Path */
            folder_path: string;
        }, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name ThumbnailInfiniteImageBrowsingImageThumbnailGet
         * @summary Thumbnail
         * @request GET:/infinite_image_browsing/image-thumbnail
         */
        thumbnailInfiniteImageBrowsingImageThumbnailGet: (query: {
            /** Path */
            path: string;
            /** T */
            t: string;
            /**
             * Size
             * @default "256x256"
             */
            size?: string;
        }, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name GetFileInfiniteImageBrowsingFileGet
         * @summary Get File
         * @request GET:/infinite_image_browsing/file
         */
        getFileInfiniteImageBrowsingFileGet: (query: {
            /** Path */
            path: string;
            /** T */
            t: string;
            /** Disposition */
            disposition?: string;
        }, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name ApiSetSendImgPathInfiniteImageBrowsingSendImgPathPost
         * @summary Api Set Send Img Path
         * @request POST:/infinite_image_browsing/send_img_path
         */
        apiSetSendImgPathInfiniteImageBrowsingSendImgPathPost: (query: {
            /** Path */
            path: string;
        }, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name ApiSetSendImgPathInfiniteImageBrowsingGenInfoCompletedGet
         * @summary Api Set Send Img Path
         * @request GET:/infinite_image_browsing/gen_info_completed
         */
        apiSetSendImgPathInfiniteImageBrowsingGenInfoCompletedGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name ImageGeninfoInfiniteImageBrowsingImageGeninfoGet
         * @summary Image Geninfo
         * @request GET:/infinite_image_browsing/image_geninfo
         */
        imageGeninfoInfiniteImageBrowsingImageGeninfoGet: (query: {
            /** Path */
            path: string;
        }, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name CheckPathExistsInfiniteImageBrowsingCheckPathExistsPost
         * @summary Check Path Exists
         * @request POST:/infinite_image_browsing/check_path_exists
         */
        checkPathExistsInfiniteImageBrowsingCheckPathExistsPost: (data: CheckPathExistsReq, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name IndexBdInfiniteImageBrowsingGet
         * @summary Index Bd
         * @request GET:/infinite_image_browsing
         */
        indexBdInfiniteImageBrowsingGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name OpenFolderUsingExploreInfiniteImageBrowsingOpenFolderPost
         * @summary Open Folder Using Explore
         * @request POST:/infinite_image_browsing/open_folder
         */
        openFolderUsingExploreInfiniteImageBrowsingOpenFolderPost: (data: OpenFolderReq, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name GetDbBasicInfoInfiniteImageBrowsingDbBasicInfoGet
         * @summary Get Db Basic Info
         * @request GET:/infinite_image_browsing/db/basic_info
         */
        getDbBasicInfoInfiniteImageBrowsingDbBasicInfoGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name GetDbExpiredInfiniteImageBrowsingDbExpiredDirsGet
         * @summary Get Db Expired
         * @request GET:/infinite_image_browsing/db/expired_dirs
         */
        getDbExpiredInfiniteImageBrowsingDbExpiredDirsGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name UpdateImageDbDataInfiniteImageBrowsingDbUpdateImageDataPost
         * @summary Update Image Db Data
         * @request POST:/infinite_image_browsing/db/update_image_data
         */
        updateImageDbDataInfiniteImageBrowsingDbUpdateImageDataPost: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * No description
         *
         * @name MatchImageByTagsInfiniteImageBrowsingDbMatchImagesByTagsPost
         * @summary Match Image By Tags
         * @request POST:/infinite_image_browsing/db/match_images_by_tags
         */
        matchImageByTagsInfiniteImageBrowsingDbMatchImagesByTagsPost: (data: MatchImagesByTagsReq, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name GetImgSelectedCustomTagInfiniteImageBrowsingDbImgSelectedCustomTagGet
         * @summary Get Img Selected Custom Tag
         * @request GET:/infinite_image_browsing/db/img_selected_custom_tag
         */
        getImgSelectedCustomTagInfiniteImageBrowsingDbImgSelectedCustomTagGet: (query: {
            /** Path */
            path: string;
        }, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name ToggleCustomTagToImgInfiniteImageBrowsingDbToggleCustomTagToImgPost
         * @summary Toggle Custom Tag To Img
         * @request POST:/infinite_image_browsing/db/toggle_custom_tag_to_img
         */
        toggleCustomTagToImgInfiniteImageBrowsingDbToggleCustomTagToImgPost: (data: ToggleCustomTagToImgReq, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name AddCustomTagInfiniteImageBrowsingDbAddCustomTagPost
         * @summary Add Custom Tag
         * @request POST:/infinite_image_browsing/db/add_custom_tag
         */
        addCustomTagInfiniteImageBrowsingDbAddCustomTagPost: (data: AddCustomTagReq, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name RemoveCustomTagInfiniteImageBrowsingDbRemoveCustomTagPost
         * @summary Remove Custom Tag
         * @request POST:/infinite_image_browsing/db/remove_custom_tag
         */
        removeCustomTagInfiniteImageBrowsingDbRemoveCustomTagPost: (data: RemoveCustomTagReq, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name RemoveCustomTagFromImgInfiniteImageBrowsingDbRemoveCustomTagFromImgPost
         * @summary Remove Custom Tag From Img
         * @request POST:/infinite_image_browsing/db/remove_custom_tag_from_img
         */
        removeCustomTagFromImgInfiniteImageBrowsingDbRemoveCustomTagFromImgPost: (data: RemoveCustomTagFromReq, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name SearchBySubstrInfiniteImageBrowsingDbSearchBySubstrGet
         * @summary Search By Substr
         * @request GET:/infinite_image_browsing/db/search_by_substr
         */
        searchBySubstrInfiniteImageBrowsingDbSearchBySubstrGet: (query: {
            /** Substr */
            substr: string;
        }, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name ReadScannedPathsInfiniteImageBrowsingDbScannedPathsGet
         * @summary Read Scanned Paths
         * @request GET:/infinite_image_browsing/db/scanned_paths
         */
        readScannedPathsInfiniteImageBrowsingDbScannedPathsGet: (params?: RequestParams) => Promise<HttpResponse<ScannedPathModel[], any>>;
        /**
         * No description
         *
         * @name CreateScannedPathInfiniteImageBrowsingDbScannedPathsPost
         * @summary Create Scanned Path
         * @request POST:/infinite_image_browsing/db/scanned_paths
         */
        createScannedPathInfiniteImageBrowsingDbScannedPathsPost: (data: ScannedPathModel, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name DeleteScannedPathInfiniteImageBrowsingDbScannedPathsDelete
         * @summary Delete Scanned Path
         * @request DELETE:/infinite_image_browsing/db/scanned_paths
         */
        deleteScannedPathInfiniteImageBrowsingDbScannedPathsDelete: (data: ScannedPathModel, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
    sam: {
        /**
         * No description
         *
         * @name HeartbeatSamHeartbeatGet
         * @summary Heartbeat
         * @request GET:/sam/heartbeat
         */
        heartbeatSamHeartbeatGet: (params?: RequestParams) => Promise<HttpResponse<any, any>>;
        /**
         * @description Query available SAM model
         *
         * @name ApiSamModelSamSamModelGet
         * @summary Api Sam Model
         * @request GET:/sam/sam-model
         */
        apiSamModelSamSamModelGet: (params?: RequestParams) => Promise<HttpResponse<string[], any>>;
        /**
         * No description
         *
         * @name ApiSamPredictSamSamPredictPost
         * @summary Api Sam Predict
         * @request POST:/sam/sam-predict
         */
        apiSamPredictSamSamPredictPost: (data: SamPredictRequest, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name ApiDinoPredictSamDinoPredictPost
         * @summary Api Dino Predict
         * @request POST:/sam/dino-predict
         */
        apiDinoPredictSamDinoPredictPost: (data: DINOPredictRequest, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name ApiDilateMaskSamDilateMaskPost
         * @summary Api Dilate Mask
         * @request POST:/sam/dilate-mask
         */
        apiDilateMaskSamDilateMaskPost: (data: DilateMaskRequest, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name ApiControlnetSegSamControlnetSegPost
         * @summary Api Controlnet Seg
         * @request POST:/sam/controlnet-seg
         */
        apiControlnetSegSamControlnetSegPost: (data: BodyApiControlnetSegSamControlnetSegPost, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
        /**
         * No description
         *
         * @name ApiCategoryMaskSamCategoryMaskPost
         * @summary Api Category Mask
         * @request POST:/sam/category-mask
         */
        apiCategoryMaskSamCategoryMaskPost: (data: BodyApiCategoryMaskSamCategoryMaskPost, params?: RequestParams) => Promise<HttpResponse<any, HTTPValidationError>>;
    };
}
export {};
//# sourceMappingURL=AutomaticApi.d.ts.map