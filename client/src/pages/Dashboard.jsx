import ATSChart from '@/components/DashBoard/ATSChart'
import RecentAnalysis from '@/components/DashBoard/RecentAnalysis'
import StatsCards from '@/components/DashBoard/StatsCards'
import WelcomeMsg from '@/components/DashBoard/WelcomeMsg'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function Dashboard() {

  return (

    <div className='flex'>
        <Sidebar/>
        <div className='flex-1 md:ml-50 ml-20 p-4'>
           <WelcomeMsg />
           <StatsCards />
           <ATSChart />
           <RecentAnalysis />
        </div>
    </div>
  )
}

export default Dashboard