import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

// Keep critical above-the-fold elements static for immediate paint (FCP/LCP)
import { Navbar, Header } from "./components";

const About = lazy(() => import("./components").then(m => ({ default: m.About })));
const Skills = lazy(() => import("./components").then(m => ({ default: m.Skills })));
const Projects = lazy(() => import("./components").then(m => ({ default: m.Projects })));
const Contact = lazy(() => import("./components").then(m => ({ default: m.Contact })));
const ProjectModal = lazy(() => import("./components/projects/ProjectModal"));

const App = () => {
	const [selectedProject, setSelectedProject] = useState(null);

	useEffect(() => {
		if (selectedProject) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [selectedProject]);

	// Use a lightweight layout fallback for sections still loading on scroll
	const renderFallback = <div className="h-40 w-full bg-primary" />;

	return (
		<BrowserRouter>
			<LazyMotion features={domAnimation}>
				<div className="bg-primary min-h-screen text-white">
					<Navbar />
					<div className="relative z-0">
						<Header />
					</div>

					<Suspense fallback={renderFallback}>
						<About />
					</Suspense>

					<div className="relative z-0">
						<Suspense fallback={renderFallback}>
							<Skills />
						</Suspense>
					</div>

					<div className="relative z-0">
						<Suspense fallback={renderFallback}>
							<Projects setSelectedProject={setSelectedProject} />
						</Suspense>
					</div>

					<Suspense fallback={renderFallback}>
						<Contact />
					</Suspense>

					{/* Global Modal */}
					<Suspense fallback={null}>
						{selectedProject && (
							<ProjectModal
								project={selectedProject}
								onClose={() => setSelectedProject(null)}
							/>
						)}
					</Suspense>
				</div>
			</LazyMotion>
		</BrowserRouter>
	);
};

export default App;