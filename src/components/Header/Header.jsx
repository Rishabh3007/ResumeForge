import React from "react";
import styles from "./Header.module.css";
import resume from "../../assets/resume.svg";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Create a resume that is <span>perfect</span> for you.
        </p>
      </div>
        <div className={styles.right}>
            <img
            src={resume} alt="resume"
            />
        </div>
    </div>
  );
}

export default Header;
