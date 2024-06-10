import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import Logo from "../Img/partner-brand-logo-1-1-1708655453-18385.png";

export default function Header() {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className="Header-Body">
      <div className="Header-Box">
        <Link to="/" onClick={handleReload}>
          <img src={Logo} alt="Logo" className="Header-Img" />
        </Link>

        <Link to="login">Login</Link>
      </div>
    </div>
  );
}
