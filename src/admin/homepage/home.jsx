import React, { useEffect } from 'react'
import Slidebar from '../../components/Slidebar/Slidebar2'
import './homepage.scss'
import Navbar from '../../components/Navbar/navbar'
import Card from '../../components/Cards/card'
import { useNavigate } from 'react-router-dom'
import GetMentor from '../get_all_mentor/get_mentor'

function HomePage() {
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
        {/* <div className='cards'> 
            <Card type="Add mentor"/>
            <Card type="Get all mentor"/>
            <Card type="Add new batch"/>
        </div> */}
        <GetMentor/>  
      </div>
      </>
    </div>
  )
}

export default HomePage
