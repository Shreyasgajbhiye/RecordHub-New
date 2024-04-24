import React, { useEffect, useState } from 'react';
import "./home.scss";
import Slidebar from '../../components/Slidebar/Slidebar2';
import Navbar from '../../components/Navbar/navbar';
import Card from '../../components/Cards/card';
import Featured from '../../components/featured/featured';
import Chart from '../../components/chart/chart';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const [studentsCount, setStudentsCount] = useState("0");

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      navigate('/unauth');
    } else {
      fetchStudentsCount(token);
    }
  }, [studentsCount]);

  const fetchStudentsCount = (token) => {
    axios.get('http://localhost:8000/api/Mentor/getAllStudents', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response)
      console.log(response.data.length)
      setStudentsCount(String(response.data.length));
    })
    .catch(error => {
      console.error('Error fetching students count:', error);
    });
  };

  return (
    <div className='home'>
      <>
        <Slidebar/>
        <div className='homeContainer'>
          <Navbar/>
          <div className='cards'> 
              <Card type="Students" count={studentsCount}/>
              <Card type="Achievement" count="30"/>
              {/* <Card type="Request" count="30"/> */}
              <Card type="Waiting" count="00"/>
          </div>
          <div className="charts">
              <Featured aspects={2/1}/>
              <Chart title={"Average Achievement"} aspects={3/1.3}/>
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;
