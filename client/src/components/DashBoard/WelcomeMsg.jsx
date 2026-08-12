import { api } from '@/services/api'
import React, { useEffect, useState } from 'react'

function WelcomeMsg() {
  const user = JSON.parse(localStorage.getItem('user'))
  const [users, setUser] = useState({})
  useEffect(()=>{
    if(!user) return 
    const loadData = async()=>{
      try{
       const res = await api.post('/auth/user', {id: user.id}, {withCredentials: true})
       const {data} = res
       setUser(data)
      }catch(err){
        console.log(err)
      }
    }
    loadData()
  },[])
  return (
    <div className='w-full max-w-xl mx-auto p-6 '>
       <div className='flex justify-center'>
        <h2 className='text-5xl font-extrabold italic bg-gradient-to-r from-green-500 via-gray-500 to-pink-500 bg-clip-text text-transparent'>Welcome {users.name}</h2>
       </div>
    </div>
  )
}

export default WelcomeMsg