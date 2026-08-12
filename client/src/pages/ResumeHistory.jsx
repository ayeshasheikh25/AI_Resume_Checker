import HistoryCard from '@/components/ResumeHistory/HistoryCard'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function ResumeHistory() {
  return (
    <div className='flex'>
       <Sidebar />
       <div className='flex-1 md:ml-50 ml-20 p-4'>
        <HistoryCard />
       </div>
    </div>
  )
}

export default ResumeHistory