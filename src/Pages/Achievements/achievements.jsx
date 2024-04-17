import React from 'react'
import './achievements.scss'
import Slidebar from '../../components/Slidebar/Slidebar2'
import Navbar from '../../components/Navbar/navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function Achievement() {
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");

    if(token===""||token===null||token===undefined){
      navigate('/unauth');
    }

  }, [])
  return (
    
    <div className='achievemets'>
      <Slidebar/>
      <div className="achievementsContainer">
        <Navbar/>
        <div className="Columns">
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            <div className="card">
              card
            </div>
            y
        </div>
      </div>
    </div>
  )
}

export default Achievement
