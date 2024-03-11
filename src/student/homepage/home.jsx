import React from 'react'
import Slidebar from '../../components/Slidebar/Slidebar2'
import Navbar from '../../components/Navbar/navbar'
import Card from '../../components/Cards/card'
import './home.scss'
function StudentHome() {
  return (

    <div className='home'>
      <>
      <Slidebar/>
      <div className="studentHomeContainer">
        <Navbar/>
        <div className='cards'> 
            <Card type="Batch"/>
            <Card type="Achievement"/>
            <Card type="Bonafide"/>
        </div>
      </div>
      </>
    </div>
  )
}

export default StudentHome
