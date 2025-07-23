import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"; 
import ForgotPassword from './forgotpassword';


const Facebook = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();

  const emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  const handleLogin=()=>{
    if(!email||!password)
    {alert("Please enter both email and password");
    return;}
    if(!email===emailRegex.test(email))
    {
       alert("Please enter a valid Gmail address (e.g. example@gmail.com)");
    return;
    }
      if (!passwordRegex.test(password)) {
    alert("Password must be at least 8 characters, include one uppercase letter and one special character.");
    return;
  }
  navigate("/loggedin");

  
};
const handleForgot = () => {
navigate("/Forgotpassword");  
};
  return (
   <div className="bg-gray-100">
    <div className="w-full h-[100vh] flex flex-row justify-centre pt-35 pl-50 gap-20"> 
      <div className=" w-100 h-40  flex flex-col relative top-10" >
        <div className="w-70"><img src="facebook.svg" alt="logo" /></div>
        <div className="font-semibold font-pop pl-6 mb-10 w-100  font-serif ">Facebook helps you connect and share  with<br /> the people in your life.</div>
      </div>
      <div className=" w-90 h-100 rounded-2xl  flex flex-col justify-between">
        <div className="w-90 h-80 bg-white rounded-2xl pl-4 shadow-md">
          <div className="h-10 rounded w-73 justify-center items-center ml-3 mt-2.5 ">
            <input type="text" placeholder="Enter your email" class="placeholder-gray-400 border border-gray-300  focus:border-blue-800  focus:outline-none px-4 py-2 rounded  h-11 focus:bg-blue-50 w-77" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          </div>
          <div className="h-10 rounded w-73 justify-center items-center ml-3 mt-2.5 ">
            <input type="password"   id="passwordInput" placeholder="Enter password" class="placeholder-gray-400 border border-gray-300  focus:border-blue-800  focus:outline-none px-4 py-2 rounded w-77 h-11 focus:bg-blue-50"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            
          </div>
          <div className="h-11 rounded w-77 justify-center items-center ml-3 mt-2.5  bg-blue-600 text-white hover:bg-blue-500"><button  type='submit' className="font-bold px-30 py-2  " onClick={handleLogin}>LogIn</button></div>
          <div className="h-10 rounded w-77 justify-center items-center ml-5 mt-2.5 "><button className="text-sm px-20 py-2 mt-1 text-blue-600 hover:underline" type='submit' onClick={handleForgot} >Forgotten password?</button></div>
          <div className="w-70 border border-gray-300  ml-4.5 mt-6"></div>
          
          <div><button className="bg-green-500 rounded w-40 h-10 text-white font-serif ml-19 mt-6 hover:bg-green-600">create new account</button></div>
        </div>
        <div>
          <p className="text-sm ml-9 mb-9"><span className="font-semibold hover:underline">create a page</span> for a celebrity, brand or bsiness.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Facebook