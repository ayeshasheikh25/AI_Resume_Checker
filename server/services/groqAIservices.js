const Groq = require("groq-sdk");
const { model } = require("mongoose");
require("dotenv").config();

const groq = new Groq({
  apiKey: process.env.GRQ_API_KEY,
});
const analyzeResume = async (resumeText) => {
  try {
    const prompt = `You are an ATS Resume Reviewer.

Analyze the following resume.

Return ONLY valid JSON.

Format:

{
  "atsScore": 0,
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Resume:
${resumeText}`;

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: { type: "json_object" } 
    });
    const data = response.choices[0].message.content;
    return data;
  } catch (err) {
    console.log(err)
  }
};

module.exports = analyzeResume;
