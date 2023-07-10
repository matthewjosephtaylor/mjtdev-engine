import { Sample } from "./type/Sample";
export declare const Samples: {
    create: (sample?: Partial<Sample>) => Sample;
    names: () => string[];
    add: (value: unknown, sample?: Partial<Sample>) => Sample;
    set: (name: string, value: number) => void;
    log: (name: string) => void;
    clear: (name: string) => void;
    all: () => Sample[];
};
//# sourceMappingURL=Samples.d.ts.map