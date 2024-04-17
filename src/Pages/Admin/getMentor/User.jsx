import React from "react";
import { Link } from "react-router-dom";
import './user.css';
const User = () => {
    return (
        <div className="userTable">
         {/* we cant use html link hence we use "Link from react dom" */}
         
            <Link to={"/add"} className="addButton">Add user</Link>  
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>SR. No</th>
                        <th>Mentor name</th>
                        <th>email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Shreyash</td>
                            <td>s@gmai.com</td>
                            <td className="actionButton">
                                <button>Delete</button>
                                <Link to={"/edit"}>Edit</Link>
                            </td>
                        </tr>
                    </tbody>
            </table>
        </div>
    )
}

export default User