import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './get_mentor.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const GetMentor = () => {

    const navigate = useNavigate();
    const [mentors, setMentors] = useState([]);
    useEffect(() =>{
        const token = localStorage.getItem("token");
        console.log("Token: ", token)
        if(!token){
            //
            alert("Un Authorized!!");
        }
        const fetchData = async() =>{
            try {
                const response = await axios.get("http://localhost:8000/api/Admin/getAllMentors", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                // Do something with the response data
                //console.log(response.data);
                setMentors(response.data)
                console.log(response.data)
            } catch (error) {
                // Handle errors
                console.error("Error fetching data:", error);
            }
        }
        fetchData()
    },[])

    return (
        <div className="userTable">
            {/* <div className="" onClick={navigate('/addMentor')}>Add user</div> */}
         
            <Link to={"/addMentor"} className="addButton">Add user</Link>  
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        {/* <th>{mentors.data._id}</th> */}
                        <th>fname</th>
                        <th>lname</th>
                        <th>email</th>
                        <th>batch</th>
                        <th>action</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            mentors.map((mentor, index)=>{
                                return(
                                <tr key={mentor._id}>
                                    {/* <td>1.</td> */}
                                    <td>{mentor.fname}</td>
                                    <td>{mentor.lname}</td>
                                    <td>{mentor.email}</td>
                                    <td>{mentor.batch}</td>
                                    <td className="actionButton">
                                        <button>Delete</button>
                                        <Link to={"/edit"}>Edit</Link>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
            </table>
        </div>
    )
}

export default GetMentor