import React from "react";
import workImg from "../assets/workImg.jpeg";
import realEstateImg from "../assets/realestate.jpg";

const Work = () => {
	return (
		<div name="work" className="w-full md:h-screen bg-white dark:bg-[#0a192f] text-[#0a192f] dark:text-gray-300">
			{/* container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-[#0a192f] dark:text-gray-300 border-[#83c5be] dark:border-pink-600">Work</p>
					<p className="py-6 font-medium">// Check out some of my recent work</p>
				</div>
				{/* grid-container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* grid-item */}
					<div style={{ backgroundImage: `url(${workImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">ReactJS Application</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
                    {/* grid-item */}
                    <div style={{ backgroundImage: `url(${realEstateImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">ReactJS Application</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

                    {/* grid-item */}
					<div style={{ backgroundImage: `url(${workImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">ReactJS Application</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
                    {/* grid-item */}
                    <div style={{ backgroundImage: `url(${realEstateImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">ReactJS Application</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

                    {/* grid-item */}
					<div style={{ backgroundImage: `url(${workImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">ReactJS Application</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
                    {/* grid-item */}
                    <div style={{ backgroundImage: `url(${realEstateImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">ReactJS Application</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
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
