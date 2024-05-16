import React, { useState } from 'react'

export default function Ex4() {
    const [textColor,setTextColor]=useState("black");
    function handleChangeColor(){
        setTextColor(textColor==='black'?'white':'black');
        console.log(textColor);
        
    }
  return (
    <div>
        <p style={{color:textColor}}>Tiêu đề văn bản</p>
        <button onClick={handleChangeColor}>{textColor==='black'?'Show':'Hide'}</button>
    </div>
  )
}