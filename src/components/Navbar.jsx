import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import MaterialUISwitch from "./MaterialUISwitch";

const Navbar = ({onClick}) => {
	const [nav, setNav] = useState(false);

	const handleClick = () => setNav(!nav);

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 sm:px-16 dark:bg-[#0a192f] bg-white dark:text-gray-300">
			<div>
				{/* <img src={logo} alt="logo image" style={{ width: "50px" }} /> */}
				<div className="font-extrabold text-3xl">Portfolio<span className="text-xl text-[#83c5be] dark:text-pink-600">.me</span></div>
			</div>

			{/* Menu */}
			<div className="flex items-center">
				<MaterialUISwitch isOn={onClick} onChange={onClick} />

				<ul className="hidden md:flex items-center">
					<li>
						<Link
							className="font-medium hover:text-[#006d77] dark:hover:text-pink-600 transition ease-in-out duration-100"
							to="home"
							smooth={true}
							duration={500}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className="font-medium hover:text-[#006d77] dark:hover:text-pink-600 transition ease-in-out duration-100"
							to="about"
							smooth={true}
							duration={500}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							className="font-medium hover:text-[#006d77] dark:hover:text-pink-600 transition ease-in-out duration-100"
							to="skills"
							smooth={true}
							duration={500}
						>
							Skills
						</Link>
					</li>
					<li>
						<Link
							className="font-medium hover:text-[#006d77] dark:hover:text-pink-600 transition ease-in-out duration-100"
							to="work"
							smooth={true}
							duration={500}
						>
							Work
						</Link>
					</li>
					<li>
						<Link to="contact" smooth={true} duration={500}>
							<motion.button
								whileTap={{ scale: 0.9 }}
								className="text-white bg-[#0a192f] dark:text-white dark:bg-[#E31B6D] group border-none outline-none px-4 py-3 my-2 rounded-[3rem] flex items-center hover:bg-[#006d77] dark:hover:bg-pink-700 duration-300 "
							>
								Contact
							</motion.button>
						</Link>
					</li>
				</ul>
			</div>
			{/* Hamburger */}

			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars className="text-[#0a192f] dark:text-gray-300 text-2xl" /> : <FaTimes className="text-[#0a192f] dark:text-gray-300 text-2xl" />}
			</div>
			{/* Mobile menu */}

			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-white dark:bg-[#0a192f] flex flex-col justify-center items-center"
				}
			>
				<li className="py-6 text-4xl">
					<li>
						<Link
							className="hover:text-[#006d77] dark:hover:text-pink-600 transition ease-in-out duration-100"
							onClick={handleClick}
							to="home"
							smooth={true}
							duration={500}
						>
							Home
						</Link>
					</li>
				</li>
				<li className="py-6 text-4xl">
					<li>
						<Link
							className="hover:text-[#006d77] dark:hover:text-pink-600 transition ease-in-out duration-100"
							onClick={handleClick}
							to="about"
							smooth={true}
							duration={500}
						>
							About
						</Link>
					</li>
				</li>
				<li className="py-6 text-4xl">
					<li>
						<Link
							className="hover:text-[#006d77] dark:hover:text-pink-600 transition ease-in-out duration-100"
							onClick={handleClick}
							to="skills"
							smooth={true}
							duration={500}
						>
							Skills
						</Link>
					</li>
				</li>
				<li className="py-6 text-4xl">
					<li>
						<Link
							className="hover:text-[#006d77] dark:hover:text-pink-600 transition ease-in-out duration-100"
							onClick={handleClick}
							to="work"
							smooth={true}
							duration={500}
						>
							Work
						</Link>
					</li>
				</li>
				<li className="py-6 text-4xl">
					<li>
						<Link
							className="hover:text-[#006d77] dark:hover:text-pink-600 transition ease-in-out duration-100"
							onClick={handleClick}
							to="contact"
							smooth={true}
							duration={500}
						>
							Contact
						</Link>
					</li>
				</li>
			</ul>
			{/* social icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
						<a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/shubhsaur/" target="_blank">
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/shubhsaur" target="_blank">
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="mailto:shubhamsaurabh@outlook.com"
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
						<a className="flex justify-between items-center w-full text-gray-300" href="https://drive.google.com/file/d/1KISp1QRGE8CIPwJthIot5MSFY0Yr5hqN/view?usp=sharing">
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
