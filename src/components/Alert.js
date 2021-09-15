import React from "react";
import { useAlert } from "react-alert";
import logo from "../tiktok.png";
import "./Alert.css";
import { Link } from "react-router-dom";

function Alert() {
  const alert = useAlert();

  return (
    <div className="alert">
      <header className="alert__header">
        <img
          src={logo}
          className="alert__logo"
          alt="logo"
          onClick={() => {
            alert.show("Oh look, an alert!");
          }}
        />
        <p>Tap on the picture to see an alert</p>
        <Link to="/string" className="alert__link">
          Next Task -{">"}
        </Link>
      </header>
    </div>
  );
}

export default Alert;
