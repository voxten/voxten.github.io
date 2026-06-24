import React, { useEffect, useState } from "react";
import { firestore } from "../firebase.js";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWrapper } from "../utils/wrapper/index.js";
import ProjectCard from "./projects/ProjectCard.jsx";
import FilterBar from "./projects/FilterBar.jsx";

const Projects = ( {setSelectedProject} ) => {
    const [allProjects, setAllProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [excludeMode, setExcludeMode] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectQuery = query(collection(firestore, "projects"), orderBy("id", "asc"));
                const snapshot = await getDocs(projectQuery);
                const projects = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                    tags: Object.values(doc.data().tags || {})
                }));
                setAllProjects(projects);
                setFilteredProjects(projects);
            } catch (err) {
                console.error("Error fetching projects:", err);
            }
        };

        fetchProjects();
    }, []);

    useEffect(() => {
        if (selectedTags.length === 0) {
            setFilteredProjects(allProjects);
            return;
        }

        const filter = (project) => {
            const tagNames = project.tags.map(t => t.name);
            return excludeMode
                ? !selectedTags.some(tag => tagNames.includes(tag))
                : selectedTags.every(tag => tagNames.includes(tag));
        };

        setFilteredProjects(allProjects.filter(filter));
    }, [selectedTags, excludeMode, allProjects]);

    return (
        <>
            <motion.div variants={textVariant()} className="flex flex-col gap-1">
            <span className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase">
                My work
            </span>
                <h2 className="text-white font-extrabold md:text-[56px] sm:text-[46px] text-[36px] tracking-tight">
                    Projects
                </h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-gray-400 text-[16px] md:text-[17px] max-w-3xl leading-[28px] border-l-2 border-indigo-500/30 pl-4 py-1"
            >
                Projects showcasing my skills through real-world examples.
            </motion.p>

            <FilterBar
                allProjects={allProjects}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                excludeMode={excludeMode}
                setExcludeMode={setExcludeMode}
            />

            <div className="mt-16 flex flex-wrap gap-7 justify-start">
                {filteredProjects.map((project, i) => (
                    <ProjectCard
                        key={project.id}
                        index={i}
                        project={project}
                        onClick={() => {
                            console.log("Card clicked:", project.name);
                            setSelectedProject(project);
                        }}

                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Projects, "projects");