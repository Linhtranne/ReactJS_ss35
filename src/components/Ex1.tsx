import { useState } from "react"

export default function Ex1() {
    const [name]=useState("Linhtranne");
    
  return (
    <div>
        <p>Họ và tên :{name}</p>
    </div>
  )
}