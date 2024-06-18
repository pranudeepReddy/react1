import React, { useState } from "react";

export default function Input() {
  const [userName, setUserName] = useState("");
  function submit() {
    console.log("this is me", userName);
  }
  function hand(p) {
    console.log(p.target.value);
    setUserName(p.target.value);
  }
  return (
    <div>
      <p>enter name: {userName}</p>
      <input onChange={hand} placeholder="name" type="text"></input>
      <button onClick={submit}>submit</button>
    </div>
  );
}
