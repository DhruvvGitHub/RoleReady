const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

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
          .describe("The intention of interviewer behind asking this question"),
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
          .describe("The intention of interviewer behind asking this question"),
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
          .describe("The intention of interviewer behind asking this question"),
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
          .describe("The day number in preparation plan. Starting with day 1"),
        focus: z
          .string()
          .describe(
            "The main focus of this day in preparation plan. Eg: data structures,system design, mock interviews etc",
          ),
        task: z
          .string()
          .describe(
            "The list of tasks to be done on this day to follow the preparation plan",
          )
          .optional(),
        tasks: z
          .array(
            z
              .string()
              .describe(
                "Individual tasks to be done on this day in the preparation plan",
              ),
          )
          .optional(),
      }),
    )
    .describe(
      "List of skill gaps in candidate's profile along with its severity",
    ),
  // Optional because the prompt doesn't require it, and missing it
  // would otherwise cause validation to fail and return an empty report.
  title: z
    .string()
    .describe(
      "The title of the job for which the interview report is being generated",
    )
    .optional(),
});

async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription,
}) {
  if (!resume || !jobDescription) {
    console.warn("generateInterviewReport called with missing required fields", {
      resume: !!resume,
      selfDescription: !!selfDescription,
      jobDescription: !!jobDescription,
    });
    return {
      matchScore: 0,
      technicalQuestions: [],
      behavioralQuestions: [],
      skillGaps: [],
      preparationPlan: [],
      title: "Fallback Report",
      warning: "Missing required fields",
    };
  }

  const prompt = `
Generate an interview report. Your final reply must be valid JSON containing only the following keys:

  {
    "matchScore": <number>,
    "technicalQuestions": <array>,
    "behavioralQuestions": <array>,
    "skillGaps": <array>,
    "preparationPlan": <array>
  }

Each array should contain objects as described below. If you cannot provide any items, return an empty array.

Example output format (exact JSON object only):
{
  "matchScore": 85,
  "technicalQuestions": [
    {
      "question": "Explain event loop in Node.js.",
      "intention": "Check understanding of async execution.",
      "answer": "The event loop handles callbacks and promises..."
    }
  ],
  "behavioralQuestions": [
    {
      "question": "Tell me about a time you faced a bug.",
      "intention": "Assess problem-solving and ownership.",
      "answer": "I once debugged a race condition by..."
    }
  ],
  "skillGaps": [
    { "skill": "Docker", "severity": "medium" }
  ],
  "preparationPlan": [
    { "day": 1, "focus": "Data structures", "task": "Practice arrays and linked lists." }
  ]
}

Candidate details:
Resume: ${resume}
Self description: ${selfDescription}
Job description: ${jobDescription}

Return only the JSON object described above. Do NOT include any additional text.
`;

  try {
    const response = await ai.models.generateContent({
  model: "gemini-3.1-flash-lite-preview",
  contents: prompt,
});

if (!response || !response.text) {
  throw new Error("AI response missing text");
}

const text = response.text;
    const jsonTextMatch = text.match(/\{[\s\S]*\}/);
    const jsonText = jsonTextMatch ? jsonTextMatch[0] : text;

    let json;
    try {
      json = JSON.parse(jsonText);
    } catch (parseErr) {
      console.warn("AI returned invalid JSON, returning empty report:", text);
      return {
        matchScore: 0,
        technicalQuestions: [],
        behavioralQuestions: [],
        skillGaps: [],
        preparationPlan: [],
        title: "Fallback Report",
        warning: "AI output JSON parse failed",
      };
    }

    try {
      return interviewReportSchema.parse(json);
    } catch (zErr) {
      console.warn("validation failed, defaulting; zod error:", zErr);
      console.debug("received JSON was:", json);
      return {
        matchScore: 0,
        technicalQuestions: [],
        behavioralQuestions: [],
        skillGaps: [],
        preparationPlan: [],
        title: "Fallback Report",
        warning: "Zod validation failed",
      };
    }
  } catch (err) {
    console.error("generateInterviewReport failed:", err);
    return {
      matchScore: 0,
      technicalQuestions: [],
      behavioralQuestions: [],
      skillGaps: [],
      preparationPlan: [],
      title: "Fallback Report",
      warning: "AI service error: " + (err.message || "unknown"),
    };
  }
}

async function generateResumeHtml({ resume, selfDescription, jobDescription }) {
    console.log("Gen resume HTML called");
    
  const resumeHtmlSchema = z.object({
    html: z
      .string()
      .describe(
        "The HTML content of the resume",
      ),
  });

  const prompt = `
Generate a concise summary of the candidate's resume and self-description, tailored to the provided job description. The summary should highlight the most relevant skills, experiences, and qualifications that align with the job requirements. Include the following sections in the summary:
Resume: ${resume}
Self description: ${selfDescription}
Job description: ${jobDescription}
The response should be a JSON object with a single key "html" containing the HTML content of the summary. The HTML should be well-structured and formatted for readability.
The content of resume should not sound like generated by AI, it should be concise and to the point like it is generated by a human. Do not include any information which is not relevant to the job description.
You can highlight the content using some colors or different font style but the overall design should be simple and professional. Do not include any images in the HTML, only text content with basic formatting.
The total content should be ATS friendly, meaning it should be easily parsable by Applicant Tracking Systems, so avoid complex layouts or graphics. The resume should not be very long, it should ideally fit in 1-2 pages. Focus on the most relevant information that showcases the candidate's suitability for the job.`;

  const response = await ai.models.generateContent({
  model: "gemini-3.1-flash-lite-preview",
  contents: prompt,
});

const responseText = response.text;
const jsonTextMatch = responseText.match(/\{[\s\S]*\}/);
const jsonText = jsonTextMatch ? jsonTextMatch[0] : responseText;

const jsonContent = JSON.parse(jsonText);

return jsonContent.html;
}


module.exports = {generateInterviewReport, generateResumeHtml};
