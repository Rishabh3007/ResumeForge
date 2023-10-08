import React, { useState } from 'react';
import styles from "./Body.module.css";
import { Download } from 'react-feather';
import Editor from '../Editor/Editor';

function Body() {
  const colors = [
    "#5CDB95",
    "#FF6F69",
    "#FFE66D",
    "#6B705C",
    "#355C7D",
  ];

  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievements: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      title: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      title: sections.workExp,
      detail: [{title:"hello"}],
    },
    [sections.project]: {
      id: sections.project,
      title: sections.project,
      detail: [],
    },
    [sections.education]: {
      id: sections.education,
      title: sections.education,
      detail: [],
    },
    [sections.achievements]: {
      id: sections.achievements,
      title: sections.achievements,
      detail: [],
    },
    [sections.summary]: {
      id: sections.summary,
      title: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      title: sections.other,
      detail: "",
    },
  });


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
        <div className={styles.main}>
            <Editor sections={sections} information={resumeInformation}/>
        </div>
    </div>
  )
}

export default Body