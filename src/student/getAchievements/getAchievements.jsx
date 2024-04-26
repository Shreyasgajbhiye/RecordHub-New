import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Slidebar from '../../components/Slidebar/Slidebar2';
import './getAchievements.scss';
import Navbar from '../../components/Navbar/navbar';
import img from '../../assests/6329.jpg'

function GetAchievements() {
  const { id } = useParams();
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8000/api/Student/getMyAchievements/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      setAchievements(response.data);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error('Error fetching achievements:', error);
    }
  };

  const baseUrl = 'http://localhost:8000/';

  return (
    <div className='home'>
      <>
        <Slidebar />
        <div className='homeContainer'>
          <Navbar />
          {loading ? ( 
            <div>Loading...</div>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'white', marginBottom: '10px ', paddingBottom: "10px" }}>
              {achievements.map((achievement, index) => (
                <div key={index} style={{ margin: '10px', width: '200px', height: '250px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
                  <h3>{achievement.name}</h3>

                  {/* Image */}
                  <img src={img} alt="Achievement" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                  <a style={{ paddingBottom: "10px" }} href={`http://localhost:8000/${achievement.pdf}`} target="_blank" rel="noopener noreferrer">View PDF</a>
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    </div>
  );
}

export default GetAchievements;
