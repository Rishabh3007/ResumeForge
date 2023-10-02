import React from 'react';
import styles from "./Body.module.css";
import { Download } from 'react-feather';

function Body() {
  const colors = [
    "#5CDB95",
    "#FF6F69",
    "#FFE66D",
    "#6B705C",
    "#355C7D",
  ];
  return (
    <div className={styles.container}>
        <p className={styles.heading}>Resume Builder</p>
        <div className={styles.toolbar}>
            <div className={styles.colors}>
                {colors.map((item) => (
                    <span
                    key={item}
                    style={{ backgroundColor: item }}
                    className={styles.color}
                    />
                ))}
            </div>
            <button className={styles.button}>Download 
            <Download />
            </button>
        </div>
    </div>
  )
}

export default Body