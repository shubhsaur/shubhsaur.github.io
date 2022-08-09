import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwinds from "../assets/tailwind.png";
import Github from "../assets/github.png";
import MongoDB from "../assets/mongo.png";
import Apigee from "../assets/apigee.svg";
import Git from "../assets/git.svg";
import Jira from "../assets/jira-3.svg";
import Postman from "../assets/postman.svg";
import Splunk from "../assets/splunk.svg";

const Skills = () => {
	return (
		<div name="skills" className="w-full h-auto pt-16 bg-white dark:bg-[#0a192f] text-[#0a192f] dark:text-gray-300">
			{/* container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-[#83c5be] dark:border-pink-600">Skills</p>
					<p className="py-4 font-medium">// These are the technologies I've worked with</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="bg-[#0a192f] text-white font-medium shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={HTML} alt="html icon" />
						<p className="my-4">HTML</p>
					</div>

					<div className="bg-[#0a192f] text-white font-medium shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={CSS} alt="html icon" />
						<p className="my-4">CSS</p>
					</div>

					<div className="bg-[#0a192f] text-white font-medium shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Javascript} alt="html icon" />
						<p className="my-4">Javascript</p>
					</div>

					<div className="bg-[#0a192f] text-white font-medium shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={ReactImg} alt="html icon" />
						<p className="my-4">React</p>
					</div>

					<div className="bg-[#0a192f] text-white font-medium shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Github} alt="html icon" />
						<p className="my-4">Github</p>
					</div>

					<div className="bg-[#0a192f] text-white font-medium shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Tailwinds} alt="html icon" />
						<p className="my-4">Tailwind</p>
					</div>

					<div className="bg-[#0a192f] text-white font-medium shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={MongoDB} alt="html icon" />
						<p className="my-4">MongoDB</p>
					</div>

					<div className="bg-[#0a192f] grid text-white font-medium shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto self-center mt-8" src={Apigee} alt="html icon" />
						<p className="my-4 self-center">Apigee</p>
					</div>

					<div className="bg-[#0a192f] text-white font-medium shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto h-[70px]" src={Jira} alt="html icon" />
						<p className="my-4">JIRA</p>
					</div>

					<div className="bg-[#0a192f] grid text-white font-medium shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto self-center mt-8" src={Git} alt="html icon" />
						<p className="my-4 self-center">Git</p>
					</div>

					<div className="bg-[#0a192f] text-white font-medium shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto h-[80px]" src={Splunk} alt="html icon" />
						<p className="my-4">Splunk</p>
					</div>

					<div className="bg-[#0a192f] text-white font-medium shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Postman} alt="html icon" />
						<p className="my-4">Postman</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
