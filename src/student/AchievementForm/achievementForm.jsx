import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './achievementForm.css';
import Navbar from '../../../src/components/Navbar/navbar';
import Slidebar from '../../components/Slidebar/Slidebar2';

function AchievementForm() {

  const credentials = {
    email: "",
    techorntech: "",
    achievement_type: "",
    name: "",
    phone: "",
    year: "",
    batch: "",
    gender_option: ""
  };

  const [credential, setCredentials] = useState(credentials);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credential, [name]: value });
  };

  useEffect(() => {
    console.log(credential);
  }, [credential]); // Log the updated credential whenever it changes

  return (
    <div className='home'>
      <>
        <Slidebar />
        <div className='homeContainer'>
          <Navbar />
          <div className="Box">
            <section class="container">
              <header className='hd'>Post About Your Achievement</header>
              <form action="#" class="form" >
                <div class="input-box">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter full name" name='name' onChange={inputHandler} required />
                </div>
                <div class="input-box">
                  <label>Email Address</label>
                  <input type="text" placeholder="Enter email address" name='email' onChange={inputHandler} required />
                </div>
                <div class="column">
                  <div class="input-box">
                    <label>Phone Number</label>
                    <input type="number" placeholder="Enter phone number" name='phone' onChange={inputHandler} required />
                  </div>
                </div>
                <div className="column">
                  <div className="input-box">
                    <label htmlFor="">Year [FE,SE,BE,TE]</label>
                    <input type="text" name='year' onChange={inputHandler} />
                  </div>
                  <div className="input-box">
                    <label htmlFor="">Batch</label>
                    <input type="text" name='batch' onChange={inputHandler} />
                  </div>
                </div>
                <div class="gender-box">
                  <h3>Gender</h3>
                  <div class="gender-option" >
                  <div className="gender-option">
                  <div className="gender">
                    <input type="radio" id="check-male" name="gender_option" value="male" checked={credential.gender_option === 'male'} onChange={inputHandler} />
                    <label htmlFor="check-male">Male</label>
                  </div>
                  <div className="gender">
                    <input type="radio" id="check-female" name="gender_option" value="female" checked={credential.gender_option === 'female'} onChange={inputHandler} />
                    <label htmlFor="check-female">Female</label>
                  </div>
                  <div className="gender">
                    <input type="radio" id="check-other" name="gender_option" value="prefer_not_to_say" checked={credential.gender_option === 'prefer_not_to_say'} onChange={inputHandler} />
                    <label htmlFor="check-other">Prefer not to say</label>
                  </div>
                </div>
                  </div>
                </div>
                <div class="input-box address">
                  <label>Achievement Details</label>
                  <div class="column">
                    <div className="select-box">
                      <select name="techorntech" id="techorntech" onChange={inputHandler}>
                        <option hidden>Tech or Non-Tech</option>
                        <option value="tech" >Tech</option>
                        <option value="non-tech">Non-Tech</option>
                      </select>
                    </div>
                    <div className="select-box">
                      <select name="achievement_type" id="achievement-type" onChange={inputHandler}>
                        <option hidden>Type of Achievement</option>
                        <option value="sport" >sport</option>
                        <option value="hackathon">hackathon</option>
                        <option value="Debate">Debate</option>
                        <option value="Arts">Arts</option>
                      </select>
                    </div>
                  </div>
                  <div className="column">
                    <input type="file" />
                  </div>
                </div>
                <button>Submit</button>
              </form>
            </section>
          </div>
        </div>
      </>
    </div>
  )
}

export default AchievementForm;
