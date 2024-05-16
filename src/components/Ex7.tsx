import React, { useState } from 'react'

export default function BT7() {
    const [textNumber,setTextNumber]=useState(1);
    function changeText(e:React.ChangeEvent<HTMLTextAreaElement>) {
        setTextNumber(e.target.textLength)
    }
  return (
    <div>
        <textarea name="Ex7" id="" onChange={changeText}></textarea>
        <p>Số ký tự {textNumber}</p>
    </div>
  )
}