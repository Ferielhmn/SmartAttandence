import React from 'react';
import "../Styles/Addstudent.css";

function Addstudent({
  onBackClick,
  onBackpageclickk,
  oncheckpage,
  addtotable,
  hndlformaddtable,
  addinput,
}) {
  return (
    <div className="addstudent-container">
      <div className="navbar">
        <div className="nav-left">
          <h1>Attendance System</h1>
        </div>
        <div className="nav-right">
        
        </div>
      </div>

      <div className="add-main">
        <h1 className='title-add'>Add new Student</h1>
        <form onSubmit={hndlformaddtable}>
          <div className="box-input">
            <label className="title-input">First Name</label>
            <input
              className="add-input"
              type="text"
              name="First_Name"
              value={addinput.First_Name}
              placeholder="First Name"
              onChange={addtotable}
            />

            <label className="title-input">Last Name</label>
            <input
              className="add-input"
              type="text"
              name="Last_Name"
              value={addinput.Last_Name}
              placeholder="Last Name"
              onChange={addtotable}
            />

            <button type="submit" className="addbutton">Add to Table</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addstudent;
