export declare const Grid2s: {
    deletePoint: <T>({ grid, point }: import("..").GridPoint2<T> & {
        value: T;
    }) => void;
    nameToPoint: (name: string) => import("@mjtdev/math").Point2;
    normalizePoint: <T_1>({ grid, point, }: import("..").GridPoint2<T_1>) => import("@mjtdev/math").Point2;
    pointToName: (point: import("@mjtdev/math").Point2) => string;
    updateValue: <T_2>({ grid, point, value, }: import("..").GridPoint2<T_2> & {
        value: T_2;
    }) => void;
    valueAt: <T_3>(gridPoint: import("..").GridPoint2<T_3>) => T_3;
};
//# sourceMappingURL=Grid2s.d.ts.map