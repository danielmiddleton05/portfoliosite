import React, { useState } from "react";

function LeadershipSkills() {
	const skills = [
		{
			title: "AIM TRUE",
			color: "bg-primary",
			content: (
				<>
					<p className="mb-2 italic">Keeping mission and vision central to decision-making, with stewardship over long-term goals and organizational resources.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>Prioritized alignment with key results in Open edX projects to drive scalable impact.</li>
						<li>Ensured consistent focus on learner outcomes across stakeholder discussions.</li>
					</ul>
				</>
			),
		},
		{
			title: "STUDENT OBSESSED",
			color: "bg-secondary",
			content: (
				<>
					<p className="mb-2 italic">Placing learners at the heart of every decision, from design to delivery.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>Designed AI-enhanced practice and feedback tools tailored to individual students.</li>
						<li>Built interactive, self-paced LMS experiences based on learner behavior and feedback.</li>
					</ul>
				</>
			),
		},
		{
			title: "ADVANCE EQUITY",
			color: "bg-accent",
			content: (
				<>
					<p className="mb-2 italic">Upholding dignity, access, and inclusivity for all learners and collaborators.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>Built accessibility into Open edX and H5P activities to support ELLs and students with diverse learning needs.</li>
						<li>Encouraged diverse input and global collaboration in curriculum development across roles and cultures.</li>
					</ul>
				</>
			),
		},
		{
			title: "INTEGRITY",
			color: "bg-primary",
			content: (
				<>
					<p className="mb-2 italic">Consistent, principled action across roles, regardless of visibility.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>Delivered quality work ahead of deadlines and with full transparency, even when unmonitored.</li>
						<li>Held to high professional standards in communication, reporting, and collaboration.</li>
					</ul>
				</>
			),
		},
		{
			title: "SOUND JUDGMENT",
			color: "bg-secondary",
			content: (
				<>
					<p className="mb-2 italic">Making thoughtful, evidence-based decisions that balance risk and reward.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>Utilized assessment data and stakeholder feedback to iterate on course builds and improve delivery.</li>
						<li>Balanced innovation with feasibility when designing automated systems for voucher delivery and performance tracking.</li>
					</ul>
				</>
			),
		},
		{
			title: "CREATE & INNOVATE",
			color: "bg-accent",
			content: (
				<>
					<p className="mb-2 italic">Pushing boundaries to craft new tools, systems, and ideas that serve learners better.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>Developed dynamic, interactive courses using Open edX, JavaScript, and H5P components.</li>
						<li>Leveraged AI to expedite course builds while still maintaining corporate data security.</li>
						<li>Launched automation tools connecting MongoDB and LMS data through Tableau.</li>
					</ul>
				</>
			),
		},
		{
			title: "DELIVER RESULTS",
			color: "bg-primary",
			content: (
				<>
					<p className="mb-2 italic">Focusing on measurable outcomes, eliminating distraction, and getting meaningful work done.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>Delivered a fully custom-designed Academic Readiness for Nurses course with integrated voucher access, ahead of schedule.</li>
						<li>Consistently delivered scalable, maintainable learning products with documented workflows.</li>
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
