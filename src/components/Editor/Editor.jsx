import React, { useEffect, useState } from 'react'
import styles from "./Editor.module.css"
import InputControl from '../InputControl/InputControl'
import { X } from 'react-feather';

function Editor(props) {
    const { sections, information } = props;
    console.log(information);

    const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0]);

    const [activeInformation, setActiveInformation] = useState(information[sections[Object.keys(sections)[0]]]);

    const workExpBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    placeholder="Enter Title eg. front-end developer" 
                />
                <InputControl
                    label="Company Name"
                    placeholder="Enter Company Name eg. Google" 
                />  
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    placeholder="Enter Start Date" 
                />
                <InputControl
                    label="End Date"
                    placeholder="Enter End Date" 
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Location"
                    placeholder="Enter Location" 
                />
                <InputControl
                    label="certificate Link"
                    placeholder="Enter certificate Link" 
                />
            </div>

            <div className={styles.column}>
                <label> Enter work description</label>
                <InputControl placeholder="Line 1" />
                <InputControl placeholder="Line 2" />
                <InputControl placeholder="Line 3" />
            </div>
        </div>
    );

    const projectBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    placeholder="Enter Title eg. chat app" 
                />
                <InputControl
                    label="Overview"
                    placeholder="Enter basic overview" 
                />  
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Deployed Link"
                    placeholder="Enter Deployed Link" 
                />
                <InputControl
                    label="Github Link"
                    placeholder="Enter Github Link" 
                />
            </div>
            
            <div className={styles.column}>
                <label> Enter Project description</label>
                <InputControl placeholder="Line 1" />
                <InputControl placeholder="Line 2" />
                <InputControl placeholder="Line 3" />
            </div>
        </div>
    );

    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="College/School Name"
                    placeholder="Enter College/School Name" 
                />
                <InputControl
                    label="Qualification"
                    placeholder="Enter Qualification eg. B.Tech" 
                />  
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    placeholder="Enter Start Date" 
                />
                <InputControl
                    label="End Date"
                    placeholder="Enter End Date" 
                />
            </div>
        </div>
    );

    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Name"
                    placeholder="Enter Name" 
                />
                <InputControl
                    label="Title"
                    placeholder="Enter Title eg. front-end developer" 
                />  
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Linkedin Link"
                    placeholder="Enter Linkedin Link" 
                />
                <InputControl
                    label="Github Link"
                    placeholder="Enter Github Link" 
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Email"
                    placeholder="Enter Email" 
                />
                <InputControl
                    label="Phone Number"
                    placeholder="Enter Phone Number" 
                />
            </div>
        </div>
    );

    const achievementsBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>List Your Achievement</label>
                <InputControl placeholder="Line 1" />
                <InputControl placeholder="Line 2" />
                <InputControl placeholder="Line 3" />
            </div>
        </div>
    );

    const summaryBody = (
        <div className={styles.detail}>
        <InputControl label="Summary" placeholder="Enter Summary" />
        </div>
    );
    
    const otherBody = (
        <div className={styles.detail}>
            <InputControl label="Other" placeholder="Enter Other" />
        </div>
    );

    const generateBody = ()=>{
        switch(sections[activeSectionKey]){
            case sections.basicInfo: return basicInfoBody;
            case sections.workExp: return workExpBody;
            case sections.project: return projectBody;
            case sections.education: return educationBody;
            case sections.achievements: return achievementsBody;
            case sections.summary: return summaryBody;
            case sections.other: return otherBody;
            default: return null;
        }
    }


  return (
    <div className={styles.container}>
        <div className={styles.header}>
            {Object.keys(sections).map(item => (
                <div 
                    className={`${styles.section} ${activeSectionKey === item ? styles.active : ""}`} 
                    key={item}
                    onClick={() => setActiveSectionKey(item)}
                >
                    {sections[item]}
                </div>
            )
            )}
        </div>

        <div className={styles.body}>
            <div className={styles.chips}>
                <div className={styles.chip}>
                    <p>Project 1</p>
                    <X />
                </div>
                
            </div>
            {generateBody()}
        </div>
    </div>
  )
}

export default Editor