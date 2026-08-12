import React from "react";
import Sidebar from "../components/Sidebar";
import UploadCard from "@/components/UploadResume/UploadCard";

function UploadResume() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 md:ml-50 ml-20 p-4">
  
          <UploadCard />
      </main>
    </div>
  );
}

export default UploadResume;
