import { ByteLike } from "./type/ByteLike";
import { ADDRESS_ALGORITHM } from "./ADDRESS_ALGORITHM";
export declare const addressStringOf: ({ bytes, algorithm, radix, }: {
    algorithm?: ADDRESS_ALGORITHM | undefined;
    bytes: ByteLike;
    radix?: number | undefined;
}) => Promise<string>;
//# sourceMappingURL=addressStringOf.d.ts.map