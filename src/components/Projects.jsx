import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../wrapper";
import { fadeIn, textVariant } from "../utils/motion";
import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import {collection, getDocs, orderBy, query} from "firebase/firestore";

const ProjectCard = ({ name, description, image, tags, index, download_link, downloadable }) => {
	return (
		<motion.div
			initial="hidden"
			animate="show"
			variants={fadeIn("", "", index * 0.2, 1)}
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-2xl"

					/>
				</div>

				<div className="mt-5">
					<h3 className="text-white text-[24px] font-bold">{name}</h3>
					<p className="text-secondary text-[14px] mt-2">{description}</p>
				</div>

				<div className="flex flex-wrap gap-2 mt-4">
					{tags.map((tag, index) => (
						<p key={index} className={`${tag.color} text-[14px]`}>
							{tag.name}
						</p>
					))}
				</div>

				{downloadable && (
					<div className="gap-2 mt-4 cursor-pointer" onClick={() => window.open(download_link, "_blank")}>
						Download
					</div>
				)}
			</div>
		</motion.div>
	);
};

const Projects = () => {
	const [isGroupProjects, setIsGroupProjects] = useState(true);
	const [groupProjects, setGroupProjects] = useState([]);
	const [soloProjects, setSoloProjects] = useState([]);
	const [renderKey, setRenderKey] = useState(0);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const groupQuery = query(collection(firestore, 'groupProjects'), orderBy('id','asc'));
				const groupProjectsSnapshot = await getDocs(groupQuery);

				const soloQuery = query(collection(firestore, 'soloProjects'), orderBy('id', 'asc'));
				const soloProjectsSnapshot = await getDocs(soloQuery);

				const groupProjectsData = groupProjectsSnapshot.docs.map(doc => {
					const data = doc.data();
					data.tags = Object.values(data.tags); // Convert tags from object to array
					return data;
				});

				const soloProjectsData = soloProjectsSnapshot.docs.map(doc => {
					const data = doc.data();
					data.tags = Object.values(data.tags); // Convert tags from object to array
					return data;
				});

				setGroupProjects(groupProjectsData);
				setSoloProjects(soloProjectsData);
			} catch (error) {
				console.error("Error fetching projects: ", error);
			}
		};

		fetchProjects();
	}, []);

	const handleGroupProjectsClick = () => {
		if (!isGroupProjects) {
			setIsGroupProjects(true);
			setRenderKey(prevKey => prevKey + 1); // Change key to re-render and trigger animation
		}
	};

	const handleSoloProjectsClick = () => {
		if (isGroupProjects) {
			setIsGroupProjects(false);
			setRenderKey(prevKey => prevKey + 1); // Change key to re-render and trigger animation
		}
	};

	const projects = isGroupProjects ? groupProjects : soloProjects;

	return (
		<>
			<motion.div variants={textVariant()} initial="hidden" animate="show">
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					initial="hidden"
					animate="show"
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					Following projects showcase my skills and knowledge through real-world examples of my work. Every
					project is described in detail and includes a link to the source code as well as a live demo. It
					showcases my abilities in problem solving, working with different technologies and managing
					projects.
				</motion.p>
			</div>
			<motion.div variants={fadeIn("", "", 0.1, 1)} initial="hidden" animate="show">
				<div className="flex justify-center" style={{ paddingTop: '20px' }}>
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

			<motion.div key={renderKey} initial="hidden" animate="show" variants={fadeIn("", "", 0.1, 0.1)}>
				<div className="mt-20 flex flex-wrap gap-7">
					{projects && projects.map((project, index) => (
						<ProjectCard key={`project-${index}`} {...project} index={index} />
					))}
				</div>
			</motion.div>
		</>
	);
};

export default SectionWrapper(Projects, "projects");