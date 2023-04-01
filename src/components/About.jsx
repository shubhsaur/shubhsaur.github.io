import React from "react";
import Profile from "../assets/profile.jpg";
import self from "../assets/self.png";

const About = () => {
	return (
		<div name="about" className="w-full h-auto bg-white dark:bg-[#0a192f] text-[#0a192f] dark:text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-left pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-[#83c5be] dark:border-pink-600">About</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="">
						<img className="max-w-[100%]" src={self} alt="profile" />
					</div>
					<div className="font-medium text-xl text-[#0a192f] dark:text-[#8892b0]">
						<p>
							// I'm a Frontend Developer with a passion for building beautiful and responsive websites. I am working
							around frontend tech like HTML, CSS, javascript, React, and other useful and powerful frameworks like
							Tailwinds, Bootstrap, etc.
						</p>
						<p className="mt-8">// I have a great experience around APIs management and RESTful services. Working
							for one of the top multinational corporation specialized in payment card services, I have a great experience in working with the
							team and the clients.</p>
						<p className="mt-8">// Loves to work in competitve and learning environment.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
