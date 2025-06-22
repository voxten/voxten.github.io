import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const ProjectCard = ({ project, onClick, index }) => (
    <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn("", "", index * 0.1, 1)}
        whileHover={{ y: -5 }}
        onClick={onClick}
        className="cursor-pointer group"
    >
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full duration-300 shadow-lg hover:shadow-xl hover:shadow-indigo-900/20">
            <div className="relative w-full h-56 overflow-hidden rounded-xl">
                <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <h3 className="text-white text-xl font-bold mt-4">{project.name}</h3>

            <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.slice(0, 3).map((tag) => (
                    <span
                        key={tag.name}
                        className={`${tag.color} text-xs px-2 py-1 rounded-full`}
                    >
						{tag.name}
					</span>
                ))}
            </div>

            {(project.downloadable || project.isWebsite) && (
                <div className="mt-4 text-indigo-400 hover:text-indigo-300 transition-colors duration-200 flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={project.isWebsite
                                ? "M14 5h5.586a1 1 0 01.707 1.707l-14 14a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l14-14A1 1 0 0114 5z"
                                : "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            }
                        />
                    </svg>
                    {project.isWebsite ? "Preview" : "Download"}
                </div>
            )}

        </div>
    </motion.div>
);

export default ProjectCard;
