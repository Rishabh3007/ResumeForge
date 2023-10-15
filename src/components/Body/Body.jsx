import React, {useRef, useState } from 'react';
import styles from "./Body.module.css";
import { Download } from 'react-feather';
import ReactToPrint from 'react-to-print';
import Editor from '../Editor/Editor';
import Resume from '../Resume/Resume';

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
    skill: "Skill",
  };

  const resumeRef = useRef()

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [selectedTemplate, setSelectedTemplate] = useState("Template1");

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
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
    [sections.skill]: {
      id: sections.skill,
      sectionTitle: sections.skill,
      detail: {},
    },
  });

  // useEffect(()=>{
  //   console.log(resumeInformation)
  // },[resumeInformation])

  return (
    <div className={styles.container}>
        <p className={styles.heading}>Resume Builder</p>
        <div className={styles.toolbar}>
            <div className={styles.colors}>
                {colors.map((item) => (
                    <span
                    key={item}
                    style={{ backgroundColor: item }}
                    className={`${styles.color} ${activeColor === item ? styles.active : ""}`}
                    onClick={() => setActiveColor(item)}
                    />
                ))}
            </div>
            <ReactToPrint
              trigger={() => {
                return (
                  <button 
                    className={styles.button}> Download <Download />
                  </button>
                );
              }}
              content={() => resumeRef.current}
            />
            
        </div>
        <div className={styles.main}>
            <Editor sections={sections} information={resumeInformation}
              setInformation = {setResumeInformation}
            /> 
            

            <div className={styles.templates}>
              <button  onClick={() => handleTemplateClick('Template1')}>Template 1</button>
              <button onClick={() => handleTemplateClick('Template2')}>Template 2</button>
            </div>
            

            <Resume
              selectedTemplate={selectedTemplate}
              ref={resumeRef}
              sections={sections}
              information={resumeInformation}
              activeColor={activeColor}
            />
        </div>
    </div>
  )
}

export default Body