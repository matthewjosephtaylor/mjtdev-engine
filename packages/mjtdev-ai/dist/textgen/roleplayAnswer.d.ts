import { ChatHistory } from "./ChatHistory";
export type RoleplayParams = {
    prompt: string;
    character: string;
    user: string;
    history: ChatHistory;
    summary: string;
    defaultBio: string;
};
export declare const expandRoleplayPrompt: (params: Partial<RoleplayParams>) => string;
export declare const roleplayAnswer: (params: Partial<RoleplayParams>) => Promise<string>;
//# sourceMappingURL=roleplayAnswer.d.ts.map