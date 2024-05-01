// // Achievement.jsx
// import React, { useState, useEffect } from 'react';
// import './achievements.scss';
// import Slidebar from '../../components/Slidebar/Slidebar2';
// import Navbar from '../../components/Navbar/navbar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import AchievementsList from '../../Pages/achievements-list/achievementsList'; 

// function Achievement() {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState('tech'); // Default category is tech
//   const [apiBaseUrl, setApiBaseUrl] = useState('https://8000/tech'); // Default base URL for tech
//   const [selectedAchievementsUrl, setSelectedAchievementsUrl] = useState(null); // State to store selected achievements URL

//   useEffect(() => {
//     let token = localStorage.getItem("token");

//     if (token === "" || token === null || token === undefined) {
//       navigate('/unauth');
//     }
//   }, []);

//   useEffect(() => {
//     const newBaseUrl = selectedCategory === 'tech' ? 'https://8000' : 'https://8000';
//     setApiBaseUrl(newBaseUrl);

//     // Log the base URL to console
//     console.log("Base URL:", newBaseUrl);
//   }, [selectedCategory]);

//   const handleCardClick = async (cardName) => {
//     try {
//       const token = localStorage.getItem("token");
//       const apiUrl = `${apiBaseUrl}/${cardName}`;

//       // Log the full API URL before making the call
//       console.log("API URL:", apiUrl);

//       setSelectedAchievementsUrl(apiUrl); // Set selected achievements URL

//       const response = await axios.get("http://localhost:8000/api/Admin/getAllStudents", {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       // Handle response data here
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div className='achievemets'>
//       <Slidebar/>
//       <div className="achievementsContainer">
//         <Navbar/>
        
//         <div className="container">
//           <div className='categoryContainer'>
//             <button className={`categoryButton ${selectedCategory === 'tech' ? 'active' : ''}`} onClick={() => setSelectedCategory('tech')}>TECH</button>
//             <button className={`categoryButton ${selectedCategory === 'nontech' ? 'active' : ''}`} onClick={() => setSelectedCategory('nontech')}>NON-TECH</button>
//           </div>

//           <div className="flex">
//             <div className="card" onClick={() => handleCardClick('FE')}>
//               <div className="head">FE</div>
//             </div>
//             <div className="card" onClick={() => handleCardClick('SE')}>
//               <div className="head">SE</div>
//             </div>
//             <div className="card" onClick={() => handleCardClick('TE')}>
//               <div className="head">TE</div>
//             </div>
//             <div className="card" onClick={() => handleCardClick('BE')}>
//               <div className="head">BE</div>
//             </div>
//           </div>
//         </div>
//         {selectedAchievementsUrl && <AchievementsList apiUrl={selectedAchievementsUrl} category={selectedCategory} />}
//       </div>
//     </div>
//   );
// }

// export default Achievement;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/navbar';
import Slidebar from '../../components/Slidebar/Slidebar2';
import img from '../../assests/6329.jpg';

const Achievement = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const getIdFromUrl = () => {
    const urlParts = window.location.pathname.split('/');
    return urlParts[urlParts.length - 1]; // Assuming id is the last part of the URL
  };
  const params = getIdFromUrl();

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        // Retrieve token from local storage
        const token = localStorage.getItem('token');
        // console.log(token)
        const response = await axios.get(
          `http://localhost:8000/api/Mentor/getAchievementsById/${params}`,
          {
            headers: {
              // Include authorization header with token
              'Authorization': `Bearer ${token}`,
            }
          }
        );
        console.log(response.data)
        setAchievements(response.data);
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error('Error fetching achievements:', error);
      }
    };

    fetchAchievements();
  }, [params]);

  const baseUrl = 'http://localhost:8000/';

  return (
    <div className='home'>
      <>
        <Slidebar />
        <div className='homeContainer'>
          <Navbar />
          <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'white', marginBottom: '10px ', paddingBottom: "10px" }}>
            {loading ? (
              <p>Loading...</p>
            ) : achievements.length === 0 || achievements === "" ? (
              <p>No record found</p>
            ) : (
              achievements.map((achievement, index) => (
                <div key={index} style={{ margin: '10px', width: '200px', height: '250px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
                  <h3>{achievement.name}</h3>
                  {/* Image */}
                  <img src={img} alt="Achievement" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                  {achievement.pdf && (
                    <a style={{ paddingBottom: "10px" }} href={`http://localhost:8000/${achievement.pdf}`} target="_blank" rel="noopener noreferrer">View PDF</a>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default Achievement;
