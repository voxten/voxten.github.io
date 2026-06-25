import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const ProjectCard = ({ project, onClick, index }) => (
    <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn("", "", index * 0.1, 1)}
        whileHover={{ y: -6 }}
        onClick={onClick}
        /* w-full handles mobile, sm:w-auto preserves your desktop grid */
        className="cursor-pointer group relative w-full sm:w-auto"
    >
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

        <div className="bg-gradient-to-b from-gray-900/80 to-gray-900/40 p-4 rounded-2xl sm:w-[360px] w-full border border-white/5 backdrop-blur-md transition-all duration-300 shadow-xl group-hover:border-white/10 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">

            <div className="relative w-full h-48 overflow-hidden rounded-xl bg-black/40 border border-white/5">
                <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60" />
            </div>

            <h3 className="text-white text-lg font-bold mt-4 tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
                {project.name}
            </h3>

            <div className="flex flex-wrap gap-1.5 mt-2.5">
                {project.tags.slice(0, 3).map((tag) => (
                    <span
                        key={tag.name}
                        className="text-[10px] font-medium tracking-wide px-2.5 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/5 backdrop-blur-sm"
                    >
                        {tag.name}
                    </span>
                ))}
            </div>

            {(project.downloadable || project.isWebsite) && (
                <div className="mt-4 pt-3 border-t border-white/5 text-xs font-semibold uppercase tracking-wider text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200 flex items-center gap-1.5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d={project.isWebsite
                                ? "M14 5h5.586a1 1 0 01.707 1.707l-14 14a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l14-14A1 1 0 0114 5z"
                                : "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            }
                        />
                    </svg>
                    <span>{project.isWebsite ? "Launch Site" : "Get Download"}</span>
                </div>
            )}

        </div>
    </motion.div>
);

export default ProjectCard;