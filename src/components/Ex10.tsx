import React, { ChangeEvent, useState } from "react";

export default function Ex10() {
  const [hobbies, setHobbies] = useState([""]);
  function handlePick(_e: ChangeEvent<HTMLInputElement>, element: string) {
    const newHobbies = [...hobbies];
    if (hobbies.includes(element)) {
      newHobbies.splice(hobbies.indexOf(element), 1);
      setHobbies(newHobbies);
    } else {
      setHobbies([...newHobbies, element]);
    }
  }
  return (
    <div>
      <p>Sở thích [{hobbies.join(',')}]</p>
      <input
        type="checkbox"
        name="playing"
        onChange={(event) => {
          handlePick(event, "Đi chơi");
        }}
      />{" "}
      Đi chơi
      <input
        type="checkbox"
        name="coding"
        onChange={(event) => {
          handlePick(event, "Code");
        }}
      />{" "}
      Code
      <input
        type="checkbox"
        name="swimming"
        onChange={(event) => {
          handlePick(event, "Bơi lội");
        }}
      />{" "}
      Bơi lội
      <input
        type="checkbox"
        name="skipping"
        onChange={(event) => {
          handlePick(event, "Nhảy dây");
        }}
      />{" "}
      nhảy dây
    </div>
  );
}