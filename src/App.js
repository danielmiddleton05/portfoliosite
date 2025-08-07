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
			<div className="flex flex-col min-h-screen bg-gray-100">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<LandingPage />} />
						<Route path="leadership-skills" element={<LeadershipSkills />} />
						<Route path="experience-projects" element={<ExperienceProjects />} />
						<Route path="testimonials" element={<Testimonials />} />
						<Route path="about-me" element={<AboutMe />} />
					</Route>
				</Routes>
				<footer className="w-full mt-16">
					<div
						className="w-full h-24 flex items-center"
						style={{
							backgroundImage: "url('/bannerBackground.png')",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}>
						<div className="max-w-4xl mx-auto w-full flex items-center h-full">
							<a href="mailto:daniel.middleton05@gmail.com" className="text-white text-lg font-semibold ml-4 hover:underline">
								Contact Me
							</a>
						</div>
					</div>
				</footer>
			</div>
		</Router>
	);
}

export default App;
