import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import { Link, NavLink, useLinkClickHandler } from "react-router-dom";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./mobx.jpg"
								alt="MobX"
								className="work-image"
							/>
							<div className="work-title">MobX GmbH</div>
							<div className="work-subtitle">
								Game Developer & Programmer
							</div>
							<div className="work-duration">2020 - Present</div>
						</div>

						<div className="work">
							<img
								src="./writing.png"
								alt="Content Writing"
								className="work-image"
							/>
							<div className="work-title">Freelancer</div>
							<div className="work-subtitle">
								Content Writer & AI Artist
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>

						<div className="work">
							<Link to="https://www.h-brs.de/en" target="_blank">
								<img
									src="./hbrs.png"
									alt="Studying"
									className="work-image"
								/>
							</Link>
								<div className="work-title">Student</div>
								<div className="work-subtitle">
									Studying Information Technology
								</div>
								<div className="work-duration">2020 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
