import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
	const [isOn, setIsOn] = useState(false);

	const toggleSwitch = () => setIsOn(!isOn);

	return (
		<div className={isOn ? "App dark" : "App"}>
			<Navbar onClick={toggleSwitch} />
			<Home />
			<About />
			<Skills />
			<Work />
			<Contact />
		</div>
	);
}

export default App;
