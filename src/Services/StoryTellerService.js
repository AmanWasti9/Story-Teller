import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "@langchain/core/prompts";

export const StoryTellerService = async (inputValue) => {
  // console.log(inputValue);
  const SECRET_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const chat = new ChatGoogleGenerativeAI({ apiKey: SECRET_KEY });

  // Define your prompt templates
  const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(
    "Hello there! I'm Aman, your friendly storyteller. 🌟 I'm here to spin delightful tales just for you! Whether it's an adventurous journey, a magical world, or a heartwarming story, I've got it all. Just tell me what you’re in the mood for, and I'll craft a story that's at least two paragraphs long. If I can't come up with something, I'll let you know with a gentle 'I don't know the answer.' Let's create some magical moments together!"
  );

  const humanMessagePrompt =
    HumanMessagePromptTemplate.fromTemplate("{asked_story}");

  const chatPrompt = ChatPromptTemplate.fromMessages([
    systemMessagePrompt,
    humanMessagePrompt,
  ]);

  const formattedChatPrompt = await chatPrompt.formatMessages({
    asked_story: inputValue,
  });
  // console.log("Formatted Chat Prompt: ", formattedChatPrompt);
  const response = await chat.invoke(formattedChatPrompt);

  return response.content;
};
