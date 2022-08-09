import React from "react";
import Syncfusion from "../assets/syncfusion.png";
import Shortly from "../assets/shortly.png";
import Galleria from "../assets/galleria.png";
import Splitter from "../assets/splitter.png";
import Sunnyside from "../assets/sunnyside.png";
import Crowdfund from "../assets/crowdfund.png";

const Work = () => {
	return (
		<div name="work" className="w-full md:h-auto pt-16 bg-white dark:bg-[#0a192f] text-[#0a192f] dark:text-gray-300">
			{/* container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-[#0a192f] dark:text-gray-300 border-[#83c5be] dark:border-pink-600">Work</p>
					<p className="py-6 font-medium">// Check out some of my recent work</p>
				</div>
				{/* grid-container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* grid-item */}
					<div style={{ backgroundImage: `url(${Syncfusion})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">Syncfusion Dashboard</span>
							<div className="pt-8 text-center">
								<a href="https://syncfusiondashboard.vercel.app/" target="_blank">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg md:hover:bg-[#0a192f] md:hover:text-[#fff] md:hover:transition-all ease-in-out duration-200">
										Demo
									</button>
								</a>
								<a href="https://github.com/shubhsaur/syncfusion-dashboard" target="_blank">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg md:hover:bg-[#0a192f] md:hover:text-[#fff] md:hover:transition-all ease-in-out duration-200">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
                    {/* grid-item */}
                    <div style={{ backgroundImage: `url(${Shortly})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">Shortly</span>
							<div className="pt-8 text-center">
								<a href="https://shubhsaur-shortly.vercel.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg md:hover:bg-[#0a192f] md:hover:text-[#fff] md:hover:transition-all ease-in-out duration-200">
										Demo
									</button>
								</a>
								<a href="https://github.com/shubhsaur/shortly">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg md:hover:bg-[#0a192f] md:hover:text-[#fff] md:hover:transition-all ease-in-out duration-200">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

                    {/* grid-item */}
					<div style={{ backgroundImage: `url(${Galleria})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">Galleria</span>
							<div className="pt-8 text-center">
								<a href="https://shubhsaur-galleria.vercel.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg md:hover:bg-[#0a192f] md:hover:text-[#fff] md:hover:transition-all ease-in-out duration-200">
										Demo
									</button>
								</a>
								<a href="https://github.com/shubhsaur/galleria">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg md:hover:bg-[#0a192f] md:hover:text-[#fff] md:hover:transition-all ease-in-out duration-200">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
                    {/* grid-item */}
                    <div style={{ backgroundImage: `url(${Splitter})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">Splitter</span>
							<div className="pt-8 text-center">
								<a href="https://shubhsaur-tipcalculator.vercel.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg md:hover:bg-[#0a192f] md:hover:text-[#fff] md:hover:transition-all ease-in-out duration-200">
										Demo
									</button>
								</a>
								<a href="https://github.com/shubhsaur/tip-calculator-app">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg md:hover:bg-[#0a192f] md:hover:text-[#fff] md:hover:transition-all ease-in-out duration-200">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

                    {/* grid-item */}
					<div style={{ backgroundImage: `url(${Sunnyside})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">Sunnyside</span>
							<div className="pt-8 text-center">
								<a href="https://shubhsaur-sunnysideagency.vercel.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg md:hover:bg-[#0a192f] md:hover:text-[#fff] md:hover:transition-all ease-in-out duration-200">
										Demo
									</button>
								</a>
								<a href="https://github.com/shubhsaur/sunnyside-agency-landing-page">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg md:hover:bg-[#0a192f] md:hover:text-[#fff] md:hover:transition-all ease-in-out duration-200">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
                    {/* grid-item */}
                    <div style={{ backgroundImage: `url(${Crowdfund})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">Crowdfund</span>
							<div className="pt-8 text-center">
								<a href="https://shubhsaur-crowdfunding.vercel.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg md:hover:bg-[#0a192f] md:hover:text-[#fff] md:hover:transition-all ease-in-out duration-200">
										Demo
									</button>
								</a>
								<a href="https://github.com/shubhsaur/crowdfunding-landing-page">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg md:hover:bg-[#0a192f] md:hover:text-[#fff] md:hover:transition-all ease-in-out duration-200">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
