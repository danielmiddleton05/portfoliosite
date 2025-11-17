import React from "react";

export default function ExperienceProjects() {
	const experience = [
		{
			role: "Instructional Technologist",
			company: "Western Governors University",
			duration: "September 2024 – Present",
			points: ["Designs and develops high-quality, engaging online courses and assessments aligned with WGU standards, competencies, and real-world skills.", "Collaborates with SMEs and cross-functional partners to create objective-driven content, multimedia materials, and interactive learning experiences.", "Builds and maintains courses in Open edX using HTML, CSS, JavaScript, and AI-powered tools to strengthen student outcomes and instructional efficiency.", "Partners with external vendors to implement novel, data-driven enhancements that improve KPI performance and operational efficiency.", "Conducts quality assurance reviews to ensure accuracy, consistency, and alignment between learning objectives, resources, and assessments.", "Develops and deploys scalable technical solutions—including an automated voucher system (AWS, Node.js/Express.js, MongoDB)—that eliminate support gaps and drive measurable impact."],
		},
		{
			role: "Web Developer and Designer (Contract)",
			company: "Monilis Design",
			duration: "September 2022 – September 2024",
			points: ["Engaged clients through individualized consultations to understand requirements, preferences, and business objectives, delivering customized web solutions aligned to their needs.", "Acted as the primary point of contact and provided ongoing support, troubleshooting, and post-deployment updates to maintain long-term project reliability.", "Designed and developed custom websites using React.js, Firebase, and WordPress—ensuring high performance, scalability, and security across front-end and CMS implementations.", "Managed the full project lifecycle from discovery and planning to execution and delivery, maintaining clear communication and incorporating client feedback to ensure project success."],
		},
		{
			role: "Website Admin and Content Manager",
			company: "Gyeonggi Suwon International School",
			duration: "December 2019 – June 2023",
			points: ["Created and customized CSS within Finalsite to ensure cohesive site design, improved child-page navigation, and optimized accessibility across devices.", "Managed and updated website content and digital assets while implementing SEO improvements to increase visibility and search performance.", "Collaborated with faculty, staff, and administration to gather feedback, coordinate content accuracy, and provide training and support on CMS usage.", "Reviewed and tested web pages for functionality, accuracy, and compliance, resolving issues promptly and using analytics tools to guide strategic enhancements."],
		},
		{
			role: "Publications and ToK Teacher / Head of Department",
			company: "Gyeonggi Suwon International School",
			duration: "July 2019 – June 2023",
			points: ["Led a team of 6 educators and redesigned the IB Theory of Knowledge curriculum for record-setting academic performance, resulting in the highest ToK score averages in the school's 20 year history.", "Revamped the Publications curriculum to streamline yearbook production, increasing efficiency and contributing to GSIS winning the NSPA ‘Best of International Student Yearbook’ award in 2021 and 2022.", "Taught web design and digital communication with HTML5, CSS3, and Bootstrap."],
		},
		{
			role: "Design Consultant & Photographer",
			company: "Freelance / Knoxville, TN",
			duration: "August 2017 – June 2020",
			points: ["Provided front-end web design consultation to help small businesses create visually appealing, user-friendly websites aligned with branding and marketing goals.", "Operated a photography studio serving small businesses, real estate agencies, and corporate clients, producing high-quality images edited in Adobe Photoshop and Lightroom.", "Managed projects from initial consultation through final delivery, ensuring clear communication, on-time execution, and strong marketing outcomes for clients.", "Oversaw end-to-end project workflows for both photography and design engagements, coordinating schedules, deliverables, and client expectations to ensure satisfaction and repeat business."],
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
		<div className="flex flex-col bg-gray-100 pt-0">
			<div className="flex-1">
				<div className="max-w-4xl mx-auto text-left">
					<h1 className="text-4xl font-bold text-primary mb-8 mt-8">Experience & Projects</h1>
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
			</div>
		</div>
	);
}
