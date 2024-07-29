import React from 'react'
import StatusUserCard from './StatusUserCard'

const Status = () => {
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

        </div>
      </div>
    </div>
  )
}

export default Status
