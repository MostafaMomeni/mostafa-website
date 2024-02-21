import React, { useState } from "react";
import Styles from "@/styles/Skills.module.css";
import CircularProgress from "@mui/joy/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";

export default function skills() {
  const [skillsValue, setSkillsValue] = useState([
    { id: 1, text: "HTML", value: 90 },
    { id: 2, text: "CSS", value: 80 },
    { id: 3, text: "java script", value: 80 },
    { id: 4, text: "React.js", value: 80 },
    { id: 5, text: "Redux", value: 30 },
    { id: 6, text: "next.js", value: 70 },
    { id: 7, text: "ui design", value: 50 },
  ]);
  const [abilityValue, setAbilityValue] = useState([
    { id: 1, text: "زبان انگلیسی", value: 20 },
    { id: 2, text: "کار تیمی", value: 70 },
    { id: 3, text: "توانایی تحمل فشار کاری زیاد", value: 80 },
    { id: 4, text: "منظم و وقت شناس", value: 80 },
    { id: 5, text: "دقت و توجه به جزئیات", value: 70 },
    { id: 6, text: "خلاقیت", value: 70 },
  ]);

  return (
    <>
      <h1 style={{ fontWeight: "bold" }}>توانایی ها</h1>
      <div className={Styles.skills_parent}>
        {skillsValue.map((item) => (
          <div className={Styles.item_skills}>
            <CircularProgress size="lg" determinate value={item.value}>
              {item.value}%
            </CircularProgress>
            <p className={Styles.text_skills}>{item.text}</p>
          </div>
        ))}
      </div>
      <br />
      {abilityValue.map((item) => (
        <div className="mt-3">
          <div className={Styles.title_ability}>
            <p style={{ fontWeight: "bold" }}>{item.text}</p>
            <p>{item.value}%</p>
          </div>
          <LinearProgress
            className={Styles.progress_bar}
            color="secondary"
            variant="determinate"
            value={item.value}
          />
        </div>
      ))}
    </>
  );
}
