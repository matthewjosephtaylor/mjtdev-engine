import type { ChatHistory } from "../type/ChatHistory";
import type { TextGenParams } from "../type/TextGenParams";
export type RoleplayParams = {
    prompt: string;
    character: string;
    history: ChatHistory;
    summary: string;
    defaultBio: string;
    assistantLine: string;
    storyPlot: string;
};
export declare const getCharacterDescription: (character: string) => string;
export declare const expandRoleplayPrompt: (params: Partial<RoleplayParams>) => string;
export declare const roleplayAnswer: (params: Partial<RoleplayParams>, textGenParams?: Partial<TextGenParams>) => Promise<string>;
//# sourceMappingURL=roleplayAnswer.d.ts.map