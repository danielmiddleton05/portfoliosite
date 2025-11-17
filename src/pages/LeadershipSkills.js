import React, { useState } from "react";

function LeadershipSkills() {
	const skills = [
		{
			title: "STUDENT OBSESSION",
			color: "bg-primary",
			content: (
				<>
					<p className="mb-2 italic">Everything we do starts with our students and the WGU mission.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>Designed the Academic Readiness for Nursing (ARN) TEAS-prep experience in Open edX with diagnostics, practice, and Emotional Intelligence content grounded in real student needs.</li>
						<li>Iterated on interactive course elements (carousels, comics, calculators, ledger activities) based on where students slowed or got stuck, reducing friction and confusion.</li>
					</ul>
				</>
			),
		},
		{
			title: "INNOVATION",
			color: "bg-secondary",
			content: (
				<>
					<p className="mb-2 italic">Expecting fresh thinking, being comfortable going first, and using calculated risks to solve hard problems.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>Prototyped, built, and deployed an automated voucher system with an AWS S3–hosted front end, Node.js/Express.js on EC2, and MongoDB—removing manual steps from the TEAS voucher process.</li>
						<li>Designed non-traditional interactives in Open edX (virtual comics, responsive image grids, custom carousels) to move beyond passive reading and video.</li>
						<li>Experimented with AI-assisted authoring to speed builds while respecting data security and privacy constraints.</li>
					</ul>
				</>
			),
		},
		{
			title: "LEARNING",
			color: "bg-accent",
			content: (
				<>
					<p className="mb-2 italic">Treating self-improvement as ongoing and benchmarking against the best.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>Pursuing a B.S. in Computer Science while completing advanced WGU assessments in SQL, computer architecture, discrete math, and calculus—and feeding that knowledge back into real product work.</li>
						<li>Built structured study plans and practice exams (e.g., TEAS/HESI, C952, Calculus I) that informed how diagnostic and practice experiences should feel for students.</li>
						<li>Regularly incorporates feedback from accessibility specialists, product partners, and designers to refine patterns and course templates.</li>
					</ul>
				</>
			),
		},
		{
			title: "INSPIRE & DEVELOP",
			color: "bg-primary",
			content: (
				<>
					<p className="mb-2 italic">Inspiring others to do their best work and actively developing people around me.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>Mentored colleagues on Open edX workflows, Git branching, and shared CSS/JS pipelines, helping others ship interactive experiences with confidence.</li>
						<li>Created internal how-tos, SMARTER goal templates, and design docs that translate abstract ideas into concrete, shippable course components.</li>
						<li>Consistently highlights cross-functional contributions (Design, Product Health, Student Comms, Assessment) in docs and presentations.</li>
					</ul>
				</>
			),
		},
		{
			title: "URGENCY",
			color: "bg-secondary",
			content: (
				<>
					<p className="mb-2 italic">Responding quickly, focusing on what matters, and maintaining momentum.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>Delivered key Open edX launches—such as Academic Readiness for Nursing and orientation redesign work— on tight timelines without sacrificing accessibility or quality.</li>
						<li>Rapidly debugged and refactored fragile LMS patterns (e.g., mobile comic bubbles, non-JS carousels, interactive ledgers) so stakeholders could evaluate working prototypes, not just concepts.</li>
						<li>Quickly adapted voucher workflows and content so newly enrolled students could access TEAS vouchers with minimal delay.</li>
					</ul>
				</>
			),
		},
		{
			title: "COURAGE",
			color: "bg-accent",
			content: (
				<>
					<p className="mb-2 italic">Big, bold thinking and backbone—doing what is right for students, not just what is easy.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>Advocated for student- and accessibility-first decisions in tool evaluations and course patterns, even when that meant more work or pushing back on simpler options.</li>
						<li>Challenged legacy manual processes by proposing automation (voucher pipelines, shared CSS libraries, MongoDB data flows) to reduce error and free teams to focus on higher-value work.</li>
						<li>Provided candid feedback in RFPs and process reviews so leaders clearly saw both risks and opportunities.</li>
					</ul>
				</>
			),
		},
		{
			title: "OWNERSHIP",
			color: "bg-primary",
			content: (
				<>
					<p className="mb-2 italic">Acting on behalf of the university and students, thinking long term, and never saying “that’s not my job.”</p>
					<ul className="list-disc ml-6 mb-2">
						<li>Took end-to-end responsibility for the TEAS voucher experience—from MongoDB integration concepts through the front-end flow and messaging alignment with Student Comms.</li>
						<li>Built and maintained shared CSS/JS resources in GitHub and AWS so future courses can reuse components instead of rebuilding from scratch.</li>
						<li>Proactively surfaced and owned solutions to pain points (manual vouchers, brittle interactives, confusing authoring vs. production practices in Open edX).</li>
					</ul>
				</>
			),
		},
		{
			title: "DELIVER RESULTS",
			color: "bg-secondary",
			content: (
				<>
					<p className="mb-2 italic">Holding a high bar for quality and timeliness, with clear, measurable outcomes.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>
							Developed and launched an automated voucher system that reduced voucher-related student support tickets by <span className="font-semibold">100%</span>, eliminating manual voucher lookups and assignment errors.
						</li>
						<li>Delivered multiple Open edX courses (ARN, orientation redesign, certificate courses) as scalable, documented products instead of one-off builds.</li>
						<li>Established reusable interactive patterns (ledgers, calculators, carousels, image grids) to accelerate future development and keep quality consistent.</li>
					</ul>
				</>
			),
		},
		{
			title: "INTEGRITY",
			color: "bg-accent",
			content: (
				<>
					<p className="mb-2 italic">Doing what is right even when no one is watching; grounding decisions in ethics and transparency.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>
							Recognized at Academy&apos;s Summit with an <span className="font-semibold">Integrity</span> award for consistently modeling honest communication and principled decision-making.
						</li>
						<li>Set and upheld clear boundaries for AI and data usage in course development to protect student privacy and institutional trust.</li>
						<li>Raised accessibility and quality concerns early—even when it required rework—so launches consistently aligned with WGU standards.</li>
					</ul>
				</>
			),
		},
		{
			title: "EARN TRUST",
			color: "bg-primary",
			content: (
				<>
					<p className="mb-2 italic">Listening deeply, communicating directly, and following through so partners and students can rely on me.</p>
					<ul className="list-disc ml-6 mb-2">
						<li>Built credibility with Design Managers, Product Health, Student Comms, and Assessment partners by consistently delivering on commitments and documenting decisions clearly.</li>
						<li>Translated complex technical topics (Open edX authoring vs. production workflows, voucher automation, GitHub-to-AWS CSS pipelines) into accessible explanations for non-technical stakeholders.</li>
						<li>Used retrospectives and honest feedback loops on projects (ARN, orientation, RFP/process work) to strengthen relationships and improve how we collaborate.</li>
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
		<div className="flex flex-col bg-gray-100 pt-0">
			<div className="flex-1">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl font-bold text-primary mb-8 mt-8">Leadership Skills</h1>
					{skills.map((skill, index) => (
						<div key={index} className="rounded shadow overflow-hidden mb-8 last:mb-0 w-full md:w-[600px] mx-auto transition-all duration-300">
							<button onClick={() => toggleSection(index)} className={`${skill.color} w-full text-center text-white px-6 py-4 text-xl font-semibold focus:outline-none`}>
								{skill.title}
							</button>
							{openIndex === index && <div className="bg-white text-gray-800 px-6 py-4 text-left">{skill.content}</div>}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default LeadershipSkills;
