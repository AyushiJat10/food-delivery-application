import React, { createContext, useState ,useContext} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const LoginPopup = ({setshowLogin}) => {
    const[currState,setcurrState]=useState("Signup")
    const [data,setdata] = useState({
      name:"",
      email:"",
      password:""
    })
    const { url, setToken } = useContext(StoreContext);

    const onLogin = async(event)=>{
      event.preventDefault();
      console.log("Login button clicked");
      let newurl = url;
      if(currState==='Login'){
        newurl += "/api/user/login";
      }else{
        newurl += "/api/user/register"
      }
    const response = await axios.post(newurl,data);
    console.log("API Response:", response.data);
     if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
console.log("Stored token:", localStorage.getItem("token"));

        setshowLogin(false);
     }
    else{
      alert(response.data.message);
    }
    }
    const onchangehandler = (event)=>{
     const name = event.target.name;
     const value = event.target.value
     setdata(data=>({...data,[name]:value}));
    }
     
  return (
    <div className='login-popup'> 
      <form onSubmit={onLogin} className="login-popup-container">

  {/* LEFT IMAGE SIDE */}
  <div className="login-left">
    <img src={assets.login1} alt="login" />
  </div>

  {/* RIGHT FORM SIDE */}
  <div className="login-right">

    <div className="login-popup-title">
        <h2>{currState}</h2>
        <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
    </div>

    <div className="login-popup-inputs">
      {currState==="Login"?<></>:
        <input name='name' onChange={onchangehandler} value={data.name}
        type="text" placeholder='Your Name' required />
      }

      <input name='email' onChange={onchangehandler} value={data.email}
      type="email" placeholder='Your Email' required />

      <input name='password' onChange={onchangehandler} value={data.password}
      type="password" placeholder='Password' required />
    </div>

    <button type='submit'>
      {currState==="Sign up"?"Create Account":"Login"}
    </button>

    <div className="login-popup-condition">
      <input type="checkbox" required />
      <p>By continuing, I agree to the terms & privacy policy</p>
    </div>

    {currState==="Login" ?
      <p>Create new account? 
        <span onClick={()=>setcurrState("Sign up")}> Click here</span>
      </p>
      :
      <p>Already have an account?
        <span onClick={()=>setcurrState("Login")}> Login here</span>
      </p>
    }

  </div>

</form>

    </div>
  )
}

export default LoginPopup