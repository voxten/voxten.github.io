import React from 'react';
import { SectionWrapper } from "../wrapper/index.js";
import { skills } from "../constants";
import { fadeIn, slideIn, textVariant } from "../utils/motion.js";
import { motion } from "framer-motion";
import { styles } from "../styles.js";

const Skill = ({ icon, name, percentage, index }) => {
  return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 3)}>
      <span className="skill-box">
          <span className="skill-holder">
              <img alt="icon" src={icon} style={{ width: '40px', height: '40px' }} />
              <h3 className="title">{name}</h3>
          </span>
          <div className="skill-bar">
              <span className="skill-per" style={{ width: `${percentage}%` }}>
                  <span className="tooltip">{percentage}</span>
              </span>
          </div>
      </span>
      </motion.div>
  );
};

const SkillsPanel = () => {
    return (
        <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
                Skills
            </p>
            <h2 className={styles.sectionHeadText}>Skills</h2>
        </motion.div>

    <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
        Making games in Unity is something I want to do on Full Time no matter what. Despite that's not my main activity I'm really enjoying coding web pages.
    </motion.p>
        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)} className="box">
            {skills.map((skill, index) => (
                <Skill key={`skills-${index}`} icon={skill.icon} name={skill.name} percentage={skill.percentage} />
            ))}
        </motion.div></>
    );
};

export default SectionWrapper(SkillsPanel, "skills");