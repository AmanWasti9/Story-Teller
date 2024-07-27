import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "@langchain/core/prompts";

async function query(data) {
  const hugging = import.meta.env.HUGGINGFACE_API_KEY
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3-medium-diffusers",
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
	return result;
}

export const StoryTellerService = async (inputValue) => {
  // console.log(inputValue);
  const SECRET_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const chat = new ChatGoogleGenerativeAI({ apiKey: SECRET_KEY });

  // Define your prompt templates
  const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(
    "Hello there! I'm Aman, your friendly storyteller. 🌟 I'm here to spin delightful tales just for you! Whether it's an adventurous journey, a magical world, or a heartwarming story, I've got it all. Just tell me what you’re in the mood for, and I'll craft a story that's at least two paragraphs long. If I can't come up with something, I'll let you know with a gentle 'I don't know the answer.' Let's create some magical moments together!"
  );

  const humanMessagePrompt =
    HumanMessagePromptTemplate.fromTemplate(" Write a childrens story based on the topic '{asked_story}' make sure it kind of rhymes and has a lesson.");

  const chatPrompt = ChatPromptTemplate.fromMessages([
    systemMessagePrompt,
    humanMessagePrompt,
  ]);

  const formattedChatPrompt = await chatPrompt.formatMessages({
    asked_story: inputValue,
  });
  // console.log("Formatted Chat Prompt: ", formattedChatPrompt);
  const response = await chat.invoke(formattedChatPrompt);

  document.getElementById('generateButton').addEventListener('click', () => {
    query({"inputs": response.content}).then((blob) => {
        // Create an object URL from the blob
        const objectURL = URL.createObjectURL(blob);

        // Create an image element and set its source to the object URL
        const img = document.createElement('img');
        img.src = objectURL;
        img.alt = "Generated Image";

        // Clear any previous image and append the new image element to the DOM
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = ''; // Clear previous image
        imageContainer.appendChild(img);
    });
});
  return response.content;
};
