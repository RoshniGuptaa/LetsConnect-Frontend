import React, { useEffect, useState } from 'react'

const ProgressBar = ({index,activeIndex}) => {
    const isActive=index=activeIndex;
    const [progress,setProgress] = useState()

    useEffect(()=>{
       
    },[])
  return (
    <div className={`progress-bar-container ${isActive?"active":""}`} >
       <div className={`${isActive?"progress-bar":""}`}
        style={{width:`${progress}%`}}
       >

       </div>
    </div>
  )
}

export default PregressBar
