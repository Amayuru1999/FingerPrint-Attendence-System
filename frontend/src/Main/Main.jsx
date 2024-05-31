import React from "react";
import "./Main.css";
import number from "./../assets/19.png"
import rocket from "./../assets/rocket.png"

const Main = () => {
  return (
    <div className="container-main">
      <div className="main-welcome-text">Welcome!</div>
      <div className="main-make-your-attendance">
        <div className="main-make-your-attendance-text">Make Your Attendance</div>
        </div>
      <div className="main-login-button">
        <div className="main-login-button-text">
                Login
        </div>
      </div>
      <img src={number} alt="Description of your image" className="main-image-number" />
      <img src={rocket} alt="" className="main-image-rocket"/>
    </div>
  );
};

export default Main;
