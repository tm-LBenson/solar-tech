import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header className="nav">
        <div className="nav__logo">SolarTech</div>
        <nav className="nav__links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <button className="nav__cta">Sign Up</button>
      </header>
    </>
  );
}
