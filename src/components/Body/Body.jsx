import React, { useEffect, useState } from 'react';
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
    achievement: "Achievement",
    summary: "Summary",
    other: "Other",
  };

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  useEffect(()=>{
    console.log(resumeInformation)
  },[resumeInformation])

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
            <Editor sections={sections} information={resumeInformation}
              setInformation = {setResumeInformation}
            />
        </div>
    </div>
  )
}

export default Body