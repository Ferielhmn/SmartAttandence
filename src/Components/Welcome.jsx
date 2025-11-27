import React, { useEffect } from "react";
import "../Styles/Welcome.css";
import studenticon from "../Icons/studenticon.png";
import $ from "jquery"; // Import de jQuery

function Welcome({ onSingUpClick }) {
  useEffect(() => {
    // Fade-in du titre et du bouton
    $(".firsttitle, .secondtitle, .loginbutton").hide().fadeIn(1500);

    // Changer la couleur du bouton au survol
    $(".loginbutton").hover(
      function () {
        $(this).css("background-color", "#4CAF50"); // couleur au hover
        $(this).css("color", "#fff");
      },
      function () {
        $(this).css("background-color", ""); // retour à la couleur initiale
        $(this).css("color", "");
      }
    );
  }, []);

  return (
    <div className="welcome">
      <div className="loginapp">
        <h1 className="firsttitle">Welcome To SmartAttandencs</h1>
        <p className="secondtitle"> LET ACCESS ALL WORK FROM HERE</p>
        <button className="loginbutton" onClick={onSingUpClick}>
          Login
        </button>
        <br />
        <img
          src={studenticon}
          alt="students"
          className="photo"
          width="260px"
          height="220px"
        />
      </div>
    </div>
  );
}

export default Welcome;
