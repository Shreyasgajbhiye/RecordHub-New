import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './achievementForm.css';
import Navbar from '../../../src/components/Navbar/navbar';
import Slidebar from '../../components/Slidebar/Slidebar2';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function AchievementForm() {
  const credentials = {
    name: "",
    desc: "",
    type: "",
    year: "", // New: to store the selected year
    pdf: "", // New: to store the PDF file
    file: ""
  };

  const navigate = useNavigate(); 

  const [credential, setCredentials] = useState(credentials);
  const [pdfFile, setPdfFile] = useState(null); // New: to store the PDF file

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credential, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCredentials({ ...credential, pdf: file }); // New: Store the file in credential state
  };

  const handleYearChange = (e) => {
    const year = e.target.value;
    setCredentials({ ...credential, year }); // New: Store the selected year in credential state
  };

  const submitForm = async (e) => {
    e.preventDefault();
    // Assuming you have an API endpoint for uploading PDF files
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      const headers = {
        'Authorization': `Bearer ${token}`, // Assuming your API expects a Bearer token
      };

      const formData = new FormData();
      formData.append("name", credential.name);
      formData.append("desc", credential.desc);
      formData.append("type", credential.type);
      formData.append("year", credential.year);
      formData.append("pdf", credential.pdf); // Append the PDF file to the form data

      const response = await axios.post("http://localhost:8000/api/Student/uploadAchievement", formData, { headers });
      console.log("File uploaded successfully", response);
      toast('Posted succesfully', { position: "top-right" })
      const id = response.data.id;
      navigate.push(`/home/${id}`);
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  return (
    <div className='home'>
      <>
        <Slidebar />
        <div className='homeContainer'>
          <Navbar />
          <div className="Box">
            <section className="container">
              <header className='hd'>Post About Your Achievement</header>
              <form onSubmit={submitForm} className="form">
                <div className="input-box">
                  <label>Achievement Name</label>
                  <input type="text" placeholder="Enter Achievement name" name='name' onChange={inputHandler} required />
                </div>
                <div className="input-box">
                  <label>Description</label>
                  <input type="text" placeholder="Enter Description" name='desc' onChange={inputHandler} required />
                </div>
                <div className="gender-box">
                  <h3>Enter the Year</h3>
                  <div className="gender-option">
                    <div className="gender">
                      <input type="radio" id="FE" name="year" value="FE" onChange={handleYearChange} />
                      <label htmlFor="FE">FE</label>
                    </div>
                    <div className="gender">
                      <input type="radio" id="SE" name="year" value="SE" onChange={handleYearChange} />
                      <label htmlFor="SE">SE</label>
                    </div>
                    <div className="gender">
                      <input type="radio" id="TE" name="year" value="TE" onChange={handleYearChange} />
                      <label htmlFor="TE">TE</label>
                    </div>
                    <div className="gender">
                      <input type="radio" id="BE" name="year" value="BE" onChange={handleYearChange} />
                      <label htmlFor="BE">BE</label>
                    </div>
                  </div>
                </div>
                <div className="input-box address">
                  <label>Achievement Type</label>
                  <div className="select-box">
                    <select name="type" id="type" onChange={inputHandler}>
                      <option hidden>Tech or Non-Tech</option>
                      <option value="tech">Tech</option>
                      <option value="non-tech">Non-Tech</option>
                    </select>
                  </div>
                </div>
                <div className="input-box">
                  <label>Upload PDF</label>
                  <input type="file" accept=".jpg , .jpeg , .png , .pdf" onChange={handleFileChange} required />
                </div>
                <button type="submit">Submit</button>
              </form>
            </section>
          </div>
        </div>
      </>
    </div>
  );
}

export default AchievementForm;
