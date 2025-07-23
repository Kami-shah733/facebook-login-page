import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Facebook from "./flogin";
import Loggedin from "./loggedin";
import ForgotPassword from "./forgotpassword";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Facebook/>}/>
    <Route path="/Loggedin" element={<Loggedin/>}/>
    <Route path="/forgotpassword" element={<ForgotPassword/>}/>

  </Routes>
  </BrowserRouter>
  );
}

export default App;
