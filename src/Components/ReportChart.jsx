import React from "react";
import "../Styles/Showreport.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ReportChart({ totalStudents, avgAbsences, avgParticipation, attendancePercentage }) {
  const data = [
    { name: "Students", value: Number(totalStudents) },
    { name: "Avg Absences", value: Number(avgAbsences) },
    { name: "Avg Participation", value: Number(avgParticipation) },
    { name: "Attendance %", value: Number(attendancePercentage) },
  ];

  return (
    <div className="ReportChartContainer">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#4A90E2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ReportChart;
