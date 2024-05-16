import React,{useState} from "react";
export default function Ex5() {
  const [inputInfo,setInput]=useState("");
    const changeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value);
    }
  return (
    <div>
      <label htmlFor="Ex5">Dữ liệu người dùng nhập: {inputInfo}</label>
      <input type="text" className="Ex5" onChange={changeInput} />
    </div>
  );
}