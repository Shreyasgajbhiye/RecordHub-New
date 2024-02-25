import React from 'react'
import "./students.scss"
import Slidebar from '../../components/Slidebar/Slidebar2'
import Navbar from '../../components/Navbar/navbar'
import Datatable from '../../components/DataTable/Datatable'
function Students() {
  return (
    <div className='students'>
      <Slidebar/>

      <div className="studentsContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default Students
