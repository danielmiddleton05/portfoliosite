import React, { useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

function Layout() {
	const navigate = useNavigate();
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ name: "Home", path: "/" },
		{ name: "Leadership Skills", path: "/leadership-skills" },
		{ name: "Experience", path: "/experience-projects" },
		// { name: "Testimonials", path: "/testimonials" },
		{ name: "Personal Profile", path: "/about-me" },
	];

	const handleNav = (path) => {
		navigate(path);
		setIsOpen(false);
	};

	return (
		<div className="flex flex-col flex-1 bg-gray-100 min-h-0">
			<ScrollToTop />
			{/* Floating Hamburger, Title, and Menu Container */}
			<div className="fixed top-4 left-4 z-50">
				<div className="relative bg-white px-2 py-1 rounded shadow-md flex items-center space-x-2 md:px-4 md:py-2 md:space-x-4">
					<button onClick={() => setIsOpen(!isOpen)} className="text-2xl md:text-3xl text-gray-800 focus:outline-none">
						&#9776;
					</button>
					<span onClick={() => handleNav("/")} className="text-base md:text-lg font-semibold text-primary cursor-pointer select-none truncate max-w-[120px] md:max-w-none">
						Daniel Middleton
					</span>
					{/* Dropdown Menu */}
					{isOpen && (
						<div className="absolute top-full left-0 mt-2 bg-white rounded shadow-md py-2 px-4 space-y-2 w-max min-w-[12rem] z-50">
							{navItems
								.filter((item) => item.path !== location.pathname)
								.map((item) => (
									<button key={item.path} onClick={() => handleNav(item.path)} className="block text-left text-black hover:text-blue-600 whitespace-nowrap">
										{item.name}
									</button>
								))}
						</div>
					)}
				</div>
			</div>
			<div className="w-full mb-12">
				<img src="/bannerBackground.png" alt="Banner" className="w-full h-32 md:h-64 object-cover block" style={{ objectPosition: "center top" }} />
			</div>
			<div className="max-w-4xl mx-auto text-center px-4 md:px-0">
				<main className="flex-1 min-h-0">
					<Outlet />
				</main>
			</div>
		</div>
	);
}

export default Layout;
