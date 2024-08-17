import React, { useState } from 'react'
import { BsArrowLeft, BsCheck2 } from 'react-icons/bs'
import {Button, CircularProgress} from "@mui/material"
const NewGroup = () => {
  const[isImageUploading,setImageUploading]=useState(false);
  const[groupName,setGroupName]=useState('');
  return (
    <div className='w-full h-full bg-[#e5fddd]'>
       <div className='flex items-center space-x-10 bg-[#3e226e] text-white pt-16 px-10 pb-5'>
       <BsArrowLeft className='cursor-pointer text-2xl font-bold'/>
       <p className='text-xl font-semibold'>New Group</p>
       </div>
         <div className='flex flex-col justify-center items-center my-12 ' >
          <label htmlFor="imgInput" className='relative '>
            <img src="https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            {isImageUploading && <CircularProgress className='absolute top-[5rem] left-[6rem]'/>}
          </label>
          <input type="file" id='imgInput' className='hidden'  onChange={()=>console.log("imageonChange")}/>
         </div>
         <div className='w-full flex justify-between items-center py-2  px-5'>
          <input className='w-full outline-none border-b-2 border-[#3e226e] px-2 bg-transparent' placeholder='Group Subject' value={groupName} type="text" onChange={(e)=>setGroupName(e.target.value)} />
            
         </div>
         {groupName && <div className='py-10 bg-clate-200 flex items-center justify-center'>
            <Button> <div className='bg-[#3e226e] rounded-full'>
                 <BsCheck2 className='text-white font-bold text-3xl '/>
              </div></Button>
          </div>}
      
    </div>
  )
}

export default NewGroup
