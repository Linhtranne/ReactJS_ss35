import React, { useState } from "react";

export default function Ex6() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
  }
  return (
    <div>
      <p>
        Bạn đã click {count} lần:
      </p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}