import React, { useState } from "react";

import Recordattendance from "./Components/Recordattendance";
import Addstudent from "./Components/Addstudent";
import Homepage from "./Components/Homepage";
import Showreport from "./Components/Showreport";
import Welcome from "./Components/Welcome";
import Menu from "./Components/Menu";
import "./App.css";

function App() {
  const [page, setPage] = useState("welcome");

  const [students, setStudents] = useState([
    {
      id: 1,
      First_Name: "Ahmed",
      Last_Name: "Sarah",
      Absences: 6,
      Participation: 0,
      color: "#8EC5FC",
    },
  ]);

  const [addinput, setAddinput] = useState({
    First_Name: "",
    Last_Name: "",
  });

  function hndelabsences(index, checked) {
    setStudents((prev) =>
      prev.map((student, i) => {
        if (i === index) {
          const newAbs = student.Absences - (checked ? 1 : -1);

          let newColor = "#8EC5FC";
          if (newAbs < 3) newColor = "#B30000";
          else if (newAbs === 3) newColor = "#FFE135";
          else newColor = "#74C365";

          return { ...student, Absences: newAbs, color: newColor };
        }
        return student;
      })
    );
  }

  function participation(index, checked) {
    setStudents((prev) =>
      prev.map((student, i) => {
        if (i === index) {
          const newPar = student.Participation + (checked ? 1 : -1);
          return { ...student, Participation: newPar };
        }
        return student;
      })
    );
  }

  function addtotable(e) {
    const { name, value } = e.target;
    setAddinput((prev) => ({ ...prev, [name]: value }));
  }

  function hndlformaddtable(e) {
    e.preventDefault();
    if (addinput.First_Name && addinput.Last_Name) {
      const newStudent = {
        id: students.length + 1,
        First_Name: addinput.First_Name,
        Last_Name: addinput.Last_Name,
        Absences: 6,
        Participation: 0,
        color: "#8EC5FC",
      };
      setStudents((prev) => [...prev, newStudent]);
      setAddinput({ First_Name: "", Last_Name: "" });
      setPage("record");
    }
  }

  // Statistiques
  const totalStudents = students.length;
  const totalAbsences = students.reduce((sum, s) => sum + s.Absences, 0);
  const totalParticipation = students.reduce(
    (sum, s) => sum + s.Participation,
    0
  );

  const avgAbsences =
    totalStudents > 0 ? (totalAbsences / totalStudents).toFixed(1) : "0.0";
  const avgParticipation =
    totalStudents > 0 ? (totalParticipation / totalStudents).toFixed(1) : "0.0";
  const attendancePercentage =
    totalAbsences + totalParticipation > 0
      ? (
          (totalParticipation / (totalParticipation + totalAbsences)) *
          100
        ).toFixed(1)
      : "0.0";

  return (
    <div>
      {page === "welcome" && <Welcome onSingUpClick={() => setPage("home")} />}
      {page === "home" && <Homepage onSingUpClick={() => setPage("menu")} />}
      {page === "menu" && <Menu setPage={setPage} />}

      {/* RECORD PAW */}
      {page === "record-paw" && (
        <Recordattendance
          students={students}
          participation={participation}
          hndelabsences={hndelabsences}
          onBackpageclickk={() => setPage("menu")}
          onAddStudnetClickk={() => setPage("add")}
          onaddtable={() => setPage("report-paw")}
          module="PAW"
        />
      )}

      {/* RECORD GL */}
      {page === "record-gl" && (
        <Recordattendance
          students={students}
          participation={participation}
          hndelabsences={hndelabsences}
          onBackpageclickk={() => setPage("menu")}
          onAddStudnetClickk={() => setPage("add")}
          onaddtable={() => setPage("report-gl")}
          module="GL"
        />
      )}

      {/* REPORT PAW */}
      {page === "report-paw" && (
        <Showreport
          totalStudents={totalStudents}
          avgAbsences={avgAbsences}
          avgParticipation={avgParticipation}
          attendancePercentage={attendancePercentage}
          module="PAW"
          onBackpageclickk={() => setPage("menu")}
        />
      )}

      {/* REPORT GL */}
      {page === "report-gl" && (
        <Showreport
          totalStudents={totalStudents}
          avgAbsences={avgAbsences}
          avgParticipation={avgParticipation}
          attendancePercentage={attendancePercentage}
          module="GL"
          onBackpageclickk={() => setPage("menu")}
        />
      )}

      {page === "record" && (
        <Recordattendance
          students={students}
          onAddStudnetClickk={() => setPage("menu")}
          onBackpageclickk={() => setPage("home")}
          onaddtable={() => setPage("report")}
          participation={participation}
          hndelabsences={hndelabsences}
        />
      )}

      {page === "add" && (
        <Addstudent
          onBackClick={() => setPage("record")}
          onBackpageclickk={() => setPage("home")}
          oncheckpage={() => setPage("report")}
          addinput={addinput}
          addtotable={addtotable}
          hndlformaddtable={hndlformaddtable}
        />
      )}

      {page === "report" && (
        <Showreport
          totalStudents={Number(totalStudents)}
          avgAbsences={Number(avgAbsences)}
          avgParticipation={Number(avgParticipation)}
          attendancePercentage={Number(attendancePercentage)}
          onBackpageclickk={() => setPage("menu")}
        />
      )}
    </div>
  );
}

export default App;
