// @see https://web.archive.org/web/20210511134011/https://michalzalecki.com/nominal-typing-in-typescript/
export type Brand<K, T> = K & { __brand: T; };
