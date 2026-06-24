import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { SectionWrapper } from "../utils/wrapper/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import { firestore } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Skill = ({ icon, name, percentage, index }) => {
    return (
        <div className="w-full p-4 bg-gray-900/40 border border-white/5 backdrop-blur-xl rounded-2xl shadow-lg">
            <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-3">
                    <div className="p-1 rounded-xl bg-black/20 border border-white/5">
                        <img alt="icon" src={icon} className="w-10 h-10 object-contain" />
                    </div>
                    <h3 className="text-white font-bold text-base tracking-tight">{name}</h3>
                </div>

                <div className="h-2.5 w-full bg-black/40 rounded-full border border-white/5 relative overflow-visible mt-2">
                    <motion.div
                        className="h-full bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full relative"
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                    >
                        <span className="absolute -top-7 right-0 translate-x-1/2 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-600/20 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-indigo-600">
                            {percentage}%
                        </span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const SkillsPanel = () => {
    const [skills, setSkills] = useState([]);
    const [selectedCollection, setSelectedCollection] = useState('skillsGame');
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const fetchSkills = async (collectionName) => {
            try {
                const skillsQuery = query(collection(firestore, collectionName), orderBy('percentage', 'desc'));
                const skillsSnapshot = await getDocs(skillsQuery);
                const skillsData = skillsSnapshot.docs.map(doc => doc.data());
                setSkills(skillsData);
                setAnimationKey(prevKey => prevKey + 1);
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
        <div className="max-w-7xl mx-auto px-4">
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
            <motion.div
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="flex flex-col gap-1"
            >
                <span className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase">
                    Skills
                </span>
                <h2 className="text-white font-extrabold md:text-[56px] sm:text-[46px] text-[36px] tracking-tight">
                    Skills
                </h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-4 text-gray-400 text-[16px] md:text-[17px] max-w-3xl leading-[28px] border-l-2 border-indigo-500/30 pl-4 py-1"
            >
                I specialize in creating immersive games using Unity, focusing on C# scripting and interactive gameplay mechanics. Additionally, I have expertise in web development, including HTML, CSS, JavaScript, and modern frameworks such as React. My skills enable me to deliver high-quality digital experiences, combining robust game design with dynamic web solutions.
            </motion.p>

            {/* Segmented Controls Controller */}
            <div className="flex justify-center mt-12">
                <div className="flex p-1 bg-black/40 rounded-xl border border-white/5 backdrop-blur-sm w-full sm:w-auto">
                    <button
                        onClick={() => handleButtonClick('skillsGame')}
                        className={`flex-1 sm:flex-initial text-center py-1.5 px-4 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                            selectedCollection === 'skillsGame'
                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                                : "text-gray-400 hover:text-gray-200"
                        }`}
                    >
                        Game Development
                    </button>
                    <button
                        onClick={() => handleButtonClick('skillsWeb')}
                        className={`flex-1 sm:flex-initial text-center py-1.5 px-4 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                            selectedCollection === 'skillsWeb'
                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                                : "text-gray-400 hover:text-gray-200"
                        }`}
                    >
                        Web Development
                    </button>
                    <button
                        onClick={() => handleButtonClick('skillsOther')}
                        className={`flex-1 sm:flex-initial text-center py-1.5 px-4 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                            selectedCollection === 'skillsOther'
                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                                : "text-gray-400 hover:text-gray-200"
                        }`}
                    >
                        Other
                    </button>
                </div>
            </div>

            {/* Grid display layout */}
            <div
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
                key={animationKey}
            >
                {skills.map((skill, index) => (
                    <Skill key={`skills-${animationKey}-${index}`} icon={skill.icon} name={skill.name} percentage={skill.percentage} index={index} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(SkillsPanel, "skills");