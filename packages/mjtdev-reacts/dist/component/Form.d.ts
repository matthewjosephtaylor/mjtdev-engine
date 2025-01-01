import { type JSX } from "react";
export type FormValueType = "string" | "number" | "boolean" | "color";
export declare const INPUT_VALUE_CONTROLS: Record<FormValueType, (key: string, value?: string) => JSX.Element>;
export declare const formEntryToFormLine: (key: string, valueType: FormValueType) => (import("react/jsx-runtime").JSX.Element | ((key: string, value?: string) => JSX.Element))[];
export declare const Form: <R extends Record<string, FormValueType>>({ format, initial, onChange, onSubmit, submitText, }: {
    readonly format: R;
    readonly initial?: Partial<Record<keyof R, string>> | undefined;
    onChange?: ((record: Partial<Record<keyof R, string>>) => void) | undefined;
    onSubmit?: ((record: Partial<Record<keyof R, string>>) => void) | undefined;
    submitText?: string | undefined;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Form.d.ts.map