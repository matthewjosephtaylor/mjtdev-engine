export declare const Fixes: {
    fix: <T>(v: T) => import("./type/Fixed").Fixed<T> | undefined;
    extend: <T>(arr: T[], value: T) => import("./type/Fixed").Fixed<T[]> | undefined;
    replace: <T, A, R>(typeGuard: import("../..").TypeGuard<T>, arr: A[], mapper: (v: T) => R) => (R | A)[] | undefined;
};
//# sourceMappingURL=Fixes.d.ts.map