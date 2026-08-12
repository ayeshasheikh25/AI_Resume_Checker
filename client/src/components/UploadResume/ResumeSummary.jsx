import React from "react";
import {
  FileText,
  FilePenLine,
  Award,
  CircleCheckBig,
  CircleX,
  Lightbulb,
} from "lucide-react";

function ResumeSummary({ resumeData }) {
  if (!resumeData) return null;

  const grade =
    resumeData.atsScore >= 9
      ? "Excellent"
      : resumeData.atsScore >= 7
      ? "Good"
      : resumeData.atsScore >= 5
      ? "Satisfactory"
      : "Needs Improvement";
   console.log(resumeData.atsScore)
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="rounded-2xl bg-white border border-green-100 p-6 shadow-lg">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b pb-4">
          <div>
            <h2 className="flex items-center gap-2 text-lg font-bold text-green-700">
              <FileText size={22} />
              Resume Summary
            </h2>

            <div className="mt-4 space-y-2">
              <p className="text-sm">
                <span className="font-semibold">File:</span>{" "}
                {resumeData.fileName}
              </p>

              <p className="text-sm">
                <span className="font-semibold">Status:</span>{" "}
                <span className="text-green-600 font-medium">
                  Completed
                </span>
              </p>
            </div>
          </div>

 
          <div className="flex flex-col justify-center items-center rounded-xl bg-green-50 ">
            <Award size={20} className="text-green-600" />

            <h1 className="mt-2 font-bold">
              {resumeData.atsScore}/10
            </h1>

            <p className="text-green-700 font-medium">
              {grade}
            </p>
          </div>
        </div>


        <div className="mt-8">
          <h2 className="flex items-center gap-2 font-semibold text-green-700">
            <FilePenLine size={20} />
            AI Summary
          </h2>

          <p className="mt-3 text-sm text-gray-700 leading-6 text-justify">
            {resumeData.summary}
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

          <div>
            <h2 className="flex items-center gap-2 font-semibold text-green-700">
              <CircleCheckBig size={20} />
              Strengths
            </h2>

            <div className="mt-4 space-y-3">
              {resumeData.strengths.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 bg-green-50 p-3 rounded-lg"
                >
                  <CircleCheckBig
                    size={18}
                    className="text-green-600 mt-1 flex-shrink-0"
                  />

                  <p className="text-sm text-gray-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="flex items-center gap-2 font-semibold text-red-600">
              <CircleX size={20} />
              Weaknesses
            </h2>

            <div className="mt-4 space-y-3">
              {resumeData.weaknesses.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3  bg-red-50 p-3 rounded-lg"
                >
                  <CircleX
                    size={18}
                    className="text-red-500 mt-1 flex-shrink-0"
                  />

                  <p className="text-sm text-gray-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

  
        <div className="mt-8">
          <h2 className="flex items-center gap-2 font-semibold text-yellow-700">
            <Lightbulb size={20} />
            AI Suggestions
          </h2>

          <div className="mt-4 space-y-3">
            {resumeData.suggestions.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 bg-yellow-50 p-3 rounded-lg"
              >
                <Lightbulb
                  size={18}
                  className="text-yellow-600 mt-1 flex-shrink-0"
                />

                <p className="text-sm text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ResumeSummary;