import React, { useState, useEffect } from 'react';
import './achievements.scss';
import Slidebar from '../../components/Slidebar/Slidebar2';
import Navbar from '../../components/Navbar/navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AchievementsList from '../../Pages/achievements-list/achievementsList'; 

function Achievement() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('tech'); // Default category is tech
  const [apiBaseUrl, setApiBaseUrl] = useState('https://8000/tech'); // Default base URL for tech
  const [selectedAchievementsUrl, setSelectedAchievementsUrl] = useState(null); // State to store selected achievements URL

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token === "" || token === null || token === undefined) {
      navigate('/unauth');
    }
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);

    // Dynamically set base URL based on the selected category
    const newBaseUrl = selectedCategory === 'tech' ? 'https://8000/tech' : 'https://8000/non-tech';
    setApiBaseUrl(newBaseUrl);

    // Log the base URL to console
    console.log("Base URL:", newBaseUrl);
  };

  const handleCardClick = async (cardName) => {
    try {
      const token = localStorage.getItem("token");
      const apiUrl = `${apiBaseUrl}/${cardName}`;

      // Log the full API URL before making the call
      console.log("API URL:", apiUrl);

      setSelectedAchievementsUrl(apiUrl); // Set selected achievements URL

      const response = await axios.get(apiUrl, { // Use the dynamically set API URL
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Handle response data here
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className='achievemets'>
      <Slidebar/>
      <div className="achievementsContainer">
        <Navbar/>
        
        <div className="container">
          <div className='radioContainer'>
            <input className="cont" type="radio" name="category" value="tech" checked={category === 'tech'} onChange={handleCategoryChange} /> TECH
            <input type="radio" className="cont"  name="category" value="nontech" checked={category === 'nontech'} onChange={handleCategoryChange} /> NON-TECH
          </div>

          <div className="flex">
            <div className="card" onClick={() => handleCardClick('FE')}>
              <div className="head">FE</div>
            </div>
            <div className="card" onClick={() => handleCardClick('SE')}>
              <div className="head">SE</div>
            </div>
            <div className="card" onClick={() => handleCardClick('TE')}>
              <div className="head">TE</div>
            </div>
            <div className="card" onClick={() => handleCardClick('BE')}>
              <div className="head">BE</div>
            </div>
          </div>
        </div>
      {selectedAchievementsUrl && <AchievementsList apiUrl={selectedAchievementsUrl} />} {/* Render AchievementsList component */}
      </div>
    </div>
  );
}

export default Achievement;
