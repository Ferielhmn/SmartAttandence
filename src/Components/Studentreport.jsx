import React , { useEffect, useState }from "react";
import "../Styles/Studentreport.css";
import absencesIcon from "../Icons/absences.png";
import participationIcon from "../Icons/participation.png";

function Studentreport({  onBackpageclickk,studentId }) {
  return (
    <div className="report-container">

  
      <header className="report-header">
        <h1 className="report-logo">Smartattendance</h1>
        <button className="report-back" onClick={ onBackpageclickk}>Back</button>
      </header>

    
      <h2 className="report-title">Your Reports</h2>

      <div className="report-cards-row">
        
        <div className="report-card">
          <img src={absencesIcon} alt="icon" className="report-icon"/>
          <p className="report-number">1</p>
          <span className="report-label">Absences</span>
        </div>

        <div className="report-card">
          <img src={participationIcon}alt="icon" className="report-icon"/>
          <p className="report-number">5</p>
          <span className="report-label">Participation</span>
        </div>

      </div>

    
      <div className="status-card">
        <div className="status-dot"></div>
        <div className="status-text">
          <p className="status-title">Excellent</p>
          <span className="status-subtitle">Status</span>
        </div>
      </div>

     
      <div className="justify-section">
        <label className="justify-label">Enter Your Justification:</label>

        <div className="file-area">
          <button className="file-btn">Add file</button>
        </div>

      </div>

    </div>
  );
}

export default Studentreport;
