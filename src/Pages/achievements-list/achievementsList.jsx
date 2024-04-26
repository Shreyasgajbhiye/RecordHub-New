import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from './data.json';
import './achievementsList.scss';

function AchievementsList({ apiUrl, category }) {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Simulating fetching data from data.json
    // In a real application, you would fetch data from an API
    setJsonData(data);
  }, []);

  return (
    <div className='container'>
      <h2>Achievements List</h2>
      <p>API URL: {apiUrl}</p>
      <p>Category: {category}</p>
      <div className="subcontainer">
        <ul>
          {jsonData.map((item, index) => (
            <li key={index}>
              <Link to={{ pathname: `/achievementSingle/${item._id}`, state: { apiUrl } }} className="list-item-link">
                <div className="list">
                  <div>
                    <strong>First Name:</strong> {item.firstName}
                  </div>
                  <div>
                    <strong>Last Name:</strong> {item.lastName}
                  </div>
                  <div>
                    <strong>Email:</strong> {item.email}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AchievementsList;
