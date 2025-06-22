import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../wrapper";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";
import FilterBar from "../components/projects/FilterBar";

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
            <motion.div variants={textVariant()}>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My work</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects</h2>
            </motion.div>

            <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                Projects showcasing my skills through real-world examples.
            </motion.p>

            <FilterBar
                allProjects={allProjects}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                excludeMode={excludeMode}
                setExcludeMode={setExcludeMode}
            />

            {/* Changed justify-center to justify-start */}
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