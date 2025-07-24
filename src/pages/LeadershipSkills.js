import React, { useState } from "react";

function LeadershipSkills() {
	const skills = [
		{
			title: "Communicating with Impact",
			color: "bg-primary",
			content: (
				<>
					<p className="mb-2 italic">Strong communication skills that support collaboration, clarity, and leadership across diverse teams and stakeholders.</p>
					<h4 className="font-semibold mt-4">Key Subskills</h4>
					<ul className="list-disc ml-6 mb-2">
						<li>
							<strong>Interpersonal Communications:</strong> Facilitate collaboration, adapt tone, and maintain professional cross-team communication.
						</li>
						<li>
							<strong>Writing:</strong> Create clear instructional materials, proposals, and web content across platforms.
						</li>
					</ul>
					<h4 className="font-semibold mt-4">Examples from Experience</h4>
					<ul className="list-disc ml-6">
						<li>Led department-wide communication and staff development as Head of Department at GSIS.</li>
						<li>Created Open edX courses and LMS content with technical and instructional clarity.</li>
						<li>Authored instructional copy across web and print media for internal and client-facing projects.</li>
					</ul>
				</>
			),
		},
		{
			title: "Data-Based Decision Making",
			color: "bg-secondary",
			content: (
				<>
					<p className="mb-2 italic">The ability to gather, evaluate, and apply data to improve outcomes in learning, business, or planning.</p>
					<h4 className="font-semibold mt-4">Key Subskills</h4>
					<ul className="list-disc ml-6 mb-2">
						<li>
							<strong>Research:</strong> Analyze data for continuous improvement and informed decision-making.
						</li>
						<li>
							<strong>Problem Solving:</strong> Use assessment data and coaching to drive solution-oriented strategies.
						</li>
					</ul>
					<h4 className="font-semibold mt-4">Examples from Experience</h4>
					<ul className="list-disc ml-6">
						<li>Performed QA and alignment using performance data at WGU.</li>
						<li>Created data-driven dashboards and solutions using Firebase and JS.</li>
						<li>Improved ToK curriculum through iterative evaluation cycles as HOD.</li>
					</ul>
				</>
			),
		},
		{
			title: "Financial Acumen",
			color: "bg-accent",
			content: (
				<>
					<p className="mb-2 italic">Understanding and applying financial principles to drive smart project and organizational decisions.</p>
					<h4 className="font-semibold mt-4">Key Subskills</h4>
					<ul className="list-disc ml-6 mb-2">
						<li>
							<strong>Forecasting:</strong> Predict resource needs and assess value of instructional strategies.
						</li>
						<li>
							<strong>Budgeting:</strong> Scope projects and manage budgets effectively.
						</li>
					</ul>
					<h4 className="font-semibold mt-4">Examples from Experience</h4>
					<ul className="list-disc ml-6">
						<li>Reduced shrinkage and increased ROI at RadioShack through staff coaching and financial analysis.</li>
						<li>Budgeted and scheduled client-facing design projects as a contractor.</li>
						<li>Scoped course designs for scale at WGU using Open edX and analytics tools.</li>
					</ul>
				</>
			),
		},
		{
			title: "Leading Performance",
			color: "bg-primary",
			content: (
				<>
					<p className="mb-2 italic">The ability to lead teams, provide feedback, and strategically guide performance outcomes.</p>
					<h4 className="font-semibold mt-4">Key Subskills</h4>
					<ul className="list-disc ml-6 mb-2">
						<li>
							<strong>Coaching:</strong> Mentor staff, guide feedback, and develop others through inquiry and modeling.
						</li>
						<li>
							<strong>Strategic Thinking:</strong> Drive planning and innovation aligned to goals and metrics.
						</li>
					</ul>
					<h4 className="font-semibold mt-4">Examples from Experience</h4>
					<ul className="list-disc ml-6">
						<li>Supervised 6 educators, running PD and evaluations as HOD at GSIS.</li>
						<li>Developed high-impact ToK curriculum based on strategy and learner needs.</li>
						<li>Built competency-aligned content frameworks for WGU degrees.</li>
					</ul>
				</>
			),
		},
		{
			title: "Workforce Planning",
			color: "bg-secondary",
			content: (
				<>
					<p className="mb-2 italic">Aligning people, strategy, and planning tools to prepare for future growth and success.</p>
					<h4 className="font-semibold mt-4">Key Subskills</h4>
					<ul className="list-disc ml-6 mb-2">
						<li>
							<strong>Planning:</strong> Coordinate strategic development across stakeholders.
						</li>
						<li>
							<strong>Business Objectives:</strong> Set SMART goals tied to workforce and learning strategies.
						</li>
						<li>
							<strong>Strategic Planning:</strong> Map curriculum to employer demand and future opportunities.
						</li>
					</ul>
					<h4 className="font-semibold mt-4">Examples from Experience</h4>
					<ul className="list-disc ml-6">
						<li>Built workforce-aligned skill courses for WGU and international schools.</li>
						<li>Maintained strategic alignment in LMS content, SEO, and site builds.</li>
						<li>Supported data-informed planning using platforms like Firebase and Open edX.</li>
					</ul>
				</>
			),
		},
	];

	const [openIndex, setOpenIndex] = useState(null);

	const toggleSection = (index) => {
		setOpenIndex(index === openIndex ? null : index);
	};

	return (
		<div className="min-h-screen bg-gray-100 py-10 px-4">
			<h1 className="text-3xl font-bold text-primary text-center mb-12">Leadership Skills</h1>
			<div className="max-w-4xl mx-auto space-y-6">
				{skills.map((skill, index) => (
					<div key={index} className="rounded shadow overflow-hidden">
						<button onClick={() => toggleSection(index)} className={`${skill.color} w-full text-left text-white px-6 py-4 text-xl font-semibold focus:outline-none`}>
							{skill.title}
						</button>
						{openIndex === index && <div className="bg-white text-gray-800 px-6 py-4">{skill.content}</div>}
					</div>
				))}
			</div>
		</div>
	);
}

export default LeadershipSkills;
