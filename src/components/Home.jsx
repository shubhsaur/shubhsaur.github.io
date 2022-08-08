import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<div name="home" className="w-full h-screen bg-white dark:bg-[#0a192f]">
			{/* container */}
			<motion.div
				initial={{ x: -300 }}
				animate={{ x: 0 }}
				transition={{ duration: 0.6 }}
				className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"
			>
				<p className=" text-[#0a192f] font-bold dark:text-pink-600">Hi, my name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#0a192f] dark:text-[#ccd6f6]">Shubham Saurabh</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#83c5be] dark:text-[#8892b0]">I'm a Frontend Developer</h2>
				<p className="font-medium text-[#0a192f] dark:text-[#8892b0] py-4 max-w-[700px]">
					I loves building responsive and digital experiences. Currently, I'm focused on building web applications with
					React and using powerful web libraries such as MaterialUI, Tailwind, etc.
				</p>

				<div className="flex gap-6">
					<Link to="work" smooth={true} duration={500}>
						<motion.button
							whileTap={{ scale: 0.9 }}
							className="font-medium text-[#0a192f] dark:text-white group border-2 border-[#006d77] px-4 py-[10px] my-2 flex items-center hover:bg-[#0a192f] dark:hover:bg-pink-600 hover:text-white hover:border-[#0a192f] dark:border-pink-600 dark:hover:border-pink-600 duration-300 "
						>
							View Work
							<span className="group-hover:rotate-90 duration-300">
								<HiArrowNarrowRight className="ml-3" />
							</span>
						</motion.button>
					</Link>
					<Link to="#" smooth={true} duration={500}>
						<motion.button
							whileTap={{ scale: 0.9 }}
							className="font-medium text-white hover:text-[#0a192f] dark:hover:text-white bg-[#0a192f] dark:bg-[#E31B6D] group border-none outline-none px-4 py-3 my-2 flex items-center hover:bg-[#83c5be] dark:hover:bg-pink-700 duration-300 "
						>
							Download Resume
						</motion.button>
					</Link>
				</div>
			</motion.div>
		</div>
	);
};

export default Home;
