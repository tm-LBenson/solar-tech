import React from "react";
import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <footer className={`footer ${styles.bold}`}>
      <p>Copyright &copy; {new Date().getFullYear()} SolarTech.</p>
    </footer>
  );
}
