import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UploadResume from "./pages/UploadResume";
import { AIResumeProvider } from "./context/aiResumeContext";
import ResumeHistory from "./pages/ResumeHistory";

function App() {

  return (
    <>
      <AIResumeProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<UploadResume />} />
          <Route path="/history" element={<ResumeHistory />} />
        </Routes>
      </AIResumeProvider>
    </>
  );
}

export default App;
