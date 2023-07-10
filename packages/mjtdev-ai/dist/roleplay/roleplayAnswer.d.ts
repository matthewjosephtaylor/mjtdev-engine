import { TextGenParams } from "../type/TextGenParams";
import { RoleplayParams } from "./RoleplayParams";
export declare const getCharacterDescription: (character: string) => string;
export declare const expandRoleplayPrompt: (params: Partial<RoleplayParams>) => string;
export declare const roleplayAnswer: (params: Partial<RoleplayParams>, textGenParams?: Partial<TextGenParams>) => Promise<string>;
//# sourceMappingURL=roleplayAnswer.d.ts.map