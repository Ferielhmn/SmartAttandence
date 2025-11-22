/*import React from "react";
import "../Styles/Menu.css"; // assure-toi que le fichier CSS a ce nom

import pawIcon from "../Icons/paw.png"; 
import glIcon from "../Icons/gl.png";
import pawRepIcon from "../Icons/pawrep.png";
import glRepIcon from "../Icons/glrep.png";

function DashboardCards() {
  return (
    <div className="container">

      {/* MODULES *}
      <h3 className="section-title">Modules</h3>
      <div className="row-cards">
        <div className="card">
          <img src={pawIcon} alt="paw student" />
          <p>PAW Student</p>
        </div>

        <div className="card">
          <img src={glIcon} alt="gl student" />
          <p>GL Student</p>
        </div>
      </div>

      {/* REPORTS *}
      <h3 className="section-title">Reports</h3>
      <div className="row-cards">

        <div className="card">
          <img src={pawRepIcon} alt="paw report" />
          <p>PAW Report</p>
        </div>

        <div className="card">
          <img src={glRepIcon} alt="gl report" />
          <p>GL Report</p>
        </div>

      </div>

    </div>
  );
}

export default DashboardCards;
*/
import React from "react";
import "../Styles/Menu.css";

import pawIcon from "../Icons/paw.png";
import glIcon from "../Icons/gl.png";
import pawRepIcon from "../Icons/pawrep.png";
import glRepIcon from "../Icons/glrep.png";

function DashboardCards({ setPage }) {
  return (
    <div className="container">
      {/* MODULES */}
      <h3 className="section-title">Modules</h3>
      <div className="row-cards">

        <div className="card" onClick={() => setPage("record-paw")}>
          <img src={pawIcon} alt="paw student" />
          <p>PAW Student</p>
        </div>

        <div className="card" onClick={() => setPage("record-gl")}>
          <img src={glIcon} alt="gl student" />
          <p>GL Student</p>
        </div>
      </div>

      {/* REPORTS */}
      <h3 className="section-title">Reports</h3>
      <div className="row-cards">

        <div className="card" onClick={() => setPage("report-paw")}>
          <img src={pawRepIcon} alt="paw report" />
          <p>PAW Report</p>
        </div>

        <div className="card" onClick={() => setPage("report-gl")}>
          <img src={glRepIcon} alt="gl report" />
          <p>GL Report</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;

