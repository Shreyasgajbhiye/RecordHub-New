import React from 'react'
import './single.scss'
import Slidebar from '../../components/Slidebar/Slidebar2'
import Navbar from '../../components/Navbar/navbar'
import Card from '../../components/Cards/card'
import Featured from '../../components/featured/featured'
import CGPA from './cgpaChart/cgpaChart'
function Single() {
  return (
    <div className='single'>
        <Slidebar/>
        <div className="singleContainer">
          <Navbar/>
          <div className="top">
            <div className="left">
              <h1 className='title'>Student info</h1>
              <span className='editButton'>Edit</span>

              <div className="item">
                <img src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj" className='itemImg' alt="" />
              <div className="details">
                <div className="studentName">shreyash gajbhiye</div>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">s@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">s@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">s@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">s@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">s@gmail.com</span>
                </div>
              </div>

              </div>
            </div>
            <CGPA/>
          </div>
          <div className="bottom">
            bottom
          </div>
        </div>
    </div>
  )
}

export default Single
