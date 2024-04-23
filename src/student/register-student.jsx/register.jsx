import React, { useState } from 'react';
import './register.scss';
import IMG from '../../assests/login.svg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Link, useNavigate } from 'react-router-dom';
import PersonOutline from '@mui/icons-material/PersonOutline';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AccessTime } from '@mui/icons-material';

function Register() {
  const credentials = {
    fname:"",
    mname:"",
    lname:"",
    email:"",
    password:"",
    year:"",
    batch:""
  };

  const navigate = useNavigate();
  const [credential, setCredentials] = useState(credentials);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({ ...prevState, [name]: value }));
    //console.log({...credential, [name]: value}); // Log the updated state
  };

  const submitForm = async (e) => {
    e.preventDefault();
    // Get token from localStorage
    const token = localStorage.getItem("token");
  
    //axios is used to communicate with api
    await axios.post("http://localhost:8000/api/Student/signup", credential, {
      // Set the Authorization header with the token value from localStorage
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response);
      toast.success(response.data.message, { position: "top-right" });
      // localStorage.setItem("token", response.data.token);
      // console.log(localStorage.getItem("token"));
      //in "inspect" of browser, the response is in data->msg
      navigate('/');
    })
    .catch(error => console.log(error));
  };

  return (
    <div className='login'>
      <div className="loginContainer">
        <div className="left">
          <img src={IMG} alt="" className='img' />
        </div>
        <div className="right">
          <div className="container">
            <div className="header">
              <div className="text">Register as a Student</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <div className="imgIcon"><PersonOutline sx={{ color: "grey", fontSize: "22px", paddingTop: "3px" }} /></div>
                <input type="text" className='field' placeholder='First name' onChange={inputHandler} name='fname' />
              </div>
              <div className="input">
                <div className="imgIcon"><PersonOutline sx={{ color: "grey", fontSize: "22px", paddingTop: "3px" }} /></div>
                <input type="text" className='field' placeholder='Middle name' onChange={inputHandler} name='mname' />
              </div>
              <div className="input">
                <div className="imgIcon"><PersonOutline sx={{ color: "grey", fontSize: "22px", paddingTop: "3px" }} /></div>
                <input type="text" className='field' placeholder='Last name' onChange={inputHandler} name='lname' />
              </div>
              <div className="input">
                <div className="imgIcon"><MailOutlineIcon sx={{ color: "grey", fontSize: "22px", paddingTop: "3px" }} /></div>
                <input type="email" className='field' placeholder='Email' onChange={inputHandler} name='email' />
              </div>
              <div className="input">
                <div className="imgIcon"><VisibilityOutlinedIcon sx={{ color: "grey", fontSize: "23px", paddingTop: "3px" }} /></div>
                <input type="password" className='field' placeholder='Password' onChange={inputHandler} name='password' />
              </div>
              <div className="input">
                <div className="imgIcon"><AccessTime sx={{ color: "grey", fontSize: "23px", paddingTop: "3px" }} /></div>
                <input type="text" className='field' placeholder='Year' onChange={inputHandler} name='year' />
              </div>
              <div className="input">
                <div className="imgIcon"><AccessTime sx={{ color: "grey", fontSize: "23px", paddingTop: "3px" }} /></div>
                <input type="text" className='field' placeholder='Batch' onChange={inputHandler} name='batch' />
              </div>
            </div>
            
            <div className="submitContainer">
              <div className="submit" onClick={submitForm}>Register now</div>
            </div>
            <div className="register">
              Already have an account? 
              <Link to={'/'} className=' register-text'>  Login now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
