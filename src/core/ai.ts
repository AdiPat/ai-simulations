import axios from "axios";
import { simulatorLogger } from "./logger";
import { SimulatorEvents, Utils } from "../common";

const API_URL = "http://localhost:1234/v1/chat/completions";

async function llm({
  system,
  prompt,
  temperature,
  maxTokens,
  json,
}: {
  system?: string;
  prompt: string;
  temperature?: number;
  maxTokens?: number;
  json?: boolean;
}): Promise<any> {
  try {
    if (json == undefined) {
      json = true;
    }

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
        {
          role: "user",
          content: prompt + json ? "\nReturn the response as JSON" : "",
        },
      ],
      temperature: temperature,
      max_tokens: maxTokens,
      stream: false,
    };

    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const rawResult = response.data.choices[0].message.content;

    if (json) {
      const cleanedJson = Utils.cleanGPTJson(
        response.data.choices[0].message.content
      );
      const parsedJson = Utils.parseJSON(cleanedJson);
      return parsedJson;
    }

    return rawResult;
  } catch (error) {
    simulatorLogger.log({
      event: SimulatorEvents.SYSTEM_ERROR,
      message: "Error with AI completion.",
      data: {
        error,
      },
    });
    return null;
  }
}

export { llm };
