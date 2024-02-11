import React from 'react'
import './achievements.scss'
import Slidebar from '../../components/Slidebar/slidebar'
import Navbar from '../../components/Navbar/navbar'
function Achievement() {
  return (
    <div className='achievemets'>
      <Slidebar/>
      <div className="achievementsContainer">
        <Navbar/>
      </div>
    </div>
  )
}

export default Achievement
