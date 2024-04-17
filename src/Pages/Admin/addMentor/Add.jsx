import React, {useState} from 'react'
import './add.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const Add = () => {

    const users = {
        fname :"",
        lname:"",
        email:"",
        password:""
    }

    const [user, setUser] = useState(users);

    const navigate = useNavigate();
    
    const inputHandler = (e) =>{
        // e.target will return name and value
        const {name, value} = e.target;
        setUser({...user, [name]:value});
        console.log(user);
    }

    const submitForm = async  (e) =>{
        e.preventDefault();
        //axios is use to communicate with api
        await axios.post("http://localhost:8000/api/create", user)
        .then((response)=>{
            console.log(response);
            toast.success(response.data.msg, {position:"top-right"})   //in "inspect" of brower , the response is in data->msg
            navigate("/")    // navigate to home, it is a hook in [react-router-dom]
        }).catch(error => console.log(error))
    }
  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Add new user</h3>
        <form className='addUserForm' onSubmit={''}>
            <div className='inputGroup'>
                <label htmlFor='fname'>First name</label>
                <input type='text' id='fname' onChange={inputHandler} name='fname' autoComplete='off' placeholder='First name'></input>
            </div>
            <div className='inputGroup'>
                <label htmlFor='lname'>Last name</label>
                <input type='text' id='lname'  onChange={inputHandler} name='lname' autoComplete='off' placeholder='Last name'></input>
            </div>
            <div className='inputGroup'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' onChange={inputHandler} autoComplete='off' placeholder='Email'></input>
            </div>
            <div className='inputGroup'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' onChange={inputHandler} autoComplete='off' placeholder='password'></input>
            </div>
            
            <div className='inputGroup'>
                <button type='submit'>Add user</button>
            </div>
            
        </form>
    </div>
  )
}

export default Add