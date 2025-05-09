import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faDocker,
	faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
	"HTML5",
	"CSS3",
	"JavaScript",
	"BOOTSTRAP",
	"TAILWINDCSS",
	"BOOTSTRAP",
	"REACT",
];

const labelsSecond = [
	"NODE JS",
	"EXPRESS JS",
	"GITHUB",
	"GIT",
	"VERCEL",
	"NETLIFY",
];

const labelsThird = ["FIGMA", "UX & UI", "PHOTOSHOP", "VIDEO EDITING"];

function Expertise() {
	return (
		<div className="container" id="expertise">
			<div className="skills-container">
				<h1>Expertise</h1>
				<div className="skills-grid">
					<div className="skill">
						<FontAwesomeIcon icon={faReact} size="3x" />
						<h3>Frontend Tech Stack</h3>
						<p>
							I build responsive and visually appealing websites with a focus on
							clean design and user-friendly interfaces. I ensure that each
							website performs smoothly across all devices and delivers an
							engaging user experience
						</p>
						<div className="flex-chips">
							<span className="chip-title">Tech stack:</span>
							{labelsFirst.map((label, index) => (
								<Chip key={index} className="chip" label={label} />
							))}
						</div>
					</div>

					<div className="skill">
						<FontAwesomeIcon icon={faDocker} size="3x" />
						<h3>Backend Tech Stack</h3>
						<p>
							Also work on backend development, handling server-side logic,
							database operations, and API integration. Focus is on building
							secure, scalable applications that run smoothly and are easy to
							maintain.
						</p>
						<div className="flex-chips">
							<span className="chip-title">Tech stack:</span>
							{labelsSecond.map((label, index) => (
								<Chip key={index} className="chip" label={label} />
							))}
						</div>
					</div>

					<div className="skill">
						<FontAwesomeIcon icon={faPalette} size="3x" />
						<h3>Other Skills</h3>
						<p>
							I have experience using design tools like Figma and Photoshop to
							craft UI mockups, wireframes, and other visual assets. These tools
							allow me to bring ideas to life with detailed and user-centric
							designs, ensuring a polished and engaging final product.
						</p>
						<div className="flex-chips">
							<span className="chip-title">Tech stack:</span>
							{labelsThird.map((label, index) => (
								<Chip key={index} className="chip" label={label} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Expertise;
