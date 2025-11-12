import React from "react";
import "../Styles/Recordeattendance.css";
import plusnew from "../Icons/plusnew.png";

function Recordattendence({
  onAddStudnetClickk,
  onBackpageclickk,
  students,
  onaddtable,
  participation,
  hndelabsences,
  changecolor,
}) {
  return (
    <div className="main">
      <div className="navBar">
        <div className="nav-left">
          <h1>Attendance System</h1>
        </div>
        <div className="nav-right">
          <button className="click" onClick={onaddtable}>Show Report</button>
          <button className="click" onClick={onBackpageclickk}>SignUp</button>
        </div>
      </div>

      <div className="mainy">
        <div className="title-main">
          <h1>Students Attendance List</h1>
        </div>

          <button className="click_report" onClick={onaddtable}>Show Report    
</button>

         <button className="addStudent" onClick={onAddStudnetClickk}>
          <img src={plusnew} alt="plusnew" width="30px"height="30px"/>
          Add Student
          
</button>
        <table className="hello">
          <thead>
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              {[...Array(6)].map((_, i) => (
                <React.Fragment key={i}>
                  <th>P</th>
                  <th>Pa</th>
                </React.Fragment>
              ))}
              <th>Absences</th>
              <th>Participation</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, i) => (
              <tr key={student.id}  style={{ backgroundColor: student.color }}>
                <td className="design-text">{student.First_Name}</td>
                <td className="design-text">{student.Last_Name}</td>

                {[...Array(6)].map((_, j) => (
                  <React.Fragment key={j}>
                    <td>
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          hndelabsences(i, e.target.checked)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          participation(i, e.target.checked)
                        }
                      />
                    </td>
                  </React.Fragment>
                ))}

                <td className="design-text">{student.Absences} Abs</td>
                <td className="design-text">{student.Participation} Par</td>
              </tr>
            ))}
          </tbody>
        </table>

       
      </div>
    </div>
  );
}

export default Recordattendence;
