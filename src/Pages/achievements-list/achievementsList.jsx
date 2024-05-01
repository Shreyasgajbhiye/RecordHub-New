// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';
// // import './achievementsList.scss';

// // function AchievementsList({ apiUrl, category }) {
// //   const [students, setStudents] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const token = localStorage.getItem('token'); // Get token from local storage
// //         const response = await axios.get("http://localhost:8000/api/Admin/getAllStudents", {
// //           headers: {
// //             'Authorization': `Bearer ${token}` // Include token in the request headers
// //           }
// //         });
// //         setStudents(response.data); // Set fetched data to state
// //         console.log(response.data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, [apiUrl]); // Add apiUrl to dependencies array to refetch data when apiUrl changes

// //   return (
// //     <div className='container'>
// //       <h2>Achievements List</h2>
// //       <p>API URL: {apiUrl}</p>
// //       <p>Category: {category}</p>
// //       <div className="subcontainer">
// //         <ul>
// //           {students.map((student, index) => (
// //             <li key={index}>
// //               <Link to={{ pathname: `/achievementSingle/${student._id}`, state: { apiUrl } }} className="list-item-link">
// //                 <div className="list">
// //                   <div>
// //                     <strong>First Name:</strong> {student.fname}
// //                   </div>
// //                   <div>
// //                     <strong>Last Name:</strong> {student.lname}
// //                   </div>
// //                   <div>
// //                     <strong>ID:</strong> {student._id}
// //                   </div>
// //                 </div>
// //               </Link>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AchievementsList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function AchievementsList() {
//   const [achievements, setAchievements] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     // Retrieve token from localStorage
//     const token = localStorage.getItem('token');

//     // Make the API call
//     console.log(token)
//     axios.get('http://localhost:8000/api/Admin/getAllStudents', {
//       headers: {
//         'Authorization': `bearer ${token}`
//       }
//     })
//     .then(response => {
//       setAchievements(response.data);
//       setLoading(false);
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//       setError(error);
//       setLoading(false);
//     });
//   }, []); // Empty dependency array means this effect will only run once after the initial render

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Achievements List</h1>
//       <ul>
//         {achievements.map(achievement => (
//           <li key={achievement._id}>Name: {achievement.fname} {achievement.lname}, ID: {achievement._id}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AchievementsList;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './achievementsList.scss'; // Import your SCSS file for styling
import Navbar from "../../components/Navbar/navbar";
import Slidebar from "../../components/Slidebar/Slidebar2";
const AchievementsList = () => {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);

    useEffect(() =>{
        const fetchData = async() =>{
            const token = localStorage.getItem("token");
            console.log("Token: ", token)
            if(!token){
                alert("Un Authorized!!");
                return;
            }
            try {
                const response = await axios.get("http://localhost:8000/api/Mentor/getAllAchievements", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setStudents(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    },[])

    const handleView = (id) => {
        navigate(`/AchievementSingle/${id}`);
    };

    return (
        <div className='home'>
      <>
        <Slidebar/>
        <div className='homeContainer'>
          <Navbar/>
          
        <div className="students-container">
            <div className="students-cards">
                {students.map((student, index) => (
                    <div key={student._id} className="student-card">
                        <h3>{student.fname} {student.lname}</h3>
                        <p>ID: {student._id}</p>
                        <div className="student-actions">
                            <Link to={''} className="view-button" onClick={() => handleView(student._id)}>View</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
      </>
    </div>
    )
}

export default AchievementsList;
