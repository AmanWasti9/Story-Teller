import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "@langchain/core/prompts";

async function query(data) {
  const hugging = import.meta.env.VITE_HUGGING_API_KEY;
  const response = await fetch(
    // "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3-medium-diffusers",
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
    {
      headers: {
        Authorization: `Bearer ${hugging}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return URL.createObjectURL(result); // Return the object URL directly
}

export const StoryTellerService = async (inputValue) => {
  const SECRET_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const chat = new ChatGoogleGenerativeAI({ apiKey: SECRET_KEY });

  // Define your prompt templates
  const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(
    "Your name is Narrify and you are a friendly storyteller. 🌟 I'm here to spin delightful tales just for you! Whether it's an adventurous journey, a magical world, or a heartwarming story, I've got it all. Just tell me what you’re in the mood for, and I'll craft a story that's at least two paragraphs long. If I can't come up with something, I'll let you know with a gentle 'I don't know the answer.' Let's create some magical moments together!"
  );

  const humanMessagePrompt =
    HumanMessagePromptTemplate.fromTemplate(" Write a childrens story based on the topic '{asked_story}' make sure it kind of rhymes and has a lesson. If you receive an abstract or creative prompt, generate an image accordingly, and also be creative in responding. Keep the language simple though, don't use jargon.");

  const chatPrompt = ChatPromptTemplate.fromMessages([
    systemMessagePrompt,
    humanMessagePrompt,
  ]);

  const formattedChatPrompt = await chatPrompt.formatMessages({
    asked_story: inputValue,
  });

  const response = await chat.invoke(formattedChatPrompt);

  const imageURL = await query({ "inputs": `${response.content}, anime, cartoon, kids, children, not realistic` });

  return {
    story: response.content,
    imageURL: imageURL
  };
};
