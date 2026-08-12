import { api } from "@/services/api";
import { createContext, useEffect, useState } from "react";

export const aiResumeContext = createContext();

export function AIResumeProvider({ children }) {
  const [analyses, setAnalyses] = useState([]);
  const [resumeData, setResumeData] = useState([]);

  const [userData, setUserData] = useState(() => {
    const data = localStorage.getItem("user")
    return data ? JSON.parse(data) : null
  });


  const loadData = async () => {
    const res = await api.get(`/api/resume/upload/${userData.id}`, {
      withCredentials: true,
    });
    const { data } = res
    setAnalyses(data.AnalysisData);
    setResumeData(data.ResumeData);
  }

  useEffect(() => {
    if (!userData) return;
    loadData();
  }, [userData]);

  useEffect(() => {
    if (!userData) return;
    loadData();
  }, [])

  
  return (
    <aiResumeContext.Provider
      value={{ analyses, setAnalyses, resumeData, setResumeData, setUserData, userData, loadData }}
    >
      {children}
    </aiResumeContext.Provider>
  );
}
