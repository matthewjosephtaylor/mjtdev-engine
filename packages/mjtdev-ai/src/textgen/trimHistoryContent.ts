
export const trimHistoryContent = (content: string) => {
  return content
    .trim()
    .replace("\n", ".")
    .replace("\r", ".")
    .replace(/[^A-Za-z0-9\*\. \"\']*/gi, "")
    .replace(/\.*/, "");
};
