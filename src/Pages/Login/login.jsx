import React, { useState } from 'react'
import './login.scss'
import IMG from '../../assests/login.svg'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';import { colors } from '@mui/material';
function Login() {

  const credentials = {
    email:"",
    password:""
  }


  const [credential, setCredentials] = useState(credentials);

  const inputHandler = (e) => {
    const {name, value} = e.target;
    setCredentials({...credential, [name]:value});
    console.log(credential);
  }
  return (
    <div className='login'>
      <div className="loginContainer">
      <div className="left">
        <img src={IMG} alt="" className='img' />
      </div>
      <div className="right">
        <div className="container">
          <div className="header">
            <div className="text">Sign in</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <div className="imgIcon"><MailOutlineIcon sx={{color: "grey",fontSize:"22px", paddingTop:"3px"}}/></div>
              <input type="email" className='field' placeholder='Email' onChange={inputHandler} name='email'/>
            </div>
            <div className="input">
              <div className="imgIcon"><VisibilityOutlinedIcon sx={{color: "grey", fontSize:"23px", paddingTop:"3px"}}/></div>
              <input type="password" className='field' placeholder='Password' onChange={inputHandler} name='password'/>
            </div>
          </div>
          <div className="forgot-pass">
            forgot password? <span className='span'> click here</span>
          </div>
          <div className="submitContainer">
            <div className="submit">Student</div>
            <div className="submit">Mentor</div>
          </div>
          <div className="register">
            Don't have account? <span className='register-text'>Register now!</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login
