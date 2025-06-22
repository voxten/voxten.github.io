import {useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import {About, Contact, Header, Navbar, Projects, StarsCanvas, Skills, CreateCollection,} from "./components";
import ProjectModal from "./components/projects/ProjectModal";

const App = () => {
	const [selectedProject, setSelectedProject] = useState(null);

	useEffect(() => {
		if (selectedProject) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [selectedProject]);

	return (
		<BrowserRouter>
			<div className="bg-primary">
				<Navbar />
				<div className="bg-header-pattern bg-no-repeat bg-center">
					<div className="relative z-0">
						<Header />
						<StarsCanvas />
					</div>
				</div>
				<About />
				<div className="relative z-0">
					<Skills />
				</div>
				<div className="relative z-0">
					<Projects setSelectedProject={setSelectedProject} />
					<StarsCanvas />
				</div>
				<Contact />

				{/* Global Modal */}
				{selectedProject && (
					<ProjectModal
						project={selectedProject}
						onClose={() => setSelectedProject(null)}
					/>
				)}
			</div>
		</BrowserRouter>
	);
};

export default App;
