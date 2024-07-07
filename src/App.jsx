import { BrowserRouter } from "react-router-dom";
import { About, Contact, Header, Navbar, Works, StarsCanvas, Skills } from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
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
					<StarsCanvas />
				</div>
				<Works />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
