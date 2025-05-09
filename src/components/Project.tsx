import React from "react";
import mock03 from "../assets/images/mock03.png";

import mock06 from "../assets/images/mock06.png";

import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
	return (
		<div className="projects-container" id="projects">
			<h1>Personal Projects</h1>
			<div className="projects-grid">
				<div className="project">
					<a href="#" target="_blank" rel="noreferrer">
						<img src={mock10} className="zoom" alt="thumbnail" width="100%" />
					</a>
					<a href="#" target="_blank" rel="noreferrer">
						<h2>Movie Website</h2>
					</a>
					<p>
						Developed a full-stack movie website that allows users to browse and
						search movies, view detailed information, and save their favorites.
						The app integrates both frontend and backend, providing a seamless
						user experience with real-time data. It also features user
						authentication and movie ratings to enhance the browsing experience.
					</p>
				</div>
				<div className="project">
					<a href="#" target="_blank" rel="noreferrer">
						<img src={mock06} className="zoom" alt="thumbnail" width="100%" />
					</a>
					<a href="#" target="_blank" rel="noreferrer">
						<h2>WeManage: Real Estate Asset Management</h2>
					</a>
					<p>
						This mobile application allows realtors in Japan to securely manage
						their property information and view future income predictions. This
						app is built with MERN STACK
					</p>
				</div>

				<div className="project">
					<a href="#" target="_blank" rel="noreferrer">
						<img src={mock03} className="zoom" alt="thumbnail" width="100%" />
					</a>
					<a href="#" target="_blank" rel="noreferrer">
						<h2>Programs of Study</h2>
					</a>
					<p>
						Developed a CMS platform for easy content creation, editing, and
						management with role-based access. It ensures seamless content
						updates and scalability for efficient website management.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Project;
