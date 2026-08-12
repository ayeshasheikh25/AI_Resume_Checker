import Navbar from "@/components/Navbar";
import React from "react";
import resumeChecker from "../assets/resume-checker.svg";
import CardFeatures from "@/components/Card";
import HowItWorks from "@/components/WorkFeatures";
import FQA from "@/components/FQA";
import Footer from "@/components/Footer";
export default function LandingPage() {

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-emerald-50 to-green-200 flex flex-col-reverse items-center justify-between gap-10 px-6 py-10 md:flex-row md:px-12 lg:px-20">

        <div className="flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-xs font-semibold tracking-widest text-purple-500">
            RESUME CHECKER
          </h2>

          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Build an ATS-Friendly Resume with AI
          </h1>

          <p className="text-gray-700 text-sm sm:text-base">
            Analyze your resume, improve your ATS score, and generate
            professional suggestions.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={resumeChecker}
            alt="Resume Checker"
            className="w-[380px] md:w-[620px] lg:w-[520px] h-auto"
          />
        </div>
      </div>
      <CardFeatures/>
      <HowItWorks/>
      <FQA/>
      <Footer />
    </div>
  );
}
