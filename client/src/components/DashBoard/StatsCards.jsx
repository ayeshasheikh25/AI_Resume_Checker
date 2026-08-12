import React from "react";
import {
  BadgeCheck,
  FileText,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import { useAIResumeHook } from "@/hook/aiResumeHook";

function StatsCards() {
    const {atsScore , totalResume, totalAiSuggestions, updatedData, getGrade} = useAIResumeHook()
    const grade = getGrade()
  return (
    <div className="w-full p-4  md:max-w-md lg:max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl border border-green-100 shadow-md p-6 hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div className="bg-green-100 p-3 rounded-xl">
              <BadgeCheck className="text-green-700" size={24} />
            </div>
            <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">
              {grade ?? "Satisfactory"}
            </span>
          </div>

          <h3 className="mt-5 text-gray-500 text-sm">ATS Score</h3>
          <h1 className="text-4xl font-bold text-green-700 mt-1">{atsScore()}/10</h1>
        </div>

     
        <div className="bg-white rounded-2xl border border-green-100 shadow-md p-6 hover:shadow-lg transition">
          <div className="bg-blue-100 w-fit p-3 rounded-xl">
            <FileText className="text-blue-600" size={24} />
          </div>

          <h3 className="mt-5 text-gray-500 text-sm">Total Resumes</h3>
          <h1 className="text-4xl text-blue-600 font-bold mt-1">{totalResume()}</h1>
        </div>

        <div className="bg-white rounded-2xl border border-green-100 shadow-md p-6 hover:shadow-lg transition">
          <div className="bg-orange-100 w-fit p-3 rounded-xl">
            <CalendarDays className="text-orange-600" size={24} />
          </div>

          <h3 className="mt-5 text-gray-500 text-sm">Latest Upload</h3>
          <span className="text-xs text-gray-500">
            {updatedData()}
          </span>
        </div>

     
        <div className="bg-white rounded-2xl border border-green-100 shadow-md p-6 hover:shadow-lg transition">
          <div className="bg-purple-100 w-fit p-3 rounded-xl">
            <Sparkles className="text-purple-600" size={24} />
          </div>

          <h3 className="mt-5 text-gray-500 text-sm">AI Suggestions</h3>
          <h1 className="text-4xl font-bold text-purple-600 mt-1">{totalAiSuggestions()}</h1>
        </div>

      </div>
    </div>
  );
}

export default StatsCards;