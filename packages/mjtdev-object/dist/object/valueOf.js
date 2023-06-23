import { isProducer } from "./type/Producer";
export const valueOf = (valueProducer) => {
    if (isProducer(valueProducer)) {
        return valueProducer();
    }
    return valueProducer;
};
//# sourceMappingURL=valueOf.js.map