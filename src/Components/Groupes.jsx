import React from "react";
import "../Styles/Groupes.css";
import pawIcon from "../Icons/paw.png";
import glIcon from "../Icons/gl.png";
import pawRepIcon from "../Icons/pawrep.png";
import glRepIcon from "../Icons/glrep.png";
function Groupes({module,setPage,onBackpageclickk, setGroup,onaddtable,onaddtablee}){
    return(
        <div className="global">
          <div className="navbar">
            <div className="leftbar">
            <h1>Attandence System</h1>
            </div>
            <div className="rightbar">
                <button onClick={onBackpageclickk}>back</button>
            </div>
          </div>
          <div className="mainO">
              {/* MODULES */}
              <h3 className="groupes">Groupes :{module}</h3>
              <div className="row-cards-groupes">
        
                <div className="cart" onClick={() =>{ setGroup(1) ; setPage(`record-${module.toLowerCase()}`)}}>
                  <img src={pawIcon} alt="paw student" />
                  <p>Groupe 1</p>
                </div>
        
                <div className="cart" onClick={() => {setGroup(2);setPage(`record-${module.toLowerCase()}`)}}>
                  <img src={glIcon} alt="gl student" />
                  <p>Groupe 2</p>
                </div>
              </div>
        
              {/* REPORTS */}
              <h3 className="reports">Reports</h3>
              <div className="row-cards-reports">
        
                <div className="cart" onClick={() => setPage(onaddtable)}>
                  <img src={pawRepIcon} alt="paw report" />
                  <p>Groupe 1</p>
                </div>
        
                <div className="cart" onClick={() => setPage(onaddtablee)}>
                  <img src={glRepIcon} alt="gl report" />
                  <p> Groupe 2</p>
                </div>
              </div>
              </div>
            </div>
    );

}export default Groupes