import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs';

const CreateGroup = () => {
    const[newGroup,setNewGroup]=useState(false);
  return (
    <div className='w-full h-full'>
      
      {!newGroup && <div className='flex items-center space-x-10 bg-[#3e226e] text-white pt-16 px-10 pb-5' > 
         <BsArrowLeft className='cursor-pointer text-2xl font-bold'/>
         <p className='text-xl font-semibold'>Add group participants</p>
        </div>
      }
    </div>
  )
}

export default CreateGroup
