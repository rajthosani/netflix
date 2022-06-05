import { useContext, useState } from "react";
import {useDispatch} from "react-redux";
import { setUser } from "../../context/UserActions";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import { loginuser } from "../../service";

import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();
  let data={email,password};
  const navigate=useNavigate();

  
  

  const handleLogin = async(e) => {
    e.preventDefault();
    //let data={email,password};
    //const res=await axios.post('/auth/login',data);
    const res= await loginuser(email,password);
    dispatch(setUser(res?.data));
    navigate("/");

    
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="containerlogin">
        <form className="form">
          <h1>Sign In</h1>
          <input className="input"
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className="input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span className="span">
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}