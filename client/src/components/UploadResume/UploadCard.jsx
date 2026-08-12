import React, { useState } from "react";
import { FileText, Upload, LoaderCircle } from "lucide-react";
import { api } from "@/services/api";
import ResumeSummary from "./ResumeSummary";
function UploadCard() {
  const [file, setFile] = useState(null);

  const [resumeData , setResumeData] = useState(null)
  const [loader, setLoader] = useState(false);

  const uploadFile = async () => {
    try {
      if (!file) {
        alert("Upload Resume");
      }
      setLoader(true)
      const formData = new FormData()
      formData.append("resume", file)
      console.log(formData)
      const res = await api.post('/api/resume/upload', formData, {withCredentials: true} )
      const {data} = res
      const dataObj = {
        id: data.analysesResult._id,
        resumeId: data.analysesResult.resumeId,
        atsScore: data.analysesResult.atsScore,
        summary: data.analysesResult.summary,
        strengths: data.analysesResult.strengths,
        weaknesses: data.analysesResult.weaknesses,
        suggestions: data.analysesResult.suggestions,
        fileName: data.resume.originalName
      }

      setResumeData(dataObj)
      setFile(null)
    } catch (err) {
        console.log(err)
    } finally {
        setLoader(false)
    }
  };
  
  return (
    <div className="relative w-full max-w-xl mx-auto px-4">
      <div className={`rounded-2xl bg-white border border-green-100 p-2 m-2 md:p-6 md:m-4 shadow-md shadow-black/50 text-green-700 text-center ${loader ? "opacity-40 pointer-events-none" : "opacity-100"}`}>
        <div className="md:p-8">
          <div className="flex items-center justify-center gap-2">
            <div className="rounded-lg bg-green-100 p-2">
              <FileText size={24} />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold">Upload Resume</h2>
          </div>

          <div>
            <p className="mt-2 text-sm sm:text-base text-gray-500">
              Get an AI-powered ATS score, strengths, weaknesses, and
              personalized improvement suggestions.
            </p>
          </div>
        </div>

        <div className="border border-dashed border-green-400 rounded">
          <div className="mb-4 mt-3">
            <h3 className="font-medium text-gray-700">
              Drag & Drop your PDF here
            </h3>

            <p className="mt-2 text-sm text-gray-500">or</p>
            <input
              type="file"
              id="resume"
              accept=".pdf"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
            {/* <Button
              
              className="cursor-pointer bg-green-700 text-white px-4 py-2 rounded hover:bg-green-500"
            > */}
            <label
              htmlFor="resume"
              className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-green-700 px-4 py-2 text-white hover:bg-green-600 relative"
            >
              <span className="text-sm flex gap-2 ">
                {!file && <Upload size={18} />}
                {file?.name || "Choose PDF"}
                {file && (
                  <button
                    onClick={() => setFile(null)}
                    type="button"
                    className="absolute top-0 -right-2 h-5 w-5 flex justify-center items-center cursor-pointer hover:bg-green-50 rounded-full bg-green-200 text-green-700 shadow"
                  >
                    &times;
                  </button>
                )}
              </span>
            </label>
            <p className="text-sm text-gray-400"> Max size 5 MB</p>
            {/* </Button> */}
          </div>
        </div>

        {file && (
          <div className="m-3">
            <button 
            disabled={loader}
            onClick={uploadFile} 
            className={`bg-green-700 text-white px-6 py-2  rounded-lg cursor-pointer hover:bg-green-600 ${loader && 'cursor-not-allowed'}`}>
              Analyze Resume
            </button>
          </div>
        )}
      </div>
      {
        loader && <div className="absolute left-50 inset-0 flex justify-between items-center">
            <LoaderCircle size={50} className="animate-spin text-green-600"/>
        </div>
      }
      {
        resumeData && <ResumeSummary resumeData={resumeData} />
      }
    </div>
    
  );
}

export default UploadCard;
