import React, { useState } from 'react'

export default function Ex3() {
    const [textColor,setTextColor]=useState("black");
    function handleChangeColor(){
        setTextColor(textColor==='black'?'white':'black');
        console.log(textColor);
        
    }
  return (
    <div>
        <p style={{color:textColor}}>Tiêu đề văn bản</p>
        <button onClick={handleChangeColor}>Đổi màu</button>
    </div>
  )
}