/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
}  from "@google/generative-ai"

// Use an environment variable for the API key
const apiKey =  "AIzaSyAtnYr_9_Q23Je8VUZB0JIgjrP14zINf6o";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function runChat(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      // Safety settings can be adjusted as needed
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text(); // Return the result for further processing
  } catch (error) {
    console.error("Error during chat session:", error);
    throw error; // Re-throw the error after logging it
  }
}

// Export the function, not its invocation
export default runChat;