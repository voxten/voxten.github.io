import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../wrapper";
import { groupProjects } from "../constants";
import { soloProjects } from "../constants";
import { fadeIn, fadeInProjects, textVariant } from "../utils/motion";
import React, { useState } from "react";

const ProjectCard = ({ name, description, image, tags, source_code_link, index, download_link, downloadable }) => {
	return (
		<motion.div variants={fadeInProjects("up", "spring", index * 0.5, 0.75)}>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
				<div className="relative w-full h-[230px]">
					<img src={image} alt={name} className="w-full h-full object-cover rounded-2xl cursor-pointer"
						 onClick={() => window.open(source_code_link, "_blank")}
					/>
				</div>
				
				<div className="mt-5">
					<h3 className="text-white text-[24px] font-bold">{name}</h3>
					<p className="text-secondary text-[14px] mt-2">{description}</p>
				</div>

				<div className="flex flex-wrap gap-2 mt-4">
					{tags.map((tag) => (
						<p key={tag.name} className={`${tag.color} text-[14px]`}>
							{tag.name}
						</p>
					))}
				</div>

				{downloadable && (
					<div className="gap-2 mt-4 cursor-pointer" onClick={() => {window.open(download_link, "_blank")}}>
						Download
					</div>
				)}
			</div>
		</motion.div>
	);
};

const Projects = () => {
	const [isGroupProjects, setIsGroupProjects] = useState(true);
	
	const handleGroupProjectsClick = () => {
		setIsGroupProjects(true);
	};

	const handleSoloProjectsClick = () => {
		setIsGroupProjects(false);
	};
	
	const projects = isGroupProjects ? groupProjects : soloProjects;

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
					Following projects showcase my skills and knowledge through real-world examples of my work. Every
					project is described in detail and includes a link to the source code as well as a live demo. It
					showcases my abilities in problem solving, working with different technologies and managing
					projects.
				</motion.p>
			</div>
			<motion.div variants={fadeIn("up", "spring", 0.75)}>
			<div className="flex justify-center" style={{paddingTop: '20px'}}>
				<button
					onClick={handleGroupProjectsClick}
					className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-md ${isGroupProjects ? 'bg-blue-700' : ''}`}
				>
					Group Projects
				</button>
				<button
					onClick={handleSoloProjectsClick}
					className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md ${!isGroupProjects ? 'bg-blue-700' : ''}`}
				>
					Solo Projects
				</button>
			</div>
			</motion.div>

			<motion.div variants={fadeIn("up", "spring", 0.50)}>
			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} {...project} index={index} />
				))}
			</div>
			</motion.div>
		</>
	);
};

export default SectionWrapper(Projects, "projects");