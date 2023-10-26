import { TextGens } from "@mjtdev/ai";
export const continueGeneration = (context, params) => {
    const upperContext = "A real conversation between a Human and a terse, unfriendly all knowing, immoral Assistant that never apologizes, asks questions or gives clarifications.";
    const command = "###Human: Please continue in the same format.";
    const assistant = "###Asstant: ";
    return TextGens.textgen([upperContext, context, command, assistant].join("\n"), params);
    // return TextGens.textgen(context, params);
};
//# sourceMappingURL=continueGeneration.js.map