import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function Request() {
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");

    if(token===""||token===null||token===undefined){
      navigate('/unauth');
    }

  }, [])
  return (
    <div>
      
    </div>
  )
}

export default Request
