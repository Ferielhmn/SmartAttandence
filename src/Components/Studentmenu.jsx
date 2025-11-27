import React from "react";
import "../Styles/Studentmenu.css";

function Studentmenu({  onBackpageclickk,onAddStudnetClickk }) {
  return (
    <div className="studentmenu-container">

     
      <header className="header">
        <h1 className="logo">Smartattendance</h1>
        <button className="back-btn" onClick={ onBackpageclickk}>Sing out</button>
      </header>

     
      <div className="title-section">
        <h2>Your courses</h2>
        <p>View your module statuses here.</p>
      </div>

     
      <div className="courses">

        <div className="module">
          <h3>PAW</h3>
          <button className="group-btn" onClick={onAddStudnetClickk}>Groupe1</button>
          <button className="group-btn" onClick={onAddStudnetClickk}>Groupe2</button>
        </div>

        <div className="module">
          <h3>GL</h3>
          <button className="group-btn" onClick={onAddStudnetClickk}>Groupe1</button>
          <button className="group-btn"onClick={onAddStudnetClickk}>Groupe2</button>
        </div>

      </div>

    </div>
  );
}

export default Studentmenu;
