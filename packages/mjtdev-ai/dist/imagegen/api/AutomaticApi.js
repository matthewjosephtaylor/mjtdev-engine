/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType || (ContentType = {}));
export class HttpClient {
    baseUrl = "";
    securityData = null;
    securityWorker;
    abortControllers = new Map();
    customFetch = (...fetchParams) => fetch(...fetchParams);
    baseApiParams = {
        credentials: "same-origin",
        headers: {},
        redirect: "follow",
        referrerPolicy: "no-referrer",
    };
    constructor(apiConfig = {}) {
        Object.assign(this, apiConfig);
    }
    setSecurityData = (data) => {
        this.securityData = data;
    };
    encodeQueryParam(key, value) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
    }
    addQueryParam(query, key) {
        return this.encodeQueryParam(key, query[key]);
    }
    addArrayQueryParam(query, key) {
        const value = query[key];
        return value.map((v) => this.encodeQueryParam(key, v)).join("&");
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    contentFormatters = {
        [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
        [ContentType.Text]: (input) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
        [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            formData.append(key, property instanceof Blob
                ? property
                : typeof property === "object" && property !== null
                    ? JSON.stringify(property)
                    : `${property}`);
            return formData;
        }, new FormData()),
        [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
    };
    mergeRequestParams(params1, params2) {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
    createAbortSignal = (cancelToken) => {
        if (this.abortControllers.has(cancelToken)) {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                return abortController.signal;
            }
            return void 0;
        }
        const abortController = new AbortController();
        this.abortControllers.set(cancelToken, abortController);
        return abortController.signal;
    };
    abortRequest = (cancelToken) => {
        const abortController = this.abortControllers.get(cancelToken);
        if (abortController) {
            abortController.abort();
            this.abortControllers.delete(cancelToken);
        }
    };
    request = async ({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }) => {
        const secureParams = ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
            this.securityWorker &&
            (await this.securityWorker(this.securityData))) ||
            {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const queryString = query && this.toQueryString(query);
        const payloadFormatter = this.contentFormatters[type || ContentType.Json];
        const responseFormat = format || requestParams.format;
        return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
            },
            signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
            body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
        }).then(async (response) => {
            const r = response;
            r.data = null;
            r.error = null;
            const data = !responseFormat
                ? r
                : await response[responseFormat]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
                        r.error = data;
                    }
                    return r;
                })
                    .catch((e) => {
                    r.error = e;
                    return r;
                });
            if (cancelToken) {
                this.abortControllers.delete(cancelToken);
            }
            if (!response.ok)
                throw data;
            return data;
        });
    };
}
/**
 * @title FastAPI
 * @version 0.1.0
 */
export class Api extends HttpClient {
    /**
     * No description
     *
     * @name MainGet
     * @summary Main
     * @request GET:/
     */
    mainGet = (params = {}) => this.request({
        path: `/`,
        method: "GET",
        ...params,
    });
    /**
     * No description
     *
     * @name MainHead
     * @summary Main
     * @request HEAD:/
     */
    mainHead = (params = {}) => this.request({
        path: `/`,
        method: "HEAD",
        ...params,
    });
    user = {
        /**
         * No description
         *
         * @name GetCurrentUserUserGet
         * @summary Get Current User
         * @request GET:/user/
         */
        getCurrentUserUserGet: (params = {}) => this.request({
            path: `/user/`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetCurrentUserUserGet2
         * @summary Get Current User
         * @request GET:/user
         * @originalName getCurrentUserUserGet
         * @duplicate
         */
        getCurrentUserUserGet2: (params = {}) => this.request({
            path: `/user`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    loginCheck = {
        /**
         * No description
         *
         * @name LoginCheckLoginCheckGet
         * @summary Login Check
         * @request GET:/login_check/
         */
        loginCheckLoginCheckGet: (params = {}) => this.request({
            path: `/login_check/`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name LoginCheckLoginCheckGet2
         * @summary Login Check
         * @request GET:/login_check
         * @originalName loginCheckLoginCheckGet
         * @duplicate
         */
        loginCheckLoginCheckGet2: (params = {}) => this.request({
            path: `/login_check`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    token = {
        /**
         * No description
         *
         * @name GetTokenTokenGet
         * @summary Get Token
         * @request GET:/token/
         */
        getTokenTokenGet: (params = {}) => this.request({
            path: `/token/`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetTokenTokenGet2
         * @summary Get Token
         * @request GET:/token
         * @originalName getTokenTokenGet
         * @duplicate
         */
        getTokenTokenGet2: (params = {}) => this.request({
            path: `/token`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    appId = {
        /**
         * No description
         *
         * @name AppIdAppIdGet
         * @summary App Id
         * @request GET:/app_id/
         */
        appIdAppIdGet: (params = {}) => this.request({
            path: `/app_id/`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name AppIdAppIdGet2
         * @summary App Id
         * @request GET:/app_id
         * @originalName appIdAppIdGet
         * @duplicate
         */
        appIdAppIdGet2: (params = {}) => this.request({
            path: `/app_id`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    login = {
        /**
         * No description
         *
         * @name LoginLoginPost
         * @summary Login
         * @request POST:/login/
         */
        loginLoginPost: (data, params = {}) => this.request({
            path: `/login/`,
            method: "POST",
            body: data,
            type: ContentType.UrlEncoded,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name LoginLoginPost2
         * @summary Login
         * @request POST:/login
         * @originalName loginLoginPost
         * @duplicate
         */
        loginLoginPost2: (data, params = {}) => this.request({
            path: `/login`,
            method: "POST",
            body: data,
            type: ContentType.UrlEncoded,
            format: "json",
            ...params,
        }),
    };
    info = {
        /**
         * No description
         *
         * @name ApiInfoInfoGet
         * @summary Api Info
         * @request GET:/info
         */
        apiInfoInfoGet: (query, params = {}) => this.request({
            path: `/info`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ApiInfoInfoGet2
         * @summary Api Info
         * @request GET:/info/
         * @originalName apiInfoInfoGet
         * @duplicate
         */
        apiInfoInfoGet2: (query, params = {}) => this.request({
            path: `/info/`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
    };
    config = {
        /**
         * No description
         *
         * @name GetConfigConfigGet
         * @summary Get Config
         * @request GET:/config
         */
        getConfigConfigGet: (params = {}) => this.request({
            path: `/config`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetConfigConfigGet2
         * @summary Get Config
         * @request GET:/config/
         * @originalName getConfigConfigGet
         * @duplicate
         */
        getConfigConfigGet2: (params = {}) => this.request({
            path: `/config/`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    static = {
        /**
         * No description
         *
         * @name StaticResourceStaticPathGet
         * @summary Static Resource
         * @request GET:/static/{path}
         */
        staticResourceStaticPathGet: (path, params = {}) => this.request({
            path: `/static/${path}`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    assets = {
        /**
         * No description
         *
         * @name BuildResourceAssetsPathGet
         * @summary Build Resource
         * @request GET:/assets/{path}
         */
        buildResourceAssetsPathGet: (path, params = {}) => this.request({
            path: `/assets/${path}`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    faviconIco = {
        /**
         * No description
         *
         * @name FaviconFaviconIcoGet
         * @summary Favicon
         * @request GET:/favicon.ico
         */
        faviconFaviconIcoGet: (params = {}) => this.request({
            path: `/favicon.ico`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    proxyUrlPath = {
        /**
         * No description
         *
         * @name ReverseProxyProxyUrlPathGet
         * @summary Reverse Proxy
         * @request GET:/proxy={url_path}
         */
        reverseProxyProxyUrlPathGet: (urlPath, params = {}) => this.request({
            path: `/proxy=${urlPath}`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ReverseProxyProxyUrlPathHead
         * @summary Reverse Proxy
         * @request HEAD:/proxy={url_path}
         */
        reverseProxyProxyUrlPathHead: (urlPath, params = {}) => this.request({
            path: `/proxy=${urlPath}`,
            method: "HEAD",
            format: "json",
            ...params,
        }),
    };
    filePathOrUrl = {
        /**
         * No description
         *
         * @name FileFilePathOrUrlGet
         * @summary File
         * @request GET:/file={path_or_url}
         */
        fileFilePathOrUrlGet: (pathOrUrl, params = {}) => this.request({
            path: `/file=${pathOrUrl}`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name FileFilePathOrUrlHead
         * @summary File
         * @request HEAD:/file={path_or_url}
         */
        fileFilePathOrUrlHead: (pathOrUrl, params = {}) => this.request({
            path: `/file=${pathOrUrl}`,
            method: "HEAD",
            format: "json",
            ...params,
        }),
    };
    file = {
        /**
         * No description
         *
         * @name FileDeprecatedFilePathGet
         * @summary File Deprecated
         * @request GET:/file/{path}
         */
        fileDeprecatedFilePathGet: (path, params = {}) => this.request({
            path: `/file/${path}`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    reset = {
        /**
         * No description
         *
         * @name ResetIteratorResetPost
         * @summary Reset Iterator
         * @request POST:/reset
         */
        resetIteratorResetPost: (data, params = {}) => this.request({
            path: `/reset`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ResetIteratorResetPost2
         * @summary Reset Iterator
         * @request POST:/reset/
         * @originalName resetIteratorResetPost
         * @duplicate
         */
        resetIteratorResetPost2: (data, params = {}) => this.request({
            path: `/reset/`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    api = {
        /**
         * No description
         *
         * @name PredictApiApiNamePost
         * @summary Predict
         * @request POST:/api/{api_name}/
         */
        predictApiApiNamePost: (apiName, data, params = {}) => this.request({
            path: `/api/${apiName}/`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name PredictApiApiNamePost2
         * @summary Predict
         * @request POST:/api/{api_name}
         * @originalName predictApiApiNamePost
         * @duplicate
         */
        predictApiApiNamePost2: (apiName, data, params = {}) => this.request({
            path: `/api/${apiName}`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    run = {
        /**
         * No description
         *
         * @name PredictRunApiNamePost
         * @summary Predict
         * @request POST:/run/{api_name}/
         */
        predictRunApiNamePost: (apiName, data, params = {}) => this.request({
            path: `/run/${apiName}/`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name PredictRunApiNamePost2
         * @summary Predict
         * @request POST:/run/{api_name}
         * @originalName predictRunApiNamePost
         * @duplicate
         */
        predictRunApiNamePost2: (apiName, data, params = {}) => this.request({
            path: `/run/${apiName}`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    queue = {
        /**
         * No description
         *
         * @name GetQueueStatusQueueStatusGet
         * @summary Get Queue Status
         * @request GET:/queue/status
         */
        getQueueStatusQueueStatusGet: (params = {}) => this.request({
            path: `/queue/status`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    upload = {
        /**
         * No description
         *
         * @name UploadFileUploadPost
         * @summary Upload File
         * @request POST:/upload
         */
        uploadFileUploadPost: (data, params = {}) => this.request({
            path: `/upload`,
            method: "POST",
            body: data,
            type: ContentType.FormData,
            format: "json",
            ...params,
        }),
    };
    startupEvents = {
        /**
         * No description
         *
         * @name StartupEventsStartupEventsGet
         * @summary Startup Events
         * @request GET:/startup-events
         */
        startupEventsStartupEventsGet: (params = {}) => this.request({
            path: `/startup-events`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    themeCss = {
        /**
         * No description
         *
         * @name ThemeCssThemeCssGet
         * @summary Theme Css
         * @request GET:/theme.css
         */
        themeCssThemeCssGet: (params = {}) => this.request({
            path: `/theme.css`,
            method: "GET",
            ...params,
        }),
    };
    robotsTxt = {
        /**
         * No description
         *
         * @name RobotsTxtRobotsTxtGet
         * @summary Robots Txt
         * @request GET:/robots.txt
         */
        robotsTxtRobotsTxtGet: (params = {}) => this.request({
            path: `/robots.txt`,
            method: "GET",
            ...params,
        }),
    };
    internal = {
        /**
         * No description
         *
         * @name ProgressapiInternalProgressPost
         * @summary Progressapi
         * @request POST:/internal/progress
         */
        progressapiInternalProgressPost: (data, params = {}) => this.request({
            path: `/internal/progress`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name QuicksettingsHintInternalQuicksettingsHintGet
         * @summary Quicksettings Hint
         * @request GET:/internal/quicksettings-hint
         */
        quicksettingsHintInternalQuicksettingsHintGet: (params = {}) => this.request({
            path: `/internal/quicksettings-hint`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name LambdaInternalPingGet
         * @summary <Lambda>
         * @request GET:/internal/ping
         */
        lambdaInternalPingGet: (params = {}) => this.request({
            path: `/internal/ping`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    sdapi = {
        /**
         * No description
         *
         * @name Text2ImgapiSdapiV1Txt2ImgPost
         * @summary Text2Imgapi
         * @request POST:/sdapi/v1/txt2img
         */
        text2ImgapiSdapiV1Txt2ImgPost: (data, params = {}) => this.request({
            path: `/sdapi/v1/txt2img`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name Img2ImgapiSdapiV1Img2ImgPost
         * @summary Img2Imgapi
         * @request POST:/sdapi/v1/img2img
         */
        img2ImgapiSdapiV1Img2ImgPost: (data, params = {}) => this.request({
            path: `/sdapi/v1/img2img`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ExtrasSingleImageApiSdapiV1ExtraSingleImagePost
         * @summary Extras Single Image Api
         * @request POST:/sdapi/v1/extra-single-image
         */
        extrasSingleImageApiSdapiV1ExtraSingleImagePost: (data, params = {}) => this.request({
            path: `/sdapi/v1/extra-single-image`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ExtrasBatchImagesApiSdapiV1ExtraBatchImagesPost
         * @summary Extras Batch Images Api
         * @request POST:/sdapi/v1/extra-batch-images
         */
        extrasBatchImagesApiSdapiV1ExtraBatchImagesPost: (data, params = {}) => this.request({
            path: `/sdapi/v1/extra-batch-images`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name PnginfoapiSdapiV1PngInfoPost
         * @summary Pnginfoapi
         * @request POST:/sdapi/v1/png-info
         */
        pnginfoapiSdapiV1PngInfoPost: (data, params = {}) => this.request({
            path: `/sdapi/v1/png-info`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ProgressapiSdapiV1ProgressGet
         * @summary Progressapi
         * @request GET:/sdapi/v1/progress
         */
        progressapiSdapiV1ProgressGet: (query, params = {}) => this.request({
            path: `/sdapi/v1/progress`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name InterrogateapiSdapiV1InterrogatePost
         * @summary Interrogateapi
         * @request POST:/sdapi/v1/interrogate
         */
        interrogateapiSdapiV1InterrogatePost: (data, params = {}) => this.request({
            path: `/sdapi/v1/interrogate`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name InterruptapiSdapiV1InterruptPost
         * @summary Interruptapi
         * @request POST:/sdapi/v1/interrupt
         */
        interruptapiSdapiV1InterruptPost: (params = {}) => this.request({
            path: `/sdapi/v1/interrupt`,
            method: "POST",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name SkipSdapiV1SkipPost
         * @summary Skip
         * @request POST:/sdapi/v1/skip
         */
        skipSdapiV1SkipPost: (params = {}) => this.request({
            path: `/sdapi/v1/skip`,
            method: "POST",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetConfigSdapiV1OptionsGet
         * @summary Get Config
         * @request GET:/sdapi/v1/options
         */
        getConfigSdapiV1OptionsGet: (params = {}) => this.request({
            path: `/sdapi/v1/options`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name SetConfigSdapiV1OptionsPost
         * @summary Set Config
         * @request POST:/sdapi/v1/options
         */
        setConfigSdapiV1OptionsPost: (data, params = {}) => this.request({
            path: `/sdapi/v1/options`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetCmdFlagsSdapiV1CmdFlagsGet
         * @summary Get Cmd Flags
         * @request GET:/sdapi/v1/cmd-flags
         */
        getCmdFlagsSdapiV1CmdFlagsGet: (params = {}) => this.request({
            path: `/sdapi/v1/cmd-flags`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetSamplersSdapiV1SamplersGet
         * @summary Get Samplers
         * @request GET:/sdapi/v1/samplers
         */
        getSamplersSdapiV1SamplersGet: (params = {}) => this.request({
            path: `/sdapi/v1/samplers`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetUpscalersSdapiV1UpscalersGet
         * @summary Get Upscalers
         * @request GET:/sdapi/v1/upscalers
         */
        getUpscalersSdapiV1UpscalersGet: (params = {}) => this.request({
            path: `/sdapi/v1/upscalers`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetSdModelsSdapiV1SdModelsGet
         * @summary Get Sd Models
         * @request GET:/sdapi/v1/sd-models
         */
        getSdModelsSdapiV1SdModelsGet: (params = {}) => this.request({
            path: `/sdapi/v1/sd-models`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetHypernetworksSdapiV1HypernetworksGet
         * @summary Get Hypernetworks
         * @request GET:/sdapi/v1/hypernetworks
         */
        getHypernetworksSdapiV1HypernetworksGet: (params = {}) => this.request({
            path: `/sdapi/v1/hypernetworks`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetFaceRestorersSdapiV1FaceRestorersGet
         * @summary Get Face Restorers
         * @request GET:/sdapi/v1/face-restorers
         */
        getFaceRestorersSdapiV1FaceRestorersGet: (params = {}) => this.request({
            path: `/sdapi/v1/face-restorers`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetRealesrganModelsSdapiV1RealesrganModelsGet
         * @summary Get Realesrgan Models
         * @request GET:/sdapi/v1/realesrgan-models
         */
        getRealesrganModelsSdapiV1RealesrganModelsGet: (params = {}) => this.request({
            path: `/sdapi/v1/realesrgan-models`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetPromptStylesSdapiV1PromptStylesGet
         * @summary Get Prompt Styles
         * @request GET:/sdapi/v1/prompt-styles
         */
        getPromptStylesSdapiV1PromptStylesGet: (params = {}) => this.request({
            path: `/sdapi/v1/prompt-styles`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetEmbeddingsSdapiV1EmbeddingsGet
         * @summary Get Embeddings
         * @request GET:/sdapi/v1/embeddings
         */
        getEmbeddingsSdapiV1EmbeddingsGet: (params = {}) => this.request({
            path: `/sdapi/v1/embeddings`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name RefreshCheckpointsSdapiV1RefreshCheckpointsPost
         * @summary Refresh Checkpoints
         * @request POST:/sdapi/v1/refresh-checkpoints
         */
        refreshCheckpointsSdapiV1RefreshCheckpointsPost: (params = {}) => this.request({
            path: `/sdapi/v1/refresh-checkpoints`,
            method: "POST",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name CreateEmbeddingSdapiV1CreateEmbeddingPost
         * @summary Create Embedding
         * @request POST:/sdapi/v1/create/embedding
         */
        createEmbeddingSdapiV1CreateEmbeddingPost: (data, params = {}) => this.request({
            path: `/sdapi/v1/create/embedding`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name CreateHypernetworkSdapiV1CreateHypernetworkPost
         * @summary Create Hypernetwork
         * @request POST:/sdapi/v1/create/hypernetwork
         */
        createHypernetworkSdapiV1CreateHypernetworkPost: (data, params = {}) => this.request({
            path: `/sdapi/v1/create/hypernetwork`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name PreprocessSdapiV1PreprocessPost
         * @summary Preprocess
         * @request POST:/sdapi/v1/preprocess
         */
        preprocessSdapiV1PreprocessPost: (data, params = {}) => this.request({
            path: `/sdapi/v1/preprocess`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name TrainEmbeddingSdapiV1TrainEmbeddingPost
         * @summary Train Embedding
         * @request POST:/sdapi/v1/train/embedding
         */
        trainEmbeddingSdapiV1TrainEmbeddingPost: (data, params = {}) => this.request({
            path: `/sdapi/v1/train/embedding`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name TrainHypernetworkSdapiV1TrainHypernetworkPost
         * @summary Train Hypernetwork
         * @request POST:/sdapi/v1/train/hypernetwork
         */
        trainHypernetworkSdapiV1TrainHypernetworkPost: (data, params = {}) => this.request({
            path: `/sdapi/v1/train/hypernetwork`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetMemorySdapiV1MemoryGet
         * @summary Get Memory
         * @request GET:/sdapi/v1/memory
         */
        getMemorySdapiV1MemoryGet: (params = {}) => this.request({
            path: `/sdapi/v1/memory`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name UnloadapiSdapiV1UnloadCheckpointPost
         * @summary Unloadapi
         * @request POST:/sdapi/v1/unload-checkpoint
         */
        unloadapiSdapiV1UnloadCheckpointPost: (params = {}) => this.request({
            path: `/sdapi/v1/unload-checkpoint`,
            method: "POST",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ReloadapiSdapiV1ReloadCheckpointPost
         * @summary Reloadapi
         * @request POST:/sdapi/v1/reload-checkpoint
         */
        reloadapiSdapiV1ReloadCheckpointPost: (params = {}) => this.request({
            path: `/sdapi/v1/reload-checkpoint`,
            method: "POST",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetScriptsListSdapiV1ScriptsGet
         * @summary Get Scripts List
         * @request GET:/sdapi/v1/scripts
         */
        getScriptsListSdapiV1ScriptsGet: (params = {}) => this.request({
            path: `/sdapi/v1/scripts`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetScriptInfoSdapiV1ScriptInfoGet
         * @summary Get Script Info
         * @request GET:/sdapi/v1/script-info
         */
        getScriptInfoSdapiV1ScriptInfoGet: (params = {}) => this.request({
            path: `/sdapi/v1/script-info`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get information about backend API. Returns config from `krita_config.yaml`, other metadata, the path to the rendered image and image mask, etc. Returns: Dict: information.
         *
         * @tags Interpause Backend API
         * @name GetStateSdapiInterpauseConfigGet
         * @summary Get State
         * @request GET:/sdapi/interpause/config
         */
        getStateSdapiInterpauseConfigGet: (params = {}) => this.request({
            path: `/sdapi/interpause/config`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Post request for Txt2Img. Args: req (Txt2ImgRequest): Request. Returns: Dict: Outputs and info.
         *
         * @tags Interpause Backend API
         * @name FTxt2ImgSdapiInterpauseTxt2ImgPost
         * @summary F Txt2Img
         * @request POST:/sdapi/interpause/txt2img
         */
        fTxt2ImgSdapiInterpauseTxt2ImgPost: (data, params = {}) => this.request({
            path: `/sdapi/interpause/txt2img`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Post request for Img2Img. Args: req (Img2ImgRequest): Request. Returns: Dict: Outputs and info.
         *
         * @tags Interpause Backend API
         * @name FImg2ImgSdapiInterpauseImg2ImgPost
         * @summary F Img2Img
         * @request POST:/sdapi/interpause/img2img
         */
        fImg2ImgSdapiInterpauseImg2ImgPost: (data, params = {}) => this.request({
            path: `/sdapi/interpause/img2img`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Post request for upscaling. Args: req (UpscaleRequest): Request. Returns: Dict: Output.
         *
         * @tags Interpause Backend API
         * @name FUpscaleSdapiInterpauseUpscalePost
         * @summary F Upscale
         * @request POST:/sdapi/interpause/upscale
         */
        fUpscaleSdapiInterpauseUpscalePost: (data, params = {}) => this.request({
            path: `/sdapi/interpause/upscale`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetLorasSdapiV1LorasGet
         * @summary Get Loras
         * @request GET:/sdapi/v1/loras
         */
        getLorasSdapiV1LorasGet: (params = {}) => this.request({
            path: `/sdapi/v1/loras`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name RefreshLorasSdapiV1RefreshLorasPost
         * @summary Refresh Loras
         * @request POST:/sdapi/v1/refresh-loras
         */
        refreshLorasSdapiV1RefreshLorasPost: (params = {}) => this.request({
            path: `/sdapi/v1/refresh-loras`,
            method: "POST",
            format: "json",
            ...params,
        }),
    };
    sdExtraNetworks = {
        /**
         * No description
         *
         * @name FetchFileSdExtraNetworksThumbGet
         * @summary Fetch File
         * @request GET:/sd_extra_networks/thumb
         */
        fetchFileSdExtraNetworksThumbGet: (query, params = {}) => this.request({
            path: `/sd_extra_networks/thumb`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetMetadataSdExtraNetworksMetadataGet
         * @summary Get Metadata
         * @request GET:/sd_extra_networks/metadata
         */
        getMetadataSdExtraNetworksMetadataGet: (query, params = {}) => this.request({
            path: `/sd_extra_networks/metadata`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
    };
    openOutpaint = {
        /**
         * No description
         *
         * @name ReturnModelUnetChannelCountOpenOutpaintUnetCountPost
         * @summary Return Model Unet Channel Count
         * @request POST:/openOutpaint/unet-count
         */
        returnModelUnetChannelCountOpenOutpaintUnetCountPost: (data, params = {}) => this.request({
            path: `/openOutpaint/unet-count`,
            method: "POST",
            body: data,
            type: ContentType.UrlEncoded,
            format: "json",
            ...params,
        }),
    };
    controlnet = {
        /**
         * No description
         *
         * @name VersionControlnetVersionGet
         * @summary Version
         * @request GET:/controlnet/version
         */
        versionControlnetVersionGet: (params = {}) => this.request({
            path: `/controlnet/version`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ModelListControlnetModelListGet
         * @summary Model List
         * @request GET:/controlnet/model_list
         */
        modelListControlnetModelListGet: (params = {}) => this.request({
            path: `/controlnet/model_list`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ModuleListControlnetModuleListGet
         * @summary Module List
         * @request GET:/controlnet/module_list
         */
        moduleListControlnetModuleListGet: (query, params = {}) => this.request({
            path: `/controlnet/module_list`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name SettingsControlnetSettingsGet
         * @summary Settings
         * @request GET:/controlnet/settings
         */
        settingsControlnetSettingsGet: (params = {}) => this.request({
            path: `/controlnet/settings`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name DetectControlnetDetectPost
         * @summary Detect
         * @request POST:/controlnet/detect
         */
        detectControlnetDetectPost: (data, params = {}) => this.request({
            path: `/controlnet/detect`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    infiniteImageBrowsing = {
        /**
         * No description
         *
         * @name GreetingInfiniteImageBrowsingHelloGet
         * @summary Greeting
         * @request GET:/infinite_image_browsing/hello
         */
        greetingInfiniteImageBrowsingHelloGet: (params = {}) => this.request({
            path: `/infinite_image_browsing/hello`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GlobalSettingInfiniteImageBrowsingGlobalSettingGet
         * @summary Global Setting
         * @request GET:/infinite_image_browsing/global_setting
         */
        globalSettingInfiniteImageBrowsingGlobalSettingGet: (params = {}) => this.request({
            path: `/infinite_image_browsing/global_setting`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name DeleteFilesInfiniteImageBrowsingDeleteFilesPost
         * @summary Delete Files
         * @request POST:/infinite_image_browsing/delete_files
         */
        deleteFilesInfiniteImageBrowsingDeleteFilesPost: (data, params = {}) => this.request({
            path: `/infinite_image_browsing/delete_files`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name MoveFilesInfiniteImageBrowsingMoveFilesPost
         * @summary Move Files
         * @request POST:/infinite_image_browsing/move_files
         */
        moveFilesInfiniteImageBrowsingMoveFilesPost: (data, params = {}) => this.request({
            path: `/infinite_image_browsing/move_files`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetTargetFloderFilesInfiniteImageBrowsingFilesGet
         * @summary Get Target Floder Files
         * @request GET:/infinite_image_browsing/files
         */
        getTargetFloderFilesInfiniteImageBrowsingFilesGet: (query, params = {}) => this.request({
            path: `/infinite_image_browsing/files`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ThumbnailInfiniteImageBrowsingImageThumbnailGet
         * @summary Thumbnail
         * @request GET:/infinite_image_browsing/image-thumbnail
         */
        thumbnailInfiniteImageBrowsingImageThumbnailGet: (query, params = {}) => this.request({
            path: `/infinite_image_browsing/image-thumbnail`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetFileInfiniteImageBrowsingFileGet
         * @summary Get File
         * @request GET:/infinite_image_browsing/file
         */
        getFileInfiniteImageBrowsingFileGet: (query, params = {}) => this.request({
            path: `/infinite_image_browsing/file`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ApiSetSendImgPathInfiniteImageBrowsingSendImgPathPost
         * @summary Api Set Send Img Path
         * @request POST:/infinite_image_browsing/send_img_path
         */
        apiSetSendImgPathInfiniteImageBrowsingSendImgPathPost: (query, params = {}) => this.request({
            path: `/infinite_image_browsing/send_img_path`,
            method: "POST",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ApiSetSendImgPathInfiniteImageBrowsingGenInfoCompletedGet
         * @summary Api Set Send Img Path
         * @request GET:/infinite_image_browsing/gen_info_completed
         */
        apiSetSendImgPathInfiniteImageBrowsingGenInfoCompletedGet: (params = {}) => this.request({
            path: `/infinite_image_browsing/gen_info_completed`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ImageGeninfoInfiniteImageBrowsingImageGeninfoGet
         * @summary Image Geninfo
         * @request GET:/infinite_image_browsing/image_geninfo
         */
        imageGeninfoInfiniteImageBrowsingImageGeninfoGet: (query, params = {}) => this.request({
            path: `/infinite_image_browsing/image_geninfo`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name CheckPathExistsInfiniteImageBrowsingCheckPathExistsPost
         * @summary Check Path Exists
         * @request POST:/infinite_image_browsing/check_path_exists
         */
        checkPathExistsInfiniteImageBrowsingCheckPathExistsPost: (data, params = {}) => this.request({
            path: `/infinite_image_browsing/check_path_exists`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name IndexBdInfiniteImageBrowsingGet
         * @summary Index Bd
         * @request GET:/infinite_image_browsing
         */
        indexBdInfiniteImageBrowsingGet: (params = {}) => this.request({
            path: `/infinite_image_browsing`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name OpenFolderUsingExploreInfiniteImageBrowsingOpenFolderPost
         * @summary Open Folder Using Explore
         * @request POST:/infinite_image_browsing/open_folder
         */
        openFolderUsingExploreInfiniteImageBrowsingOpenFolderPost: (data, params = {}) => this.request({
            path: `/infinite_image_browsing/open_folder`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetDbBasicInfoInfiniteImageBrowsingDbBasicInfoGet
         * @summary Get Db Basic Info
         * @request GET:/infinite_image_browsing/db/basic_info
         */
        getDbBasicInfoInfiniteImageBrowsingDbBasicInfoGet: (params = {}) => this.request({
            path: `/infinite_image_browsing/db/basic_info`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetDbExpiredInfiniteImageBrowsingDbExpiredDirsGet
         * @summary Get Db Expired
         * @request GET:/infinite_image_browsing/db/expired_dirs
         */
        getDbExpiredInfiniteImageBrowsingDbExpiredDirsGet: (params = {}) => this.request({
            path: `/infinite_image_browsing/db/expired_dirs`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name UpdateImageDbDataInfiniteImageBrowsingDbUpdateImageDataPost
         * @summary Update Image Db Data
         * @request POST:/infinite_image_browsing/db/update_image_data
         */
        updateImageDbDataInfiniteImageBrowsingDbUpdateImageDataPost: (params = {}) => this.request({
            path: `/infinite_image_browsing/db/update_image_data`,
            method: "POST",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name MatchImageByTagsInfiniteImageBrowsingDbMatchImagesByTagsPost
         * @summary Match Image By Tags
         * @request POST:/infinite_image_browsing/db/match_images_by_tags
         */
        matchImageByTagsInfiniteImageBrowsingDbMatchImagesByTagsPost: (data, params = {}) => this.request({
            path: `/infinite_image_browsing/db/match_images_by_tags`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetImgSelectedCustomTagInfiniteImageBrowsingDbImgSelectedCustomTagGet
         * @summary Get Img Selected Custom Tag
         * @request GET:/infinite_image_browsing/db/img_selected_custom_tag
         */
        getImgSelectedCustomTagInfiniteImageBrowsingDbImgSelectedCustomTagGet: (query, params = {}) => this.request({
            path: `/infinite_image_browsing/db/img_selected_custom_tag`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ToggleCustomTagToImgInfiniteImageBrowsingDbToggleCustomTagToImgPost
         * @summary Toggle Custom Tag To Img
         * @request POST:/infinite_image_browsing/db/toggle_custom_tag_to_img
         */
        toggleCustomTagToImgInfiniteImageBrowsingDbToggleCustomTagToImgPost: (data, params = {}) => this.request({
            path: `/infinite_image_browsing/db/toggle_custom_tag_to_img`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name AddCustomTagInfiniteImageBrowsingDbAddCustomTagPost
         * @summary Add Custom Tag
         * @request POST:/infinite_image_browsing/db/add_custom_tag
         */
        addCustomTagInfiniteImageBrowsingDbAddCustomTagPost: (data, params = {}) => this.request({
            path: `/infinite_image_browsing/db/add_custom_tag`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name RemoveCustomTagInfiniteImageBrowsingDbRemoveCustomTagPost
         * @summary Remove Custom Tag
         * @request POST:/infinite_image_browsing/db/remove_custom_tag
         */
        removeCustomTagInfiniteImageBrowsingDbRemoveCustomTagPost: (data, params = {}) => this.request({
            path: `/infinite_image_browsing/db/remove_custom_tag`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name RemoveCustomTagFromImgInfiniteImageBrowsingDbRemoveCustomTagFromImgPost
         * @summary Remove Custom Tag From Img
         * @request POST:/infinite_image_browsing/db/remove_custom_tag_from_img
         */
        removeCustomTagFromImgInfiniteImageBrowsingDbRemoveCustomTagFromImgPost: (data, params = {}) => this.request({
            path: `/infinite_image_browsing/db/remove_custom_tag_from_img`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name SearchBySubstrInfiniteImageBrowsingDbSearchBySubstrGet
         * @summary Search By Substr
         * @request GET:/infinite_image_browsing/db/search_by_substr
         */
        searchBySubstrInfiniteImageBrowsingDbSearchBySubstrGet: (query, params = {}) => this.request({
            path: `/infinite_image_browsing/db/search_by_substr`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ReadScannedPathsInfiniteImageBrowsingDbScannedPathsGet
         * @summary Read Scanned Paths
         * @request GET:/infinite_image_browsing/db/scanned_paths
         */
        readScannedPathsInfiniteImageBrowsingDbScannedPathsGet: (params = {}) => this.request({
            path: `/infinite_image_browsing/db/scanned_paths`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name CreateScannedPathInfiniteImageBrowsingDbScannedPathsPost
         * @summary Create Scanned Path
         * @request POST:/infinite_image_browsing/db/scanned_paths
         */
        createScannedPathInfiniteImageBrowsingDbScannedPathsPost: (data, params = {}) => this.request({
            path: `/infinite_image_browsing/db/scanned_paths`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name DeleteScannedPathInfiniteImageBrowsingDbScannedPathsDelete
         * @summary Delete Scanned Path
         * @request DELETE:/infinite_image_browsing/db/scanned_paths
         */
        deleteScannedPathInfiniteImageBrowsingDbScannedPathsDelete: (data, params = {}) => this.request({
            path: `/infinite_image_browsing/db/scanned_paths`,
            method: "DELETE",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    sam = {
        /**
         * No description
         *
         * @name HeartbeatSamHeartbeatGet
         * @summary Heartbeat
         * @request GET:/sam/heartbeat
         */
        heartbeatSamHeartbeatGet: (params = {}) => this.request({
            path: `/sam/heartbeat`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Query available SAM model
         *
         * @name ApiSamModelSamSamModelGet
         * @summary Api Sam Model
         * @request GET:/sam/sam-model
         */
        apiSamModelSamSamModelGet: (params = {}) => this.request({
            path: `/sam/sam-model`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ApiSamPredictSamSamPredictPost
         * @summary Api Sam Predict
         * @request POST:/sam/sam-predict
         */
        apiSamPredictSamSamPredictPost: (data, params = {}) => this.request({
            path: `/sam/sam-predict`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ApiDinoPredictSamDinoPredictPost
         * @summary Api Dino Predict
         * @request POST:/sam/dino-predict
         */
        apiDinoPredictSamDinoPredictPost: (data, params = {}) => this.request({
            path: `/sam/dino-predict`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ApiDilateMaskSamDilateMaskPost
         * @summary Api Dilate Mask
         * @request POST:/sam/dilate-mask
         */
        apiDilateMaskSamDilateMaskPost: (data, params = {}) => this.request({
            path: `/sam/dilate-mask`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ApiControlnetSegSamControlnetSegPost
         * @summary Api Controlnet Seg
         * @request POST:/sam/controlnet-seg
         */
        apiControlnetSegSamControlnetSegPost: (data, params = {}) => this.request({
            path: `/sam/controlnet-seg`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ApiCategoryMaskSamCategoryMaskPost
         * @summary Api Category Mask
         * @request POST:/sam/category-mask
         */
        apiCategoryMaskSamCategoryMaskPost: (data, params = {}) => this.request({
            path: `/sam/category-mask`,
            method: "POST",
            body: data,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
}
//# sourceMappingURL=AutomaticApi.js.map