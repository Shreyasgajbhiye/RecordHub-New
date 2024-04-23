import React, { useState } from 'react';
import './login.scss';
import IMG from '../../assests/login.svg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
function Login() {
  const credentials = {
    email:"",
    password:""
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, []); 

  const navigate = useNavigate();
  const [credential, setCredentials] = useState(credentials);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({ ...prevState, [name]: value }));
    console.log({ ...credential, [name]: value }); // Log the updated state
  };

  const submitForm = async (e) => {
    e.preventDefault();
    //axios is used to communicate with api
    await axios.post("http://localhost:8000/api/Mentor/login", credential)
      .then((response) => {
        console.log(response);
        toast.success("Login Successful", { position: "top-right" });
        localStorage.setItem("token", response.data.token);
        console.log(localStorage.getItem("token"));
        navigate("/home");    
      })
      .catch(error => {
        console.log(error);
        if (error.response && error.response.data) {
          toast.error(error.response.data.message, { position: "top-right" });
        } else {
          toast.error("An error occurred", { position: "top-right" });
        }
      });
      
    
  };

  const LoginStudent = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/Student/login", credential)
      .then((response) => {
        console.log(response);
        toast.success(response.data._id, { position: "top-right" });
        localStorage.setItem("token", response.data.token);
        console.log(localStorage.getItem("token"));

        navigate(`/student/${response.data._id}`);    
      })
      .catch(error => {
        console.log(error);
        if (error.response && error.response.data) {
          toast.error(error.response.data.message, { position: "top-right" });
        } else {
          toast.error("An error occurred", { position: "top-right" });
        }
      });
  };
  const LoginAdmin = async (e) => {
    e.preventDefault();
    //axios is used to communicate with api
    await axios.post("http://localhost:8000/api/Admin/login", credential)
      .then((response) => {
        console.log(response);
        toast.success(response.data._id, { position: "top-right" });
        localStorage.setItem("token", response.data.token);
        console.log(localStorage.getItem("token"));

        navigate("/admin");    // navigate to home, it is a hook in [react-router-dom]
      })
      .catch(error => {
        console.log(error);
        if (error.response && error.response.data) {
          toast.error(error.response.data.message, { position: "top-right" });
        } else {
          toast.error("An error occurred", { position: "top-right" });
        }
      });
  };


  const submitFormStudent = async (e) => {
    e.preventDefault();
    navigate(`/student/1234`);
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
              <div className="text">Sign in</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <div className="imgIcon"><MailOutlineIcon sx={{ color: "grey", fontSize: "22px", paddingTop: "3px" }} /></div>
                <input type="email" className='field' placeholder='Email' onChange={inputHandler} name='email' />
              </div>
              <div className="input">
                <div className="imgIcon"><VisibilityOutlinedIcon sx={{ color: "grey", fontSize: "23px", paddingTop: "3px" }} /></div>
                <input type="password" className='field' placeholder='Password' onChange={inputHandler} name='password' />
              </div>
            </div>
            <div className="forgot-pass">
              forgot password? <span className='span'> click here</span>
            </div>
            <div className="submitContainer">
              <div className="submit" onClick={LoginStudent}>Student</div>
              <div className="submit" onClick={submitForm}>Mentor</div>
              <div className="submit" onClick={LoginAdmin}>Admin</div>
            </div>
            <div className="register">
              Don't have account?
              <Link to={'/register'} className=' register-text'> Register now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
