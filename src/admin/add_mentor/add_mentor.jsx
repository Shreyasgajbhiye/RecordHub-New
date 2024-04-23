import React, { useEffect, useState } from 'react';
import './add_mentor.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddMentor = () => {
    const users = {
        fname: "",
        mname: "",
        lname: "",
        email: "",
        password: "",
        batch: ""
    };
    
    const [user, setUser] = useState(users);
    const navigate = useNavigate();
    
    const inputHandler = (e) => {
        const { name, value } = e.target;
        
        // If the target is the select element, append the selected option
        if (e.target.tagName === 'SELECT') {
            const selectedOption = e.target.value;
            setUser({ ...user, [name]: selectedOption });
            console.log({ ...user, [name]: selectedOption }); // Log the updated user object
        } else {
            setUser({ ...user, [name]: value });
            console.log({ ...user, [name]: value }); // Log the updated user object
        }
    };
    
    useEffect(()=>{
        const token = localStorage.getItem("token");
        console.log("Token: ", token);
    }, []);
    
    const submitForm = async (e, token) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/Admin/addMentor", user, {
            headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log(response);
            toast.success(response.data.msg, { position: "top-right" });
            navigate("/admin");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='addUser'>
            <Link to={"/"}>Back</Link>
            <h3>Add new user</h3>
            <form className='addUserForm' onSubmit={(e) => submitForm(e, localStorage.getItem("token"))}>
                <div className='inputGroup'>
                    <label htmlFor='fname'>First name</label>
                    <input type='text' id='fname' onChange={inputHandler} name='fname' autoComplete='off' placeholder='First name' />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='mname'>Middle name</label>
                    <input type='text' id='mname' onChange={inputHandler} name='mname' autoComplete='off' placeholder='Middle name' />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='lname'>Last name</label>
                    <input type='text' id='lname' onChange={inputHandler} name='lname' autoComplete='off' placeholder='Last name' />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' onChange={inputHandler} autoComplete='off' placeholder='Email' />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' onChange={inputHandler} autoComplete='off' placeholder='Password' />
                </div>
                <div className='inputGroup'>
                    <select name='batch' onChange={inputHandler}>
                        <option value='H4'>H4</option>
                        <option value='E4'>E4</option>
                        <option value='G4'>G4</option>
                    </select>
                </div>
                <div className='inputGroup'>
                    <button type='submit'>Add user</button>
                </div>
            </form>
        </div>
    );
};

export default AddMentor;
