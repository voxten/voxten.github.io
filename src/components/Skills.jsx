import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { SectionWrapper } from "../wrapper/index.js";
import { fadeIn, slideIn, textVariant } from "../utils/motion.js";
import { styles } from "../styles.js";
import { firestore } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Skill = ({ icon, name, percentage, index }) => {
    return (
        <div>
            <span className="skill-box">
                <span className="skill-holder">
                    <img alt="icon" src={icon} style={{ width: '40px', height: '40px' }} />
                    <h3 className="title">{name}</h3>
                </span>
                <div className="skill-bar">
                    <motion.span
                        className="skill-per"
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                    >
                        <span className="tooltip">{percentage}</span>
                    </motion.span>
                </div>
            </span>
        </div>
    );
};

const SkillsPanel = () => {
    const [skills, setSkills] = useState([]);
    const [selectedCollection, setSelectedCollection] = useState('skillsGame');
    const [animationKey, setAnimationKey] = useState(0); // key to reset animations

    useEffect(() => {
        const fetchSkills = async (collectionName) => {
            try {
                const skillsQuery = query(collection(firestore, collectionName), orderBy('percentage', 'desc'));
                const skillsSnapshot = await getDocs(skillsQuery);
                const skillsData = skillsSnapshot.docs.map(doc => doc.data());
                setSkills(skillsData);
                setAnimationKey(prevKey => prevKey + 1); // increment key to reset animations
            } catch (error) {
                console.error("Error fetching skills: ", error);
            }
        };

        fetchSkills(selectedCollection);
    }, [selectedCollection]);

    const handleButtonClick = (collectionName) => {
        setSelectedCollection(collectionName);
    };

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
                I specialize in creating immersive games using Unity, focusing on C# scripting and interactive gameplay mechanics. Additionally, I have expertise in web development, including HTML, CSS, JavaScript, and modern frameworks such as React. My skills enable me to deliver high-quality digital experiences, combining robust game design with dynamic web solutions.
            </motion.p>

            <div className="flex justify-center" style={{ paddingTop: '20px' }}>
                <button
                    onClick={() => handleButtonClick('skillsGame')}
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-md ${selectedCollection === 'skillsGame' ? 'bg-blue-700' : ''}`}
                >
                    Game Development
                </button>
                <button
                    onClick={() => handleButtonClick('skillsWeb')}
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ${selectedCollection === 'skillsWeb' ? 'bg-blue-700' : ''}`}
                >
                    Web Development
                </button>
                <button
                    onClick={() => handleButtonClick('skillsOther')}
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md ${selectedCollection === 'skillsOther' ? 'bg-blue-700' : ''}`}
                >
                    Other
                </button>
            </div>

            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="box"
            >
                {skills.map((skill, index) => (
                    <Skill key={`skills-${animationKey}-${index}`} icon={skill.icon} name={skill.name} percentage={skill.percentage} index={index} />
                ))}
            </motion.div>
        </>
    );
};

export default SectionWrapper(SkillsPanel, "skills");
