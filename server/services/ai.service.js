const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
import { zodToJsonSchema } from "zod-to-json-schema";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

async function invokeGeminiAI() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

const interviewReportSchema = z.object({
  technicalQuestions: z.array(
    z.object({
      question: z
        .string()
        .description("The technical question which can be asked in the interview"),
      intention: z
        .string()
        .description(
          "The intention of interviewer behind asking this question",
        ),
      answer: z
        .string()
        .description("How to answer this question, what points to cover, what approach to take etc."),
    })).description("Technical questions that can be asked in interview along with their intention and how to answer them"),
    behavioralQuestions: z.array(
    z.object({
      question: z
        .string()
        .description("The technical question which can be asked in the interview"),
      intention: z
        .string()
        .description(
          "The intention of interviewer behind asking this question",
        ),
      answer: z
        .string()
        .description("How to answer this question, what points to cover, what approach to take etc."),
    })).description("Behavioral questions that can be asked in interview along with their intention and how to answer them"),
});

async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription,
}) {}

module.exports = invokeGeminiAI;
