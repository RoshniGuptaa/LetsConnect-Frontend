import React from 'react'
import StatusUserCard from './StatusUserCard'
import { AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Status = () => {

  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate(-1)
  }
  return (
    <div className='bga'>
      <div className='flex items-center bg-gradient-to-r from-purple-800 to-green-400 px-[14vw] py-[7vh]'>
        {/* left part*/}
        <div className=' left h-[85vh] bg-[#1d3824] lg:w-[30%] w-[50%] px-5'>
            <div className='pt-5 h-[13%]'>
                   <StatusUserCard></StatusUserCard>
            </div>
            <hr />
            <div className='overflow-y-scroll h-[86%] pt-2'>
                {[1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item)=><StatusUserCard/>)}
            </div>
        </div>
        {/* Right part */}
        <div className='relative h-[85vh] lg:w-[70%] w-[50%] bg-[#101c13]'>
         <AiOutlineClose onClick={handleNavigate} className='text-white cursor-pointer absolute top-5 right-10 text-xl'/>
        </div>
      </div>
    </div>
  )
}

export default Status
