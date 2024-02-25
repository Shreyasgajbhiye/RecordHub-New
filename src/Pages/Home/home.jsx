import React from 'react'
import "./home.scss"
import Slidebar from '../../components/Slidebar/Slidebar2'
import Navbar from '../../components/Navbar/navbar'
import Card from '../../components/Cards/card'
import Featured from '../../components/featured/featured'
import Chart from '../../components/chart/chart'
function Home() {
  return (
    <div className='home'>
      <>
      <Slidebar/>
      <div className='homeContainer'>
        <Navbar/>
        <div className='cards'> 
            <Card type="Students"/>
            <Card type="Achievement"/>
            <Card type="Request"/>
            <Card type="Waiting"/>
        </div>
        <div className="charts">
            <Featured aspects={2/1}/>
            <Chart title={"Average Achievement"} aspects={3/1.3}/>
        </div>
      </div>
      </>
    </div>
  )
}

export default Home
