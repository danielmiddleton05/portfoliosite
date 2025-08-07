import React from "react";

export default function AboutMe() {
	return (
		<div className="flex flex-col bg-gray-100 pt-0">
			<div className="flex-1">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl font-bold text-primary mb-8 mt-8">About Me</h1>

					<section className="mb-12">
						<img src="/MyLogo.png" alt="Daniel Middleton Logo" className="mx-auto mb-6 w-64 h-64 object-contain rounded-full shadow-md" />
						<h2 className="text-2xl font-semibold text-secondary mb-4">Profile</h2>
						<p className="text-gray-800 text-lg leading-relaxed">
							I am a multidisciplinary professional with a passion for building effective, learner-centered solutions that fuse technology, design, and education. My leadership experience spans K–12 international schools, corporate teams, and higher education institutions. Whether coordinating instructional design efforts, developing web-based learning tools, or leading a department through change, I take pride in approaching challenges with empathy, innovation, and data-driven decision making.
							<br />
							<br />
							As an Instructional Technologist at Western Governors University, I collaborate with cross-functional teams to design, build, and refine Open edX courses that serve thousands of students. I am deeply involved in aligning curriculum with real-world goals and scaling success through automation, AI integration, and rigorous quality review.
							<br />
							<br />
							Previously, I served as Head of Department at an international school, leading a team of educators and managing a student-published digital yearbook that earned national recognition. My background also includes frontend development, digital content management, and consulting for global clients.
							<br />
							<br />
							When I’m not developing courses or designing interfaces, I enjoy time with my family, photography, strategy games, and indoor climbing.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-secondary mb-4">Tech Skills</h2>
						<ul className="text-gray-800 text-lg space-y-2">
							<li>HTML, CSS, JavaScript, Bootstrap, Tailwind</li>
							<li>React.js, Node.js, Express.js, Firebase</li>
							<li>MongoDB, MySQL, Git, NPM</li>
							<li>Python, Java</li>
							<li>Open edX, SCORM, LMS Integrations (Canvas, Schoology)</li>
							<li>AWS, Google Cloud, Azure</li>
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-semibold text-secondary mb-4">Soft Skills</h2>
						<ul className="text-gray-800 text-lg space-y-2">
							<li>Leadership & Mentorship</li>
							<li>Communication & Collaboration</li>
							<li>Cross-Cultural Competence</li>
							<li>Strategic Thinking</li>
							<li>Creative Problem Solving</li>
							<li>Feedback-Oriented Mindset</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-secondary mb-4">Education</h2>
						<ul className="text-gray-800 text-lg space-y-4">
							<li>
								<strong>Western Governors University</strong>
								<br />
								B.S. Computer Science, <em>In Progress (2025)</em>
							</li>
							<li>
								<strong>Moreland University</strong>
								<br />
								M.Ed. in Education (Globalization & Research), 2021
							</li>
							<li>
								<strong>Johnson University</strong>
								<br />
								B.S. Communications, 2012
							</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	);
}
