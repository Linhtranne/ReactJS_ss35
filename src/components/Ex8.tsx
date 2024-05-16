import React,{useState} from "react";
export default function BT8() {
  const [input,setInput]=useState("");
    const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setInput(e.target.value);
    }
  return (
    <div>
      <br />
      <h1>Bài 8</h1>
      <label htmlFor="Ex4">Tỉnh / Thành phố: {input}</label>
      <span></span>
      <br />
      <select name="Ex4" onChange={handleChange}>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Thanh Hóa">Thanh Hóa</option>
      </select>
    </div>
  );
}