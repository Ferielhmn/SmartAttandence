import React, { useState, useEffect } from "react";
import Recordattendance from "./Components/Recordattendance";
import Addstudent from "./Components/Addstudent";
import Homepage from "./Components/Homepage";
import Showreport from "./Components/Showreport";
import Welcome from "./Components/Welcome";
import Menu from "./Components/Menu";
import ReportChart from "./Components/ReportChart";
import Groupes from "./Components/Groupes";
import Studentmenu from "./Components/Studentmenu";
import Studentreport from "./Components/Studentreport";
import "./App.css";

function App() {
  // ===== STATE =====
  const [page, setPage] = useState("welcome");
  const [module, setModule] = useState("");
  const [group, setGroup] = useState(null);
  const [pawG1, setPawG1] = useState([]);
  const [pawG2, setPawG2] = useState([]);
  const [glG1, setGlG1] = useState([]);
  const [glG2, setGlG2] = useState([]);
  const [role, setRole] = useState(null); // student, teacher, admin
  const [students, setStudents] = useState([]);
  const [addinput, setAddinput] = useState({ first_name: "", last_name: "" });
  const [backendStatus, setBackendStatus] = useState(null); // pour tester la connexion PHP/MySQL

  // ===== FETCH BACKEND =====
  useEffect(() => {
    fetch("http://localhost/smart_attendance_api/test_db.php")
      .then((res) => res.json())
      .then((data) => setBackendStatus(data))
      .catch(() =>
        setBackendStatus({ success: false, error: "Cannot connect to backend" })
      );
  }, []);
  //courige 01111//
  useEffect(() => {
    if (module && group) {
      fetch(
        `http://localhost/smart_attendance_api/students.php?action=list&module=${module}&group_id=${group}`
      )
        .then((res) => res.json())
        .then((data) => {
          const studentsArray = Array.isArray(data) ? data : data.data || [];
          const studentsNumeric = studentsArray.map((s) => ({
            ...s,
            Absences: Number(s.Absences),
            Participation: Number(s.Participation),
          }));
          setStudents(studentsNumeric);
        })
        .catch((err) => console.error("Error loading students:", err));
    }
  }, [module, group]);
  useEffect(() => {
    if (module && page === "report-all") {
      Promise.all([
        fetch(
          `http://localhost/smart_attendance_api/students.php?action=list&module=${module}&group_id=1`
        ).then((r) => r.json()),
        fetch(
          `http://localhost/smart_attendance_api/students.php?action=list&module=${module}&group_id=2`
        ).then((r) => r.json()),
      ])
        .then(([g1, g2]) => {
          const all = [...g1, ...g2].map((s) => ({
            ...s,
            Absences: Number(s.Absences),
            Participation: Number(s.Participation),
          }));
          setStudents(all);
        })
        .catch((err) => console.error("Error loading ALL groups:", err));
    }
  }, [module, page]);

  // ===== FUNCTIONS =====
  const handleLogin = (selectedRole) => {
    if (!selectedRole) {
      alert("Please select your role!");
      return;
    }
    setRole(selectedRole);
    if (selectedRole === "student") setPage("studentmenu");
    else setPage("menu");
  };

  // LOGOUT
  const handleBack = () => {
    setRole(null);
    setPage("home");
  };

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

    if (!addinput.first_name || !addinput.last_name) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("first_name", addinput.first_name);
    formData.append("last_name", addinput.last_name);
    formData.append("module", module);
    formData.append("group_id", group);

    fetch("http://localhost/smart_attendance_api/students.php?action=add", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Recharge uniquement le groupe auquel tu viens d’ajouter
          fetch(
            `http://localhost/smart_attendance_api/students.php?action=list&module=${module}&group_id=${group}`
          )
            .then((res) => res.json())
            .then((data) => {
              setStudents(
                data.map((s) => ({
                  ...s,
                  Absences: Number(s.Absences),
                  Participation: Number(s.Participation),
                }))
              );
            });

          setAddinput({ first_name: "", last_name: "" });
          setPage("record");
        } else {
          alert("Backend error: " + data.error);
        }
      })
      .catch(() => alert("Cannot reach backend"));
  }

  function handleAddUser(e) {
    e.preventDefault();

    if (!addinput.first_name || !addinput.last_name || !addinput.role) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("first_name", addinput.first_name);
    formData.append("last_name", addinput.last_name);
    formData.append("role", addinput.role);

    fetch("http://localhost/smart_attendance_api/users.php?action=add", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("User added successfully");
          setAddinput({
            first_name: "",
            last_name: "",
            role: "",
          });
        } else {
          alert("Backend error: " + data.error);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        alert("Cannot reach backend");
      });
  }
  // ===== STATISTIQUES =====
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
  // ===== TABLEAU SELÉCTION =====
  let selectedStudents = [];
  let setSelectedStudents;

  if (module === "PAW" && group === 1) {
    selectedStudents = pawG1;
    setSelectedStudents = setPawG1;
  }
  if (module === "PAW" && group === 2) {
    selectedStudents = pawG2;
    setSelectedStudents = setPawG2;
  }
  if (module === "GL" && group === 1) {
    selectedStudents = glG1;
    setSelectedStudents = setGlG1;
  }
  if (module === "GL" && group === 2) {
    selectedStudents = glG2;
    setSelectedStudents = setGlG2;
  }
  // ===== RENDER =====
  return (
    <div>
      {/* TEST BACKEND */}
      {backendStatus && (
        <div
          style={{ padding: "5px", background: "#eee", marginBottom: "10px" }}
        >
          Backend status: {backendStatus.success ? "✅ Connected" : "❌ Failed"}
        </div>
      )}

      {page === "welcome" && <Welcome onSingUpClick={() => setPage("home")} />}
      {page === "home" && (
        <Homepage
          onSingUpClick={() => setPage("menu")}
          onLogin={handleLogin}
          hndlformadduser={handleAddUser}
        />
      )}
      {page === "menu" && <Menu setPage={setPage} setModule={setModule} />}
      {page === "groupes" && (
        <Groupes
          module={module}
          onBackpageclickk={() => setPage("menu")}
          setPage={setPage}
          setGroup={setGroup}
          onaddtable={() => setPage("report-paw")}
          onaddtablee={() => setPage("report-gl")}
        />
      )}
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
      {page === "report-paw" && (
        <Showreport
          totalStudents={totalStudents}
          avgAbsences={avgAbsences}
          avgParticipation={avgParticipation}
          attendancePercentage={attendancePercentage}
          module="PAW"
          onBackpageclickk={() => setPage("record")}
        />
      )}
      {page === "report-gl" && (
        <Showreport
          totalStudents={totalStudents}
          avgAbsences={avgAbsences}
          avgParticipation={avgParticipation}
          attendancePercentage={attendancePercentage}
          module="GL"
          onBackpageclickk={() => setPage("record")}
        />
      )}
      {page === "record" && (
        <Recordattendance
          students={students}
          onAddStudnetClickk={() => setPage("menu")}
          onBackpageclickk={() => setPage("groupes")}
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
          onBackpageclickk={() => setPage("record")}
        />
      )}
      {page === "report-all" && (
        <Showreport
          totalStudents={totalStudents}
          avgAbsences={avgAbsences}
          avgParticipation={avgParticipation}
          attendancePercentage={attendancePercentage}
          module={module}
          onBackpageclickk={() => setPage("menu")}
        />
      )}
      {page === "studentmenu" && (
        <Studentmenu
          onAddStudnetClickk={() => setPage("studentreport")}
          onBackpageclickk={handleBack}
        />
      )}
      {page === "studentreport" && (
        <Studentreport onBackpageclickk={() => setPage("studentmenu")} />
      )}
    </div>
  );
}
export default App;
