
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
          <button className="click" onClick={onBackpageclickk}>Back</button>
        </div>
      </div>

      <div className="mainy">
        <div className="title-main">
          <h1>Students Attendance List</h1>
        </div>

        <button className="click_report" onClick={onaddtable}>
          Show Report    
        </button>

        <button className="addStudent" onClick={onAddStudnetClickk}>
          <img src={plusnew} alt="plusnew" width="30px" height="30px" />
          Add Student
        </button>

        <table className="hello">
          <thead>
            {/* Ligne principale avec S1 à S6 */}
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              {[...Array(6)].map((_, i) => (
                <th key={i} colSpan={2}>{`S${i + 1}`}</th>
              ))}
              <th>Absences</th>
              <th>Participation</th>
            </tr>

            {/* Sous-colonnes P et PA */}
            <tr>
              <th></th>
              <th></th>
              {[...Array(6)].map((_, i) => (
                <React.Fragment key={i}>
                  <th>P</th>
                  <th>PA</th>
                </React.Fragment>
              ))}
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, i) => (
              <tr key={student.id} style={{ backgroundColor: student.color }}>
                <td className="design-text">{student.last_name}</td>
                <td className="design-text">{student.first_name}</td>

                {/* Inputs pour chaque S (P et PA) */}
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
