import React from 'react'

const  MessageCard=({isReqUsermessage,content})=> {
  return (
    <div className={`py-2 px-2 rounded-md max-w-[50%] ${isReqUsermessage?"self-start bg-[#9cd9de]":"self-end bg-[#11a2b0]"}`}>
     <p>{content}</p> 
    </div>
  )
}

export default MessageCard
