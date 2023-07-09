import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import {
	Widget,
	addResponseMessage,
	addUserMessage,
	toggleWidget,
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		addUserMessage("Ask me anything!");

		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	const handleNewUserMessage = (newMessage) => {
		console.log(`New message incoming! ${newMessage}`);
		// Now send the message throught the backend API
		addUserMessage(newMessage);
		addResponseMessage("Shut");
	};

	return (
		<div className="App">
			<Widget
				handleNewUserMessage={handleNewUserMessage}
				title="Aiman"
				subtitle="Online"
			/>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
