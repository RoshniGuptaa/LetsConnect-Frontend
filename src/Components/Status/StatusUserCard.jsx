import React from 'react'
import { useNavigate } from 'react-router-dom'

const StatusUserCard = () => {

    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate(`/status/{userId}`)
    }
  return (
    <div className='flex items-center p-3'>
       <div>
        <img className='h-7 w-7 lg:w-10 lg:h-10 rounded-full' src="https://cdn.pixabay.com/photo/2024/07/24/05/03/ai-generated-8916956_1280.jpg" alt="" />
       </div>
       <div className='ml-2 text-white'>
        <p>Roshni Gupta</p>
       </div>
    </div>
  )
}

export default StatusUserCard
