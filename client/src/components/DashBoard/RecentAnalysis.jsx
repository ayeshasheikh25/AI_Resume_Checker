import React from 'react'
import {FileText} from 'lucide-react'
import { useAIResumeHook } from '@/hook/aiResumeHook'
import { resume } from 'react-dom/server'
import { NavLink } from 'react-router-dom'
function RecentAnalysis() {
   const {fetchData} = useAIResumeHook()
   const data = fetchData()

   console.log(data)
  return (
    <div className='w-full p-4 md:max-w-md lg:max-w-xl mx-auto'>
      <div className='space-y-2 rounded-lg bg-white border-green-50 border-2 shadow-lg md:p-6 p-4 shadow-black/40 '>
         <div className='flex justify-center items-center gap-1'>
            <div className='bg-green-100 p-3 rounded-xl'>
                <FileText className='text-green-600'/> 
            </div>
            <h2 className='text-lg text-gray-500 font-bold'>Recent Analysis Resume</h2>
         </div>

         <div className='flex flex-col gap-4'>
            <h3 className='text-sm text-green-600 italic'>{data?.resumeName ?? "No Resume"}</h3>
            <div className='flex flex-col gap-2'>
                <h2 className='text-lg text-gray-500 font-semibold '>Summary</h2>
                <p className='text-xs text-gray-500'>{data?.summary}</p>
            </div>
            <NavLink className="bg-green-600 border text-white font-bold border-green-600 rounded-lg px-4 py-2 text-center mx-auto max-w-fit" >View Full Analysis</NavLink>
         </div>
      </div>
    </div>
  )
}

export default RecentAnalysis