import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setshowLogin}) => {
    const[currState,setcurrState]=useState("signup")
  return (
    <div className='login-popup'> 
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />

        </div>
        <div className="login-popup-inputs">
             {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
            
            <input type="email"  placeholder='Your Email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continueing , i agree to the terms and conditions and privacy policy</p>
        </div>
        {currState==="Login"?
        <p>Create new account? <span onClick={()=>setcurrState("Sign up")}>Click here</span></p>
    :<p>Already have an account? <span onClick={()=>setcurrState("Login")}>Login here</span></p>}
        
        

      </form>
    </div>
  )
}

export default LoginPopup