import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const sections = [
	{
		title: "Leadership Skills",
		path: "/leadership-skills",
		color: "bg-primary",
		lightColor: "bg-secondary",
	},
	{
		title: "Experience",
		path: "/experience-projects",
		color: "bg-secondary",
		lightColor: "bg-accent",
	},
	//{
	//	title: "Testimonials",
	//	path: "/testimonials",
	//	color: "bg-accent",
	//	lightColor: "bg-soft",
	//},
	{
		title: "About Me",
		path: "/about-me",
		color: "bg-primary",
		lightColor: "bg-soft",
	},
];

function LandingPage() {
	const navigate = useNavigate();
	const containerRefs = useRef([]);
	const [visibleSections, setVisibleSections] = useState([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = parseInt(entry.target.getAttribute("data-index"));
					if (entry.isIntersecting) {
						setVisibleSections((prev) => (prev.includes(index) ? prev : [...prev, index]));
					}
				});
			},
			{ threshold: 0.5 }
		);

		containerRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => {
			containerRefs.current.forEach((ref) => {
				if (ref) observer.unobserve(ref);
			});
		};
	}, []);

	return (
		<div className="min-h-screen bg-gray-100 pt-10">
			<h2 className="text-4xl font-bold text-primary text-center mb-16">Leadership Portfolio</h2>

			<div className="flex flex-col items-center">
				{sections.map((section, index) => (
					<div key={section.path} data-index={index} ref={(el) => (containerRefs.current[index] = el)} className={`transition-opacity duration-700 ease-in-out w-full max-w-2xl mb-20 ${visibleSections.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
						<button onClick={() => navigate(section.path)} className="w-full text-center rounded-lg overflow-hidden shadow-md focus:outline-none">
							<div className={`${section.color} text-white text-2xl font-semibold py-6 px-8`}>{section.title}</div>
							<div className={`${section.lightColor} text-gray-800 text-black py-4 px-8`}>Click to learn more about {section.title}.</div>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default LandingPage;
