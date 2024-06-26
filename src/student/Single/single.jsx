import React, { useEffect } from 'react'
import Slidebar from '../../components/Slidebar/Slidebar2'
import './single.scss'
import Navbar from '../../components/Navbar/navbar'
import Card from '../../components/Cards/card'
import { useNavigate } from 'react-router-dom'

function Single() {
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
  
    if(token===""||token===null||token===undefined){
      navigate('/unauth');
    }
  
  }, [])
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

export default Single
