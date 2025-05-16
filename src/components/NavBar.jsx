import React from "react";

export default function NavBar() {
  return (
    <>
      <header className="nav">
        <div className="nav__logo">SolarTech</div>
        <nav className="nav__links">
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Contact</a>
        </nav>
        <button className="nav__cta">Sign Up</button>
      </header>

    </>
  );
}
