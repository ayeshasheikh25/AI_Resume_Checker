import React, { useContext, useState } from "react";
import { FileText, CalendarDays, BadgeCheck, Trash2, LoaderCircle } from "lucide-react";
import { useAIResumeHook } from "@/hook/aiResumeHook";
import { api } from "@/services/api";
import { aiResumeContext } from "@/context/aiResumeContext";

function HistoryCard() {
  const {loadData} = useContext(aiResumeContext)
  const { historyData } = useAIResumeHook();
  const history = historyData();
  const [loader, setLoader] = useState(false)
  const deleteData = async(userId, resumeId, analysisId) => {
    try {
        setLoader(true)
      const res = await api.delete(
        "/api/resume/upload/delete",
        {
          data: {
            userId,
            resumeId,
            analysisId,
          },
          withCredentials: true
        })
        const {data} = res 
        if(data.success){
            loadData()
        }
    } catch (err) {
      console.log(err);
    }finally{
        setLoader(false)
    }
  };
  return (
    <div className="relative w-full md:max-w-2xl lg:max-w-5xl mx-auto p-4">
      <div className={`bg-white rounded-2xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 p-5 ${loader ? "opacity-40 pointer-events-none" : "opacity-100"}`}>
        <div className="hidden md:grid grid-cols-12 gap-4 border-b pb-3 mb-4 text-sm font-semibold text-green-700">
          <div className="col-span-5">Resume</div>
          <div className="col-span-2 text-center">ATS</div>
          <div className="col-span-3 text-center">Uploaded</div>
          <div className="col-span-2 text-center">Actions</div>
        </div>

        {history.map((data, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 space-y-3 md:items-center"
          >
            <div className="md:col-span-5 flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-xl">
                <FileText className="text-green-700" size={22} />
              </div>

              <div>
                <h2 className="font-semibold text-gray-600 whitespace  md:text-sm ">
                  {data.resumeName}
                </h2>

                <p className="text-xs text-gray-500">Analysis Completed</p>
              </div>
            </div>

            <div className="md:col-span-2 flex md:justify-center justify-between items-center">
              <span className="md:hidden font-medium text-gray-500">
                ATS Score
              </span>

              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold flex items-center gap-1">
                <BadgeCheck size={16} />
                {data.score}/10
              </span>
            </div>

            <div className="md:col-span-3 flex md:justify-center justify-between items-center">
              <span className="md:hidden font-medium text-gray-500">
                Uploaded
              </span>

              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <CalendarDays className="text-orange-600" size={18} />
                {data.date}
              </div>
            </div>

            <div className="md:col-span-2 flex md:justify-center justify-end">
              <button
                onClick={() =>
                  deleteData(data.userId, data.resumeId, data.analysisId)
                }
                className="p-2 rounded-lg bg-red-100 hover:bg-red-200 transition"
              >
                <Trash2 className="text-red-600 cursor-pointer" size={18} />
              </button>
            </div>
          </div>
        ))}

        {loader && <div className="inset-0 absolute  top-50 flex justify-center items-center">
            <LoaderCircle className="animate-spin text-green-600" size={50} />
            </div>}
      </div>
    </div>
  );
}

export default HistoryCard;
