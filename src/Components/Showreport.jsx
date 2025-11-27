import React from 'react';

import "../Styles/Showreport.css";

import absencesIcon from "../Icons/absences.png";
import attandencesIcon from "../Icons/attandences.png";
import participationIcon from "../Icons/participation.png";
import studentsIcon from "../Icons/students.png";
import ReportChart from "./ReportChart";

function Showreport({ totalStudents, avgAbsences, avgParticipation, attendancePercentage, module ,onBackpageclickk}) {
  return (
    <div className="Showreport">
      <div className='partone'>
        <div className='parttop'>
          <h1>Smartattandence</h1>
          <button onClick={onBackpageclickk}>Back</button>
        </div>

      
        <p className='partbutton'>Reports - {module}</p>
      </div>

      <div className='parttwo'>

        <ul className='carttypeone'>
          <div className='flex_it'>
            <img src={studentsIcon} alt="students" width="38px" height="25px" />
            <li>{totalStudents}</li>
          </div>
          <li className='do'>Total Students</li>
        </ul>

        <ul className='carttypetwo'>
          <div className='flex_it'>
            <img src={absencesIcon} alt="absences" width="38px" height="25px" />
            <li>{avgAbsences}%</li>
          </div>
          <li className='do'>Average Absences</li>
        </ul>

        <ul className='carttypeone'>
          <div className='flex_it'>
            <img src={participationIcon} alt="participation" width="38px" height="25px" />
            <li>{avgParticipation}%</li>
          </div>
          <li className='do'>Average Participation</li>
        </ul>

        <ul className='carttypetwo'>
          <div className='flex_it'>
            <img src={attandencesIcon} alt="attendance" width="38px" height="25px" />
            <li>{attendancePercentage}%</li>
          </div>
          <li className='do'>Attendance Percentage</li>
        </ul>

      </div>

      <ReportChart
        totalStudents={Number(totalStudents)}
        avgAbsences={Number(avgAbsences)}
        avgParticipation={Number(avgParticipation)}
        attendancePercentage={Number(attendancePercentage)}
      />

    </div>

  );
}

export default Showreport;
