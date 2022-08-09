import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<div name="contact" className="w-full h-auto bg-white dark:bg-[#0a192f] flex justify-center items-center p-4">
			<form
				method="POST"
				action="https://getform.io/f/f07994de-98f2-4f00-91b1-d2aec22d8ee8"
				className="flex flex-col max-w-[1000px] w-full bg-[#edf6f9] dark:bg-[#0a192f] px-8 py-8 sm:px-32 sm:py-8 sm:rounded-xl"
			>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-[#0a192f] dark:text-gray-300 border-[#83c5be] dark:border-pink-600">Contact</p>
					<p className="text-[#0a192f] dark:text-gray-300 py-4 font-medium">
						// Submit the form below or drop me an email @ shubhamsaurabh@outlook.com
					</p>
				</div>
				<input className="bg-[#0a192f] dark:bg-[#ccd6f6] text-white dark:text-black font-medium p-2" type="text" placeholder="Name" name="name" />
				<input className="my-4 p-2 bg-[#0a192f] dark:bg-[#ccd6f6] text-white dark:text-black font-medium" type="email" placeholder="Email" name="email" />
				<textarea className="bg-[#0a192f] dark:bg-[#ccd6f6] text-white dark:text-black font-medium p-2 resize-none" name="message" rows="10" placeholder="Message"></textarea>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="font-medium text-[#0a192f] dark:text-white group border-2 border-[#006d77] hover:bg-[#0a192f] dark:hover:bg-pink-600 hover:text-white hover:border-[#0a192f] dark:border-pink-600 dark:hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
				>
					Let's Collaborate
				</motion.button>
			</form>
		</div>
	);
};

export default Contact;
