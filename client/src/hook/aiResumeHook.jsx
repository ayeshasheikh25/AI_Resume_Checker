import { aiResumeContext } from "@/context/aiResumeContext";
import { useContext } from "react";

export const useAIResumeHook = () => {
  const { resumeData, analyses } = useContext(aiResumeContext);
  const atsScore = () => {
    const latest = analyses[analyses.length - 1];
    const val = latest?.atsScore ?? 0;
    return val;
  };
  const totalResume = () => {
    const total = resumeData?.length ?? 0;
    return total;
  };
  const totalAiSuggestions = () => {
    const latest = analyses[analyses.length - 1];
    const total = latest?.suggestions?.length ?? 0;
    return total;
  };
  const updatedData = () => {
    const data = resumeData[resumeData.length - 1];
    const { createdAt } = data ?? 0;
    const formatDate = new Date(createdAt).toDateString().slice(4);
    return formatDate;
  };
  const chartData = () => {
    const data = analyses?.map((d) => ({
      date: new Date(d.createdAt).toDateString().slice(4),
      score: d.atsScore,
    }));
    return data;
  };
  const getGrade = () => {
    const data = analyses[analyses.length - 1];

    const score = data?.atsScore ?? 0;

    const grade =
      score >= 9
        ? "Excellent"
        : score >= 7
          ? "Good"
          : score >= 5
            ? "Satisfactory"
            : "Needs Improvement";
    return grade;
  };

  const fetchData = () => {
    const data = resumeData[resumeData.length - 1];
    const analysisData = analyses?.find((d) => d.resumeId === data._id);
 
    return {
            resumeName: data?.originalName.replace('.pdf', ""),
            id: analysisData?._id,
            resumeId: analysisData?.resumeId,
            summary: analysisData?.summary
        }
  };

  const historyData = ()=>{
    const data = resumeData?.map((d)=>{
        const analysisData = analyses.find((analysis)=> analysis.resumeId === d._id)
        if (!analysisData) return null;
        return{
            userId: d.userId,
            resumeId: d._id,
            analysisId: analysisData._id,
            resumeName: d.originalName,
            score: analysisData.atsScore,
            date: new Date(d.createdAt).toDateString().slice(4)
        }
    })
    return data
  }
  return {
    atsScore,
    totalResume,
    totalAiSuggestions,
    updatedData,
    chartData,
    getGrade,
    fetchData,
    historyData
  };
};
