import React from 'react'
import './slidebar.scss'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
function Slidebar() {
  return (
    <div className='slidebar'>
      <div className='top'>
        <span className='logo'>RecordHub</span>
      </div>
      <hr/>
      <div className='bottom'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <SpaceDashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className='title'>LIST</p>
          <li>
            <Person2OutlinedIcon className='icon'/>
            <span>Groups</span>
          </li>
          <li>
            <GroupOutlinedIcon className='icon'/>
            <span>Student</span>
          </li>
          <li>
            <NotificationAddOutlinedIcon className='icon'/>
            <span>Request</span>
          </li>
          <p className='title'>SIGN OUT</p>
          <li>
            <LoginOutlinedIcon className='icon'/>
            <span>Log out</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Slidebar
