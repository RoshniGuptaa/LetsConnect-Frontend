import React, { useState } from 'react'
import { BsArrowLeft, BsCheck2, BsPencil } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

export default function Profile({handleCloseOpenProfile}) {

    const[flag,setFlag]=useState();
    const [username,setUserName]=useState(null);
   const navigate=useNavigate() ;
   const handleNavigate=()=>{
       navigate(-1);
   }

   const handleFlag=()=>{
    setFlag(true)
   }

   //adding name to profile
   const handleCheckClick=()=>{
    setFlag(false)
   }

   const handleUserNameChange=(e)=>{
    setUserName(e.target.value)
   }
  return (
    <div className='w-full h-full bg-[#4a8083]'>
        <div className='flex item-center space-x-10 bg[#136770] text-white pt-16 px-10 pd-5'>
            <BsArrowLeft className='cursor-pointer text-2xl fint-bold' onClick={handleCloseOpenProfile}/>
            <p className='cursor-pointer foot-semibold'>Profile</p>
        </div>
        {/* update profile pic section */}
        <div className='flex flex-col justify-center items-center my-12'>
            <label htmlFor="imgInput">
                <img  className='rounded-full w-[15vw] h-[15vw] cursor-pointer' src="https://cdn.pixabay.com/photo/2022/10/31/20/27/lioness-7560708_640.jpg" alt="" />
            </label>
            <input type="file" id='imgInput' className='hidden' />
        </div>
        {/*name section  */}
        <div className='bg-[#bce8dd] px-3'>
           <p className='py-3'>Your name</p> 

          {!flag && <div className='w-full flex justify-between items-center'>
            <p className='py-3'>{username|| "username"}</p>
            <BsPencil onClick={handleFlag} className='cursor-pointer'/>
           </div>}
           {flag && <div className='w-full flex justify-between items-center'>
              <input className='w-[80%] outline-none border-b-2 border-blue-700 p-2 bg-[#bce8dd]' onChange={handleUserNameChange} type="text" placeholder='Enter your name' />
              <BsCheck2 className='cursor-pointer text-2xl' onClick={handleCheckClick}/>
            </div>}
        </div>
         <div className='px-3 my-5'>
            <p className='py-10'>This is not your username,this will be visible to your whatsapp connects</p>
         </div>
      
    </div>
  )
}
