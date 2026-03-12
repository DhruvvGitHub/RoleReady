const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const {zodToJsonSchema} = require("zod-to-json-schema");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

// async function invokeGeminiAI() {
//     const response = await ai.models.generateContent({
//         model: "gemini-3-flash-preview",
//         contents: "Explain how AI works in a few words",
//     });
//     console.log(response.text);
// }

const interviewReportSchema = z.object({
    matchScore: z
        .number()
        .describe(
            "A score between 0 to 100 indicating how well the user's profile matches with the job description",
        ),
    technicalQuestions: z
        .array(
            z.object({
                question: z
                    .string()
                    .describe(
                        "The technical question which can be asked in the interview",
                    ),
                intention: z
                    .string()
                    .describe(
                        "The intention of interviewer behind asking this question",
                    ),
                answer: z
                    .string()
                    .describe(
                        "How to answer this question, what points to cover, what approach to take etc.",
                    ),
            }),
        )
        .describe(
            "Technical questions that can be asked in interview along with their intention and how to answer them",
        ),
    behavioralQuestions: z
        .array(
            z.object({
                question: z
                    .string()
                    .describe(
                        "The behavioral question which can be asked in the interview",
                    ),
                intention: z
                    .string()
                    .describe(
                        "The intention of interviewer behind asking this question",
                    ),
                answer: z
                    .string()
                    .describe(
                        "How to answer this question, what points to cover, what approach to take etc.",
                    ),
            }),
        )
        .describe(
            "Behavioral questions that can be asked in interview along with their intention and how to answer them",
        ),
    skillGaps: z
        .array(
            z.object({
                skill: z.string().describe("The skill which candidate is lacking"),
                severity: z
                    .enum(["low", "medium", "high"])
                    .describe(
                        "The intention of interviewer behind asking this question",
                    ),
            }),
        )
        .describe(
            "List of skill gaps in candidate's profile along with its severity",
        ),
    preparationPlan: z
        .array(
            z.object({
                day: z
                    .number()
                    .describe(
                        "The day number in preparation plan. Starting with day 1",
                    ),
                focus: z
                    .string()
                    .describe(
                        "The main focus of this day in preparation plan. Eg: data structures,system design, mock interviews etc",
                    ),
                task: z
                    .string()
                    .describe(
                        "The list of tasks to be done on this day to follow the preparation plan",
                    ),
            }),
        )
        .describe(
            "List of skill gaps in candidate's profile along with its severity",
        ),
});

async function generateInterviewReport({ resume, selfDescription, jobDescription }) {
  const prompt = `
Generate an interview report with the following JSON structure:

${JSON.stringify(zodToJsonSchema(interviewReportSchema), null, 2)}

Candidate details:
Resume: ${resume}
Self description: ${selfDescription}
Job description: ${jobDescription}

Return **only** valid JSON matching the schema.
`;

  // fall back to simple generation and validate client-side
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  const text = response.text;
  let json;
  try {
    json = JSON.parse(text);
  } catch (err) {
    throw new Error("AI response was not valid JSON: " + text);
  }

  return interviewReportSchema.parse(json);
}

module.exports = generateInterviewReport;