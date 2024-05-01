  import React, { useState, useEffect } from 'react';
  import './Datatable.scss';
  import { DataGrid } from '@mui/x-data-grid';
import toast from 'react-hot-toast';
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

  //   const handleApproveClick = async(studentId) =>{
  //     const token = localStorage.getItem('token');
  //     try {
  //       console.log(`http://localhost:8000/api/Mentor/verifyStudent/${studentId}`)
  //         const response (`http://localhost:8000/api/Mentor/verifyStudent/${studentId}`, {
  //             headers: {
  //                 Authorization: `Bearer ${token}`
  //             }
  //         });
          
  //         console.log(response.data)
  //     } catch (error) {
  //           console.log(error)
  //         // console.error("Not suceessfull:", error);
  //     }
  // }
    // const handleApproveClick = async (studentId) => {
    //   const token = localStorage.getItem('token');
    //   console.log(studentId);
    //   console.log(token);
    //   await axios.post(`http://localhost:8000/api/Mentor/verifyStudent/${studentId}`, {
    //     headers: {
    //       Authorization: `bearer ${token}`,
    //     },
    //   })
    //     .catch(error => {
    //       console.error('Error approving student:', error);
    //     });
    // };  

    const handleApproveClick = (studentId) => {
      const token = localStorage.getItem('token');
  
      const response = fetch(`http://localhost:8000/api/Mentor/verifyStudent/${studentId}`, {
        method: 'POST', // Assuming it's a PUT request to update student verification
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        toast.success(`Student Approved`, { position: "top-right" });
        // localStorage.setItem("token", response.data.token);
        // console.log(localStorage.getItem("token"));

        // navigate(`/student/${response.data._id}`);    
      })
        .catch(error => {
          console.error('Error approving student:', error);
        });
    };


    const handleDeclineClick = (studentId) => {
      const token = localStorage.getItem('token');
  
      fetch(`http://localhost:8000/api/Mentor/delete/${studentId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        toast.error(`Student Declined`, { position: "top-right" });
      })
      .catch(error => {
        console.error('Error declining student:', error);
      });
    };
  
    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 300, // Reduced width for the action column
        renderCell: (params) => {
          return (
            <div className="cellAction">
              {params.row.isApproved ? (
                <div className="disableButton">Disable</div>
              ) : (
                <React.Fragment>
                  <div className="approveButton" onClick={() => handleApproveClick(params.row._id)}>Approve</div>
                  <div className="declineButton" onClick={() => handleDeclineClick(params.row._id)}>Decline</div>
                </React.Fragment>
              )}
              <div className="deleteButton">Delete</div>
            </div>
          );
        },
      },
    ];

    const trueFalseColumn = [
      {
        field: "isApproved",
        headerName: "Approved",
        width: 100, // Reduced width for the true/false columns
        renderCell: (params) => (
          <div className={`statusText ${params.value ? 'approved' : 'not-approved'}`}>
            <span className="borderEffect">{params.value ? 'True' : 'False'}</span>
          </div>
        )
      },
      {
        field: "isVerified",
        headerName: "Verified",
        width: 100, // Reduced width for the true/false columns
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
        width: 150, // Reduced width for the user column
        renderCell: (params) => (
          <div className="cellWithImg">
            {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
            {params.row.fname} {params.row.lname}
          </div>
        )
      },
      { field: "email", headerName: "Email", width: 300 }, // Reduced width for the email column
      // { field: "status", headerName: "Status", width: 120 }, // Reduced width for the status column
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
          autoHeight // Adjusts the height automatically based on content
        />
      </div>
    );
  }

  export default Datatable;
