import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Layout() {
	const navigate = useNavigate();
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
		<div className="relative min-h-screen bg-gray-100">
			{/* Floating Hamburger, Title, and Menu Container */}
			<div className="fixed top-4 left-4 z-50">
				<div className="relative bg-white px-4 py-2 rounded shadow-md flex items-center space-x-4">
					<button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-gray-800 focus:outline-none">
						&#9776;
					</button>
					<span onClick={() => handleNav("/")} className="text-lg font-semibold text-primary cursor-pointer select-none">
						Daniel Middleton
					</span>

					{/* Dropdown Menu (positioned relative to button) */}
					{isOpen && (
						<div className="absolute top-full left-0 mt-2 bg-white rounded shadow-md py-2 px-4 space-y-2 w-max min-w-[12rem] z-50">
							{navItems.map((item) => (
								<button key={item.path} onClick={() => handleNav(item.path)} className="block text-left text-black hover:text-blue-600 whitespace-nowrap">
									{item.name}
								</button>
							))}
						</div>
					)}
				</div>
			</div>

			{/* Page Content */}
			<main className="p-4 pt-20">
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
