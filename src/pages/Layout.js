import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Layout() {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ name: "Home", path: "/" },
		{ name: "Leadership Skills", path: "/leadership-skills" },
		{ name: "Experience", path: "/experience-projects" },
		//{ name: "Testimonials", path: "/testimonials" },
		{ name: "About Me", path: "/about-me" },
	];

	const handleNav = (path) => {
		navigate(path);
		setIsOpen(false);
	};

	return (
		<div className="relative min-h-screen bg-gray-100">
			{/* Floating Hamburger and Title */}
			<div className="fixed top-4 left-4 z-50 flex items-center space-x-4 bg-white px-4 py-2 rounded shadow-md">
				<button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-gray-800 focus:outline-none">
					&#9776;
				</button>
				<span onClick={() => handleNav("/")} className="text-lg font-semibold text-primary cursor-pointer select-none">
					Daniel Middleton
				</span>
			</div>

			{/* Overlay Dropdown Menu */}
			{isOpen && (
				<div className="absolute top-16 left-4 z-40 bg-white rounded shadow-md py-2 px-4 space-y-2 w-max min-w-[12rem]">
					{navItems.map((item) => (
						<button key={item.path} onClick={() => handleNav(item.path)} className="block text-left text-gray-700 hover:text-blue-600 whitespace-nowrap">
							{item.name}
						</button>
					))}
				</div>
			)}

			{/* Page Content */}
			<main className="p-4 pt-20">
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
