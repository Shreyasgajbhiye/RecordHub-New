import React from 'react';
import { useParams } from 'react-router-dom';

function AchievementSingle({ apiUrl, category }) {
  const { id } = useParams(); // Get the _id parameter from the URL

  return (
    <div className='container'>
      <h2>Achievement Single</h2>
      <p>API URL: {apiUrl}</p>
      <p>Category: {category}</p>
      <p>_id Parameter: {id}</p> 
    </div>
  );
}

export default AchievementSingle;
