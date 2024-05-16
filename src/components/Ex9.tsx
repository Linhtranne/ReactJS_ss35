import React, { useState, MouseEvent } from 'react';

export default function Ex9() {
  const [gender, setGender] = useState<string>("");

  function handleSubmit(e: MouseEvent<HTMLInputElement>) {
    setGender(e.currentTarget.value);
  }

  return (
    <div>
      <p>Gender: {gender}</p>
      <form action="">
        <input 
          onClick={handleSubmit} 
          type="radio" 
          className="gender" 
          name="gender" 
          value="Nam" 
        />
        <label htmlFor="male">Nam</label>
        <br />
        <input 
          onClick={handleSubmit} 
          type="radio" 
          className="gender" 
          name="gender" 
          value="Nữ" 
        />
        <label htmlFor="female">Nữ</label>
        <br />
        <input 
          onClick={handleSubmit} 
          type="radio" 
          className="gender" 
          name="gender" 
          value="Khác" 
        />
      </form>
    </div>
  );
}