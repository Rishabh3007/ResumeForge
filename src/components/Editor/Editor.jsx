import React, { useEffect, useState } from "react";
import styles from "./Editor.module.css";
import InputControl from "../InputControl/InputControl";
import { X } from "react-feather";

function Editor(props) {
  const { sections, information } = props;

  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );

  const [activeDetailIndex, setActiveDetailIndex] = useState(0);

  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );

  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  });

  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter Title eg. front-end developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Company Name"
          placeholder="Enter Company Name eg. Google"
          value={values.companyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          placeholder="Enter Start Date"
          type=  "date"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type=  "date"
          placeholder="Enter End Date"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Location"
          placeholder="Enter Location"
          value={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
        <InputControl
          label="certificate Link"
          placeholder="Enter certificate Link"
          value={values.certificationLink}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              certificationLink: event.target.value,
            }))
          }
        />
      </div>

      <div className={styles.column}>
        <label> Enter work description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );

  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter Title eg. chat app"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter Deployed Link"
          value={values.link}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter Github Link"
          value={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>

      <div className={styles.column}>
        <label> Enter Project description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );

  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          value={values.title}
          placeholder="Enter title eg. B-tech"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="College/School Name"
          placeholder="Enter College/School Name"
          value={values.college}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, college: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          placeholder="Enter Start Date"
          type=  "date"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          placeholder="Enter End Date"
          type=  "date"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label = "Grade"
          placeholder="Enter Grade"
          value={values.grade}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, grade: event.target.value }))
          }
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
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Title"
          placeholder="Enter Title eg. front-end developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          placeholder="Enter Linkedin Link"
          value={values.linkedin}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          placeholder="Enter Email"
          value={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Phone Number"
          placeholder="Enter Phone Number"
          value={values.phone}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List Your Achievement</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );

  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
        placeholder="Enter Summary"
        value={values.summary}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        }
      />
    </div>
  );

  const skillBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl 
          label="Skill Subject"
          placeholder="Enter Skill Subject eg. soft or technical skill"
          value={values.skillSub1}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, skillSub1: event.target.value }))
          }
        />
        <InputControl 
          label="Skills"
          placeholder="Enter Skills related to subject"
          value={values.skills1}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, skills1: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl 
          label="Skill Subject"
          placeholder="Enter Skill Subject eg. soft or technical skill"
          value={values.skillSub2}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, skillSub2: event.target.value }))
          }
        />
        <InputControl 
          label="Skills"
          placeholder="Enter Skills related to subject"
          value={values.skills2}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, skills2: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl 
          label="Skill Subject"
          placeholder="Enter Skill Subject eg. soft or technical skill"
          value={values.skillSub3}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, skillSub3: event.target.value }))
          }
        />
        <InputControl 
          label="Skills"
          placeholder="Enter Skills related to subject"
          value={values.skills3}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, skills3: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const profileLinksBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Profile Name"
          placeholder="Enter name of profile eg. Leetcode"
          value={values.name1}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name1: event.target.value }))
          }
        />
        <InputControl
          label = "Profile Link"
          placeholder="Enter link of profile"
          value={values.link1}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link1: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Profile Name"
          placeholder="Enter name of profile eg. Codechef"
          value={values.name2}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name2: event.target.value }))
          }
        />
        <InputControl
          label = "Profile Link"
          placeholder="Enter link of profile"
          value={values.link2}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link2: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Profile Name"
          placeholder="Enter name of profile eg. Codeforces"
          value={values.name3}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name3: event.target.value }))
          }
        />
        <InputControl
          label = "Profile Link"
          placeholder="Enter link of profile"
          value={values.link3}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link3: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Profile Name"
          placeholder="Enter name of profile eg. Hackerrank"
          value={values.name4}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name4: event.target.value }))
          }
        />
        <InputControl
          label = "Profile Link"
          placeholder="Enter link of profile"
          value={values.link4}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link4: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Profile Name"
          placeholder="Enter name of profile eg. Hackerearth"
          value={values.name5}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name5: event.target.value }))
          }
        />
        <InputControl
          label = "Profile Link"
          placeholder="Enter link of profile"
          value={values.link5}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link5: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.skill:
        return skillBody;
      case sections.profileLinks:
        return profileLinksBody;
      default:
        return null;
    }
  };

  const handleSubmission = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo : {
        const tempDetail = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          phone: values.phone,
          email: values.email,
        };

        props.setInformation((prev)=>({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.workExp: {
        const tempDetail = {
          certificationLink: values.certificationLink,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          companyName: values.companyName,
          location: values.location,
          points: values.points,
        };
        const tempDetails = [...information[sections.workExp]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.project: {
        const tempDetail = {
          link: values.link,
          title: values.title,
          github: values.github,
          points: values.points,
        };
        const tempDetails = [...information[sections.project]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.project]: {
            ...prev[sections.project],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
          grade: values.grade,
        };
        const tempDetails = [...information[sections.education]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.achievement: {
        const tempPoints = values.points;

        props.setInformation((prev) => ({
          ...prev,
          [sections.achievement]: {
            ...prev[sections.achievement],
            points: tempPoints,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.summary: {
        const tempDetail = values.summary;

        props.setInformation((prev) => ({
          ...prev,
          [sections.summary]: {
            ...prev[sections.summary],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.skill: {
        const tempDetail = {
          skillSub1: values.skillSub1,
          skillSub2: values.skillSub2,
          skillSub3: values.skillSub3,
          skills1: values.skills1,
          skills2: values.skills2,
          skills3: values.skills3,
        };

        props.setInformation((prev)=>({
          ...prev,
          [sections.skill]: {
            ...prev[sections.skill],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.profileLinks: {
        const tempDetail = {
          name1: values.name1,
          name2: values.name2,
          name3: values.name3,
          name4: values.name4,
          name5: values.name5,
          link1: values.link1,
          link2: values.link2,
          link3: values.link3,
          link4: values.link4,
          link5: values.link5,
        };

        props.setInformation((prev)=>({
          ...prev,
          [sections.profileLinks]: {
            ...prev[sections.profileLinks],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      default:
        return null;
    }
  };

  const handleAddNew = () => {
    const details = activeInformation?.details;
    if(!details) return;
    const lastDetail = details.slice(-1)[0];
    if(!Object.keys(lastDetail).length) return;
    details.push({});

    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));
    setActiveDetailIndex(details?.length - 1);
  }

  const handleDeleteDetail = (index) => {
    const details = activeInformation?.details ? [...activeInformation?.details] : "";
    if(!details) return;
    details.splice(index, 1);
    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));
    setActiveDetailIndex((prev) => (prev === index ? 0 : prev-1));
  }

  useEffect(() => {
    const activeInfo = information[sections[activeSectionKey]];
    setActiveInformation(activeInfo);
    setSectionTitle(sections[activeSectionKey]);
    setActiveDetailIndex(0);
    setValues({
        name: activeInfo?.detail?.name || "",
        link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
        certificationLink: activeInfo?.details
          ? activeInfo.details[0]?.certificationLink || ""
          : "",
        companyName: activeInfo?.details
          ? activeInfo.details[0]?.companyName || ""
          : "",
        college: activeInfo?.details
          ? activeInfo.details[0]?.college || ""
          : "",
        location: activeInfo?.details
          ? activeInfo.details[0]?.location || ""
          : "",
        startDate: activeInfo?.details
          ? activeInfo.details[0]?.startDate || ""
          : "",
        endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
        grade: activeInfo?.details ? activeInfo.details[0]?.grade || "" : "",
        points: activeInfo?.details
          ? activeInfo.details[0]?.points
            ? [...activeInfo.details[0]?.points]
            : ""
          : activeInfo?.points
          ? [...activeInfo.points]
          : "",
        title: activeInfo?.details
          ? activeInfo.details[0]?.title || ""
          : activeInfo?.detail?.title || "",
        linkedin: activeInfo?.detail?.linkedin || "",
        github: activeInfo?.details
          ? activeInfo.details[0]?.github || ""
          : activeInfo?.detail?.github || "",
        phone: activeInfo?.detail?.phone || "",
        email: activeInfo?.detail?.email || "",
        summary: activeInfo?.detail?.summary || "",
        skillSub1: activeInfo?.detail?.skillSub1 || "",
        skillSub2: activeInfo?.detail?.skillSub1 || "",
        skillSub3: activeInfo?.detail?.skillSub1 || "",
        skills1: activeInfo?.detail?.skills1 || "",
        skills2: activeInfo?.detail?.skills2 || "",
        skills3: activeInfo?.detail?.skills3 || "",
        name1: activeInfo?.detail?.name1 || "",
        name2: activeInfo?.detail?.name2 || "",
        name3: activeInfo?.detail?.name3 || "",
        name4: activeInfo?.detail?.name4 || "",
        name5: activeInfo?.detail?.name5 || "",
        link1: activeInfo?.detail?.link1 || "",
        link2: activeInfo?.detail?.link2 || "",
        link3: activeInfo?.detail?.link3 || "",
        link4: activeInfo?.detail?.link4 || "",
        link5: activeInfo?.detail?.link5 || "",
      });
    }, [activeSectionKey]);

  useEffect(()=>{
    setActiveInformation(information[sections[activeSectionKey]]);
  },[information])

  useEffect(()=>{
    const details = activeInformation?.details;
    if(!details) return;

    const activeInfo = information[sections[activeSectionKey]];
    setValues({
      link: activeInfo.details[activeDetailIndex]?.link || "",
      certificationLink:
        activeInfo.details[activeDetailIndex]?.certificationLink || "",
      companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
      location: activeInfo.details[activeDetailIndex]?.location || "",
      startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
      endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
      points: activeInfo.details[activeDetailIndex]?.points || "",
      title: activeInfo.details[activeDetailIndex]?.title || "",
      linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
      github: activeInfo.details[activeDetailIndex]?.github || "",
      college: activeInfo.details[activeDetailIndex]?.college || "",
      grade: activeInfo.details[activeDetailIndex]?.grade || "",
    });
  },[activeDetailIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections).map((item) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === item ? styles.active : ""
            }`}
            key={item}
            onClick={() => {
              setActiveSectionKey(item);
            }}
          >
            {sections[item]}
          </div>
        ))}
      </div>

      <div className={styles.body}>
        <InputControl
          label="Title"
          placeholder="Enter section Title"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
        />


        <div className={styles.chips}>
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
                <div
                  className={`${styles.chip} ${
                    activeDetailIndex === index ? styles.active : ""
                  }`}
                  key={item.title + index}
                  onClick={()=> setActiveDetailIndex(index)}
                >
                  <p>
                    {sections[activeSectionKey]} {index + 1}
                  </p>
                  <X onClick={(event)=>
                    {
                      event.stopPropagation();
                      handleDeleteDetail(index)
                    }}
                  />
                </div>
              ))
            : ""}
            {
              activeInformation?.details && activeInformation?.details?.length > 0 ? (
                <div className={styles.new} onClick={handleAddNew}>+New</div>
              ) : (
                ""
              )
            }
        </div>



        {generateBody()}

        <button onClick={handleSubmission}>Save</button>
      </div>
    </div>
  );
}

export default Editor;
