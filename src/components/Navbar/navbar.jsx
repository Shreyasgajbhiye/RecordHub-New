import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Switch from '@mui/material/Switch';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
  
  return (
    <div className='navbar'>
      <div className='navBarContainer'>
          
        <div className='search'>
          <input type='text' placeholder='Search'/>
          <SearchOutlinedIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <Switch  style={{color: "#210876"}} className='icon'/>
          </div>
          <div className='item'>
            <FullscreenIcon className='icon'/>
          </div>
          <div className='item'>
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className='counter'>5</div>
          </div>
          
          <div className='item'>
              <img src='https://cdn2.momjunction.com/wp-content/uploads/2021/02/What-Is-A-Sigma-Male-And-Their-Common-Personality-Trait-624x702.jpg'
              className='ProfileImg'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
