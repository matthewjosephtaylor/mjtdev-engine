import { ChatHistory } from "./ChatHistory";
import { roleToTemplatedRole } from "./roleToTemplatedRole";
import { trimHistoryContent } from "./trimHistoryContent";

export const chatHistoryToText = (history: ChatHistory) => {
  return history
    .filter((line) => {
      const { content } = line;
      const trimmed = trimHistoryContent(content);
      if (trimmed.length === 0) {
        return false;
      }
      return true;
    })
    .map((line) => `${roleToTemplatedRole(line.character)}${trimHistoryContent(line.content)}`)
    .join("\n");
};
