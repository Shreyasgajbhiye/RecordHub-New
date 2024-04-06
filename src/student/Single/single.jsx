import React from 'react'
import Slidebar from '../../components/Slidebar/Slidebar2'
import './single.scss'
import Navbar from '../../components/Navbar/navbar'
import Card from '../../components/Cards/card'
import './single.scss'
function single() {
  return (
    <div className='home'>
      <>
      <Slidebar/>
      <div className='homeContainer'>
        <Navbar/>
        <div className='cards'> 
            <Card type="Post"/>
            <Card type="Get"/>
            <Card type="Apply-Bonafide"/>
        </div>  
      </div>
      </>
    </div>
  )
}

export default single
