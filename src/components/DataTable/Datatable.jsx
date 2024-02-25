import React, { useState } from 'react'
import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from './dataSource'
function Datatable() {
  const [data,setData] = useState(userRows)

  const actionColumn=[
    {
      field:"action",
      headerName:"Action",
      width:400,
      renderCell: (params) =>{
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        )
      } 
    }
  ]
  return (
    <div className='dataTable'>
      <div className="dataTableTitle">
          <span>Add New Student</span>
          <span className='link'>Add Student</span>
      </div>
      <DataGrid
        className='dataGrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
