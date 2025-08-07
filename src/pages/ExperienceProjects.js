import React from "react";

function ExperienceProjects() {
	const experience = [
		{
			role: "Instructional Technologist",
			company: "Western Governors University",
			duration: "September 2024 – Present",
			points: ["Collaborate with curriculum managers and university partners to design objective-driven, real-world–focused degree programs.", "Develop and revise competency-based course materials to align learning resources and assessments with course objectives.", "Build and maintain Open edX courses using HTML, CSS, and JavaScript, including AI integrations to enhance student outcomes."],
		},
		{
			role: "Web Developer and Designer (Contract)",
			company: "Monilis Design",
			duration: "September 2022 – September 2024",
			points: ["Created responsive eLearning platforms using React.js and Firebase.", "Developed accessible instructional content integrated into client LMS systems.", "Delivered visually appealing user interfaces and multimedia instructional assets, with clients from all over the world."],
		},
		{
			role: "Website Admin and Content Manager",
			company: "Gyeonggi Suwon International School",
			duration: "December 2019 – June 2023",
			points: ["Managed and updated school website using Finalsite CMS to reflect program goals.", "Trained staff on content management tools, streamlining updates and improving UX.", "Served as LMS lead, connecting platforms such as Canvas, Schoology, and PowerSchool."],
		},
		{
			role: "Publications and ToK Teacher / Head of Department",
			company: "Gyeonggi Suwon International School",
			duration: "July 2019 – June 2023",
			points: ["Led a team of 6 educators and redesigned the IB Theory of Knowledge curriculum for record-setting academic performance, resulting in the highest ToK score averages in the school's 20 year history.", "Developed new digital curriculum and won multiple NSPA awards for best international yearbook.", "Taught web design and digital communication with HTML5, CSS3, and Bootstrap."],
		},
		{
			role: "Design Consultant & Photographer",
			company: "Freelance / Knoxville, TN",
			duration: "August 2017 – June 2020",
			points: ["Provided frontend consultation and web design services to small businesses.", "Managed client projects from planning to execution with focus on UX and SEO.", "Delivered ongoing website support and optimization for engagement and relevance."],
		},
		{
			role: "Middle School Science Teacher",
			company: "International School of Qingdao",
			duration: "August 2013 – June 2017",
			points: ["Integrated NGSS standards into an international curriculum for grades 6–8.", "Facilitated STEM projects and mentored new teachers in planning and management.", "Improved student assessment scores by 12% through data-driven instruction."],
		},
		{
			role: "Store Manager",
			company: "RadioShack",
			duration: "May 2010 – July 2013",
			points: ["Led a team of 6–8 employees, developed product fluency training and sales goals.", "Improved inventory control and reduced shrinkage by 8% over two years.", "Implemented customer service strategies that exceeded monthly sales targets."],
		},
		{
			role: "Rifleman",
			company: "United States Marine Corps",
			duration: "November 2007 – July 2009",
			points: ["Completed rigorous tactical training and contributed to mission execution in infantry units.", "Operated advanced weaponry and communication systems under strict protocols.", "Led a Fire-Team of 4 Marines, leading to recognition for reliability, discipline, and operational effectiveness."],
		},
	];

	return (
		<div className="min-h-screen bg-gray-100 py-10 px-4">
			<h1 className="text-3xl font-bold text-primary text-center mb-12">Experience</h1>
			<div className="max-w-5xl mx-auto space-y-10">
				{experience.map((item, idx) => (
					<div key={idx} className="bg-white shadow rounded-lg p-6">
						<div className="flex justify-between items-start flex-wrap">
							<div>
								<h2 className="text-xl font-semibold text-secondary">{item.role}</h2>
								<p className="text-sm text-gray-600">{item.company}</p>
							</div>
							<p className="text-sm text-gray-500 mt-1">{item.duration}</p>
						</div>
						<ul className="list-disc list-inside mt-4 space-y-1 text-gray-700">
							{item.points.map((point, i) => (
								<li key={i}>{point}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}

export default ExperienceProjects;
