import axios from "axios";

const API_URL = "http://localhost:1234/v1/chat/completions";

async function llm({
  system,
  prompt,
  temperature,
  maxTokens,
}: {
  system?: string;
  prompt: string;
  temperature?: number;
  maxTokens?: number;
}) {
  if (!system) {
    system =
      "You are a helpful assistant that helps people with their problems.";
  }

  if (!prompt) {
    throw new Error("Prompt required. Please provide a prompt.");
  }

  if (!temperature) {
    temperature = 0.5;
  }

  if (!maxTokens) {
    maxTokens = 4096;
  }

  const url = API_URL;
  const data = {
    model: "LM Studio Community/Meta-Llama-3-8B-Instruct-GGUF",
    messages: [
      { role: "system", content: system },
      { role: "user", content: prompt },
    ],
    temperature: temperature,
    max_tokens: maxTokens,
    stream: false,
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error making the request:", error);
  }
}

export { llm };
