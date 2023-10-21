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
  const [selectedTemplate, setSelectedTemplate] = useState("SDETemplate");

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
            "name": "My Name",
            "title": "Software Developer",
            "linkedin": "linkedin.com",
            "phone": "1234567890",
            "email": "myemail@gmail.com"
        }
    },
    "Work Experience": {
        "id": "Work Experience",
        "sectionTitle": "Work Experience",
        "details": [
            {
                "certificationLink": "certificate.com",
                "title": "software developer",
                "startDate": "2023-10-08",
                "endDate": "2023-10-25",
                "companyName": "Big Company",
                "location": "Mumbai",
                "points": [
                    "Collaborated with team to develop and implement software solutions, contributing to the successful delivery of X Project.",
                    "Implemented and maintained continuous integration pipelines, ensuring code quality and enabling rapid deployment cycles.",
                    "Collaborated with cross-functional teams to develop and implement software solutions, contributing to the successful delivery of X projects. Demonstrated proficiency in debu"
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
                "title": "chat app",
                "github": "githubrepo.com",
                "points": [
                    "Developed a real-time chat application using like WebSocket and Socket.IO, enabling instant communication between users.",
                    " Implemented secure user authentication and authorization mechanisms, ensuring data privacy and access control through technologies like JWT (JSON Web Tokens) and OAuth.",
                    "Designed the application to be responsive across various devices and browsers, ensuring a seamless user experience on both desktop and mobile platforms."
                ]
            },
            {
                "link": "deployedlink.com",
                "title": "E-Commerce",
                "github": "githubrepo.com",
                "points": [
                    "developed of a full-stack e-commerce platform incorporating features such as product listings, authentication, secure payment.",
                    "Designed and implemented a user-friendly interface with a focus on responsive design, resulting in an intuitive shopping experience across desktop and mobile devices.",
                    "Integrated popular payment gateways Stripe to facilitate secure transactions, ensuring a seamless checkout process for customers and boosting conversion rates."
                ]
            }
        ]
    },
    "Education": {
        "id": "Education",
        "sectionTitle": "Education",
        "details": [
            {
                "title": "B-tech",
                "college": "MY College",
                "startDate": "2023-10-16",
                "endDate": "2023-10-29",
                "grade": "CGPA: XX/10"
            }
        ]
    },
    "Achievement": {
        "id": "Achievement",
        "sectionTitle": "Achievement",
        "points": [
            "Led a team of X members to successfully deliver [project], resulting in a XX% improvement in [relevant metric]",
            " Recognized for providing innovative solutions to challenges, leading to a XX% reduction in [specific metric] ",
            " Played a pivotal role in [specific initiative/project] that led to a XX% increase in [revenue/sales/efficiency]"
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
            "skillSub1": "Subjects",
            "skillSub2": "Technical",
            "skillSub3": "Soft Skills",
            "skills1": "All, My, Core, Subjects",
            "skills2": "All, My, Technical, Skills",
            "skills3": "All, My, Soft, Skills"
        }
    },
    "Profile Links": {
        "id": "Profile Links",
        "sectionTitle": "Profile Links",
        "detail": {
            "name1": "profile1",
            "name2": "profile2",
            "name3": "profile3",
            "name4": "profile4",
            "name5": "",
            "link1": "profile.com",
            "link2": "profile.com",
            "link3": "profile.com",
            "link4": "profile.com",
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
              className={styles.prefillButton}
            >
            pre fill data
            </button>
            

            <div className={styles.templates}>
              <button 
                onClick={() => handleTemplateClick('SDETemplate')}
                className={`${selectedTemplate === "SDETemplate" ? styles.templateActive: styles.templateInactive}` }
              >SDE Template
              </button>
              <button 
                onClick={() => handleTemplateClick('SectionTemplate')}
                className={`${selectedTemplate === "SectionTemplate" ? styles.templateActive: styles.templateInactive}` }
              >Section Template
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