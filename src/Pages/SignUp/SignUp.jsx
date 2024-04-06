import React, { useState } from 'react'
import IMG from '../../assests/login.svg'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
function SignUp() {

  const credentials = {
    name:"",
    email:"",
    password:"",
    year:"2"
  }

  const navigate = useNavigate();

  const [credential, setCredentials] = useState(credentials);

  const inputHandler = (e) => {
    const {name, value} = e.target;
    setCredentials({...credential, [name]:value});
    console.log(credential);
  }

  const submitForm = async  (e) =>{
    e.preventDefault();
    //axios is use to communicate with api
    await axios.post("http://localhost:8000/api/signup", credential)
    .then((response)=>{
        console.log(response);
        // toast.success(response.data.msg, {position:"top-right"})   //in "inspect" of brower , the response is in data->msg
        navigate("/")    // navigate to home, it is a hook in [react-router-dom]
    }).catch(error => console.log(error))
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
            <div className="text">Register as Student</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <div className="imgIcon"><MailOutlineIcon sx={{color: "grey",fontSize:"22px", paddingTop:"3px"}}/></div>
              <input type="text" className='field' placeholder='Name' onChange={inputHandler} name='name'/>
            </div> 
            {/* <div className="input">
              <div className="imgIcon"><MailOutlineIcon sx={{color: "grey",fontSize:"22px", paddingTop:"3px"}}/></div>
              <input type="text" className='field' placeholder='Last name' onChange={inputHandler} name='lname'/>
            </div>  */}
            <div className="input">
              <div className="imgIcon"><MailOutlineIcon sx={{color: "grey",fontSize:"22px", paddingTop:"3px"}}/></div>
              <input type="text" className='field' placeholder='Email' onChange={inputHandler} name='email'/>
            </div> 
            <div className="input">
              <div className="imgIcon"><MailOutlineIcon sx={{color: "grey",fontSize:"22px", paddingTop:"3px"}}/></div>
              <input type="" className='field' placeholder='Year' onChange={inputHandler} name='year'/>
            </div> 
            <div className="input">
              <div className="imgIcon"><MailOutlineIcon sx={{color: "grey",fontSize:"22px", paddingTop:"3px"}}/></div>
              <input type="password" className='field' placeholder='Password' onChange={inputHandler} name='password'/>
            </div> 
            {/* <div className="input">
              <div className="imgIcon"><MailOutlineIcon sx={{color: "grey",fontSize:"22px", paddingTop:"3px"}}/></div>
              <input type="password" className='field' placeholder='Confirm Password' onChange={inputHandler} name='password1'/>
            </div>  */}
            
            
              
          </div>
          
          <div className="submitContainer">
            <div className="submit" onClick={submitForm}>Register</div>
          </div>
          <div className="register">
            Login <span className='register-text'>Now!</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SignUp
