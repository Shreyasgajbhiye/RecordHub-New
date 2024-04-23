import React, { useState, useEffect } from 'react';
import './Datatable.scss';
import { DataGrid } from '@mui/x-data-grid';

function Datatable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:8000/api/Mentor/getAllStudents', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        // Generate unique IDs for each row
        const rowsWithIds = data.map((row, index) => ({ ...row, id: index }));
        setData(rowsWithIds);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        )
      }
    }
  ];

  const trueFalseColumn = [
    {
      field: "isApproved",
      headerName: "Approved",
      width: 120,
      renderCell: (params) => (
        <div className={`statusText ${params.value ? 'approved' : 'not-approved'}`}>
          <span className="borderEffect">{params.value ? 'True' : 'False'}</span>
        </div>
      )
    },
    {
      field: "isVerified",
      headerName: "Verified",
      width: 120,
      renderCell: (params) => (
        <div className={`statusText ${params.value ? 'approved' : 'not-approved'}`}>
          <span className="borderEffect">{params.value ? 'True' : 'False'}</span>
        </div>
      )
    }
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.fname} {params.row.lname}
        </div>
      )
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 160 },
    ...trueFalseColumn,
    ...actionColumn
  ];

  return (
    <div className='dataTable'>
      <div className="dataTableTitle">
        <span>Add New Student</span>
        <span className='link'>Add Student</span>
      </div>
      <DataGrid
        className='dataGrid'
        rows={data}
        columns={columns}
        loading={loading}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;
