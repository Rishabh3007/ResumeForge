import React from "react";
import styles from "./Header.module.css";
import resume from "../../assets/resume.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.left}>
          <p className={styles.heading}>
            A <span>Resume</span> that stands out!
          </p>
          <p className={styles.heading}>
            Create a resume that is <span>perfect</span> for you.
          </p>
        </div>
        <div className={styles.right}>
          <img src={resume} alt="resume" />
        </div>
      </div>

      <div className={styles.bodyButton}>
        <button className={styles.button}>
          <NavLink to="/body" className={styles.navlink}>
            Start Building
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Header;
