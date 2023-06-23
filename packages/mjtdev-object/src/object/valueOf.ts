import { ValueProducer, isProducer } from "./type/Producer";


export const valueOf = <T>(valueProducer: ValueProducer<T>): T => {
  if (isProducer(valueProducer)) {
    return valueProducer();
  }
  return valueProducer;
};
