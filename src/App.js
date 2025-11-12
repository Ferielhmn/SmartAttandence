import React, { useState } from "react";
import Recordattendence from "./Components/Recordattendance";
import Addstudent from "./Components/Addstudent";
import Homepage from "./Components/Homepage";
import Showreport from "./Components/Showreport";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");

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
          // Calcul des absences
          const newAbs = student.Absences - (checked ? 1 : -1);

          // Déterminer la couleur selon les absences
          let newColor = "#8EC5FC";
          if (newAbs < 3) newColor = "green";
          else if (newAbs === 3) newColor = "yellow";
          else newColor = "red";

          // Retourner le nouvel objet étudiant avec absences et couleur mises à jour
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

  // const [color, setColor] = useState("#8EC5FC");

  // function changecolor(index) {
  //   let newcolor = "#8EC5FC";
  //   if (students[index].Absences < 3) {
  //     newcolor = "green";
  //     setColor(newcolor);
  //   } else if (students[index].Absences === 3) {
  //     newcolor = "yellow";
  //     setColor(newcolor);
  //   } else {
  //     newcolor = "red";
  //     setColor(newcolor);
  //   }
  //   return newcolor;
  // }

  return (
    <div>
      {page === "home" && <Homepage onSingUpClick={() => setPage("record")} />}

      {page === "record" && (
        <Recordattendence
          students={students}
          onAddStudnetClickk={() => setPage("add")}
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

      {page === "report" && <Showreport />}
    </div>
  );
}

export default App;
