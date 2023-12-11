export declare const Fixes: {
    fix: <T>(v: T) => Readonly<import("./type/Fixed").FixedBrand<T>> | undefined;
    extend: <T_1>(arr: T_1[], value: T_1) => Readonly<import("./type/Fixed").FixedBrand<T_1[]>> | undefined;
    replace: <T_2, A, R>(typeGuard: import("../..").TypeGuard<T_2>, arr: A[], mapper: (v: T_2) => R) => (A | R)[] | undefined;
};
//# sourceMappingURL=Fixes.d.ts.map