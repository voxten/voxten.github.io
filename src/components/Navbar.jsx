import React, { useState } from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="sm:px-16 px-6 w-full flex py-5 items-center fixed top-0 z-[100] bg-gray-900/40 border-b border-white/5 backdrop-blur-xl shadow-xl">
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<p className="text-white text-[15.5px] font-bold cursor-pointer flex">
						<span className="sm:block hidden">voxten</span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title
									? "text-white"
									: "text-secondary"
							}
                        hover:text-white cursor-pointer text-[18px]
                         font-medium`}
							onClick={() => setActive(link.title)}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>

					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 bg-gray-950/70 border border-white/5 backdrop-blur-xl shadow-2xl rounded-2xl justify-center absolute top-20 right-4 min-w-[200px] z-[100]`}
					>
						<ul className="list-none flex justify-center items-center flex-col gap-5 w-full">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${active === link.title ? "text-white" : "text-secondary"} 
                            hover:text-white cursor-pointer text-[18px] font-medium py-2 w-full text-center transition-colors duration-200`}
									onClick={() => {
										setToggle(!toggle)
										setActive(link.title)
									}}>
									<a href={`#${link.id}`} className="block w-full">{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;