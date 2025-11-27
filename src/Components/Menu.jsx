

import React from "react";
import "../Styles/Menu.css";

import pawIcon from "../Icons/paw.png";
import glIcon from "../Icons/gl.png";
import pawRepIcon from "../Icons/pawrep.png";
import glRepIcon from "../Icons/glrep.png";

function DashboardCards({ setPage ,setModule}) {
  return (
    <div className="container">
      {/* MODULES */}
      <h1>Attandence System</h1>
      <h3 className="section-title">Modules</h3>
      <div className="row-cards">

        <div className="card" onClick={() =>{   
          setModule("PAW");
          setPage("groupes");}}>
          <img src={pawIcon} alt="paw student" />
          <p>PAW Student</p>
        </div>

        <div className="card" onClick={() =>{
          setModule("GL");
           setPage("groupes");}}>
          <img src={glIcon} alt="gl student" />
          <p>GL Student</p>
        </div>
      </div>

      {/* REPORTS */}
      <h3 className="section-title">Reports</h3>
      <div className="row-cards">

        <div className="card" onClick={() =>{ setModule("PAW");
  setPage("report-all");}}>
          <img src={pawRepIcon} alt="paw report" />
          <p>PAW Report</p>
        </div>

        <div className="card" onClick={() => {setModule("GL");
  setPage("report-all");}}>
          <img src={glRepIcon} alt="gl report" />
          <p>GL Report</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;

