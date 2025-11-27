import React, { useState } from 'react';
import "../Styles/Homepage.css";
import loginiconremo from "../Icons/loginiconremo.png";

function Homepage({ onSingUpClick, onLogin }) {

  const [selectedRole, setSelectedRole] = useState("");
  const [idUser, setIdUser] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer les données au PHP
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("role", selectedRole);

    fetch("http://localhost/smart_attendance_api/users.php?action=add", {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      console.log("Backend response:", data);

      if (data.success) {
        alert("User saved successfully!");
      } else {
        alert(data.message);
      }
    })
    .catch(err => {
      console.error(err);
    });

    onLogin(selectedRole);
  };

  return(
    <div className="main">
      <div className="main-top">
        <h1>SmartAttendance</h1>
        <p className="text1">Authorized users only</p>
      </div>

      <div className="main-buttom">
        <div className='box'>
          <h1>User Account</h1>

          <form onSubmit={handleSubmit}>

            <select 
              className='input' 
              value={selectedRole} 
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">Select Your Role</option>
              <option value="student">Student</option>
              <option value="admin">Administrator</option>
              <option value="teacher">Teacher</option>
            </select>

            <br />

            <input 
              className='input' 
              type='number' 
              placeholder='ID User'
              value={idUser}
              onChange={(e) => setIdUser(e.target.value)}
            />

            <br />

            <input 
              className='input' 
              type='text' 
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <br />

            <input 
              className='input' 
              type='text' 
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <br />

            <button type="submit">Sign Up</button>

            <img 
              src={loginiconremo} 
              alt="students" 
              className='photopi' 
              width="150px" 
              height="90px" 
            />

          </form>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
