import React, { useState } from "react";

export default function List() {
  const [name, setName] = useState([
    {
      empname: " raju",
      empid: 20,
      city: "hyd",
    },
    {
      empname: " ravi",
      empid: 21,
      city: "hyd",
    },
    {
      empname: " raku",
      empid: 25,
      city: "gwl",
    },
  ]);
  return (
    <div>
      {name.map((emp) => (
        <div>
          <p>name : {emp.empname}</p>
          <p>id : {emp.empid}</p>
          <p>city : {emp.city}</p>
        </div>
      ))}
    </div>
  );
}
