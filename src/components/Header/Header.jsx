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

      <NavLink to="/body" className={styles.navlink}>
  <div className={styles.bodyButton}>
    <button className={styles.button}>
      Start Building
    </button>
  </div>
</NavLink>
      <div className={styles.footer}>
        <p>
            Made with ❤️ by <a href='https://github.com/Rishabh3007'>Rishabh</a>
        </p>
        <p className={styles.line2}>
            Resume Forge © 2023
        </p>

    </div>
    </div>
  );
}

export default Header;
