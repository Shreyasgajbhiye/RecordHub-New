import React from 'react'
import './Bonafide.css'
import Navbar from '../../../src/components/Navbar/navbar'
import Slidebar from '../../components/Slidebar/Slidebar2'
function Bonafide() {
    return (
        <div className='home'>
          <>
          <Slidebar/>
          <div className='homeContainer'>
            <Navbar/>
            
            <div className="Box">
            <section class="container">
            <header>Bonafide Form</header>
        <form action="#" class="form">
        <div class="input-box">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" required />
        </div>
        <div class="input-box">
            <label>Email Address</label>
            <input type="text" placeholder="Enter email address" required />
        </div>
        <div class="column">
            <div class="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
            </div>
            <div class="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" required />
            </div>
        </div>
        <div class="gender-box">
            <h3>Gender</h3>
            <div class="gender-option">
            <div class="gender">
                <input type="radio" id="check-male" name="gender" checked />
                <label for="check-male">male</label>
            </div>
            <div class="gender">
                <input type="radio" id="check-female" name="gender" />
                <label for="check-female">Female</label>
            </div>
            <div class="gender">
                <input type="radio" id="check-other" name="gender" />
                <label for="check-other">prefer not to say</label>
            </div>
            </div>
        </div>
        <div class="input-box address">
            <label>Address</label>
            <input type="text" placeholder="Enter street address" required />
            <input type="text" placeholder="Enter street address line 2" required />
            <div class="column">
            <div class="select-box">
                <select>
                <option hidden>Country</option>
                <option>America</option>
                <option>Japan</option>
                <option>India</option>
                <option>Nepal</option>
                </select>
            </div>
            <input type="text" placeholder="Enter your city" required />
            </div>
            <div class="column">
            <input type="text" placeholder="Enter your region" required />
            <input type="number" placeholder="Enter postal code" required />
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

export default Bonafide

