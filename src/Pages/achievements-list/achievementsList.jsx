import React, { useState, useEffect } from 'react';
import data from './data.json';
import './achievementsList.scss'

function AchievementsList({ apiUrl }) {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Set data from data.json file
    setJsonData(data);
  }, []);

  return (
    <div className='container'>
      <h2>Achievements List</h2>
      <p>API URL: {apiUrl}</p>
      <div className="subcontainer">
      <ul>
        {jsonData.map((item, index) => (
          <li key={index}>
            <div className="list">
            <div>
              <strong>First Name:</strong> {item.fname}
            </div>
            <div>
              <strong>Last Name:</strong> {item.lname}
            </div>
            <div>
              <strong>Email:</strong> {item.email}
            </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default AchievementsList;
