import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import LeadershipSkills from "./pages/LeadershipSkills";
import ExperienceProjects from "./pages/ExperienceProjects";
import Testimonials from "./pages/Testimonials";
import AboutMe from "./pages/AboutMe";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<LandingPage />} />
					<Route path="leadership-skills" element={<LeadershipSkills />} />
					<Route path="experience-projects" element={<ExperienceProjects />} />
					<Route path="testimonials" element={<Testimonials />} />
					<Route path="about-me" element={<AboutMe />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
