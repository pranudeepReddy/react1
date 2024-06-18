// import { useState } from "react";
// import Props from "./Props";
// import List from "./List";
// import Input from "./Input"
// import Vech from "./Vech";
// import Movies from "./Movies";
// import UserData from "./UserData";

// function App() {
//   const [name, setName] = useState("ReactJS");
//   const [year, setYear] = useState(2013);
//   return (
//     <div>
//       <UserData/>
//       {/* <Movies/> */}
//       {/* <Vech/> */}
//       {/* <Input/>
//       <List/> */}
//             {/* <p>iam ppr</p>
//       <h1>hello ppr</h1>
//       <p>{name}is bulit in {year}</p>
//       <Props empName="raju" empId="19"/>
//       <Props empName="ravi" empId="20"/>
//       <Props empName="raku" empId="21"/> */}
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import About from './About'
import Contact from './Contact'

export default function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
      
    
  )
}
