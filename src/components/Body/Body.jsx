import React, {useEffect,useRef, useState } from 'react';
import styles from "./Body.module.css";
import { Download } from 'react-feather';
import ReactToPrint from 'react-to-print';
import Editor from '../Editor/Editor';
import Resume from '../Resume/Resume';

function Body() {
  const colors = [
    "#393838",
    "#0d93b5",
    "#ef6455",
    "#14aa1c",
    "#b108bd",
  ];

  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievement",
    summary: "Summary",
    skill: "Skill",
    profileLinks: "Profile Links",
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
    [sections.profileLinks]:{
      id: sections.profileLinks,
      sectionTitle: sections.profileLinks,
      detail: {},
    }
  });

  const preFilledInformation = {
    "Basic Info": {
        "id": "Basic Info",
        "sectionTitle": "Basic Info",
        "detail": {
            "name": "Rishabh Jain",
            "title": "Software Developer",
            "linkedin": "https://www.linkedin.com/in/rishabh-jain-a9876820b/",
            "github": "githublink.com",
            "phone": "+917066388725",
            "email": " jainrishabh3007@gmail.com "
        }
    },
    "Work Experience": {
        "id": "Work Experience",
        "sectionTitle": "Work Experience",
        "details": [
            {
                "certificationLink": "meracertificate.linkcom",
                "title": "Software Developer (SDE 1)",
                "startDate": "2023-10-03",
                "endDate": "2023-10-21",
                "companyName": "Meri Company",
                "location": "Mumbai",
                "points": [
                    "Collaborated with cross-functional teams to develop and implement software solutions, contributing to the successful delivery of X projects. Demonstrated proficiency in debugging and troubleshooting complex code, fostering a culture of shared knowledge and problem-solving.",
                    "Played a key role in an Agile development environment, participating in sprint planning, daily stand-ups, and sprint demos. Implemented and maintained continuous integration pipelines, ensuring code quality and enabling rapid deployment cycles.",
                    " Contributed to the design and development of scalable systems, optimizing critical components for improved performance. Demonstrated proficiency in writing clean, efficient code, resulting in a XX% reduction in response times and enhancing overall user experience."
                ]
            }
        ]
    },
    "Projects": {
        "id": "Projects",
        "sectionTitle": "Projects",
        "details": [
            {
                "link": "deployedlink.com",
                "title": "NoteSync",
                "github": "githublink.com",
                "points": [
                    "Implemented a MongoDB Cloud database solution to ensure data security and optimize retrieval speed for seamless user experience..",
                    "Utilized Material-UI React components to create a responsive and elegant user interface, while also integrating essential functionalities such as adding and deleting notes.",
                    "Designed and developed a dynamic web application that facilitates efficient note-taking while ensuring respon\u0002siveness across various devices."
                ]
            },
            {
                "link": "deployedLink.com",
                "title": "CraftMyResume",
                "github": "githublink.com",
                "points": [
                    "Developed a user-centric web application that empowers individuals to create professional resumes with ease through an intuitive form-filling experience",
                    "Facilitating real-time resume preview and immediate download for users, ensuring prompt access to their pro\u0002fessionally crafted documents",
                    "Used a tech stack comprising React.js, JavaScript ES6+, and CSS3 to enhance the application’s functionality"
                ]
            }
        ]
    },
    "Education": {
        "id": "Education",
        "sectionTitle": "Education",
        "details": [
            {
                "title": "B. Tech in Electronics and Communication Engineering",
                "college": "Indian Institute of Information Technology, Surat",
                "startDate": "2023-10-11",
                "endDate": "2023-10-23",
                "grade": " CGPA: 8.49/10 (till 6 th semester)"
            }
        ]
    },
    "Achievement": {
        "id": "Achievement",
        "sectionTitle": "Achievement",
        "points": [
            "Tech Coordinator at Spring Fiesta 2023 (Cultural Event of IIIT Surat)",
            "Solved 500+ questions across all coding platforms.",
            "I successfully coordinated and managed a tech quiz event, engaging a diverse group of over 100 participants"
        ]
    },
    "Summary": {
        "id": "Summary",
        "sectionTitle": "",
        "detail": ""
    },
    "Skill": {
        "id": "Skill",
        "sectionTitle": "Skill",
        "detail": {
            "skillSub1": "Programming Languages",
            "skillSub2": "Computer Science ",
            "skillSub3": "Web Development",
            "skills1": "C, C++",
            "skills2": "Data Structure and Algorithms, DBMS, Object Oriented Programming",
            "skills3": "HTML, CSS ,JavaScript , ReactJs , Bootstrap , MySQL, Express ,NodeJs, MongoDB"
        }
    },
    "Profile Links": {
        "id": "Profile Links",
        "sectionTitle": "Profile Links",
        "detail": {
            "name1": " Leetcode",
            "name2": " GeeksForGeeks",
            "name3": " Coding Ninjas",
            "name4": "",
            "name5": "",
            "link1": "https://leetcode.com/Rishabh3007/",
            "link2": "https://auth.geeksforgeeks.org/user/jainrishabh3007/",
            "link3": "https://www.codingninjas.com/studio/profile/Rishabh3007",
            "link4": "",
            "link5": ""
        }
    }
};

// console.log(preFilledInformation['Basic Info']);

  // useEffect(()=>{
  //   console.log(resumeInformation)
  // },[resumeInformation])

  return (
    <div className={styles.container}>
        <p className={styles.heading}>Resume Forge</p>
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

            <button 
              onClick={() => setResumeInformation(preFilledInformation)}
              style={
                {
                  width: "17.8%",
                  margin: "0 auto",
                  backgroundColor: "#5CDB95",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border: "none",
                  outline: "none",
                  fontSize: "1rem"
                }
              }
            >
            pre fill data
            </button>
            

            <div className={styles.templates}>
              <button 
                onClick={() => handleTemplateClick('Template1')}
                className={`${selectedTemplate === "Template1" ? styles.templateActive: styles.templateInactive}` }
              >Template 1
              </button>
              <button 
                onClick={() => handleTemplateClick('Template2')}
                className={`${selectedTemplate === "Template2" ? styles.templateActive: styles.templateInactive}` }
              >Template 2
              </button>
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