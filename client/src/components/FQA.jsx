import React, { useState } from "react";

function FQA() {
  const [show, setShow] = useState({});
  const frequentlyQuestions = [
    {
      question: "What is an AI Resume Checker?",
      answer:
        "An AI Resume Checker analyzes your resume using artificial intelligence to identify formatting issues, missing keywords, grammar mistakes, and ATS compatibility. It also provides suggestions to improve your chances of getting shortlisted by recruiters.",
    },
    {
      question: "How do I check my resume score?",
      answer:
        "Simply upload your resume in PDF format. The AI will analyze it and generate an ATS score along with detailed feedback, including strengths, weaknesses, and improvement suggestions.",
    },
    {
      question: "How can I improve my ATS score?",
      answer:
        "Use relevant keywords from the job description, maintain a clean and professional layout, highlight measurable achievements, avoid unnecessary graphics, and follow the AI suggestions provided after the analysis.",
    },
    {
      question: "Which file formats are supported?",
      answer:
        "Currently, AI Resume Checker supports PDF resumes. PDF ensures that your formatting remains consistent across different devices and applicant tracking systems.",
    },
    {
      question: "Is my resume secure?",
      answer:
        "Yes. Your resume is securely uploaded and processed only for analysis. We do not share your personal information with third parties, and your data is handled with privacy and security in mind.",
    },
    {
      question: "Can I analyze my resume multiple times?",
      answer:
        "Yes. You can upload an updated version of your resume as many times as you want to track improvements and receive new AI-powered suggestions.",
    },
  ];
  console.log(show);
  return (
    <div className="px-5 py-8 md:px-12 md:py-10 bg-white">
      <div className="ml-0 md:ml-20 lg:ml-50 flex flex-col gap-4">
        <h1 className="font-bold text-2xl text-green-900 ">
          Frequently asked questions
        </h1>
        {frequentlyQuestions.map((data, index) => (
          <div key={index}>
            <button
              className="font-heading text-green-800 text-sm cursor-pointer md:text-lg"
              onClick={() =>
                setShow((prev) => ({ ...prev, [index]: !prev[index] }))
              }
            >
       
              {show[index] ? "-" : "+"} {data.question}{" "}
            </button>
            <div
              className={`transition-all duration-500 ease-in-out ${show[index] ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className={`text-sm w-[70%] text-justify`}> {data.answer} </p>
            </div>
            <div className="mt-4 border-b border-gray-300 w-[70%]"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FQA;
