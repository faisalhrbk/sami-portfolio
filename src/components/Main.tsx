import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
		<div className="container">
			<div className="about-section">
				<div className="image-wrapper">
					<img
						style={{ objectFit: "contain" }}
						src={require("../assets/images/profile.jpg")}
						alt="Avatar"
					/>
				</div>
				<div className="content">
					<div className="social_icons">
						<a
							href="https://github.com/faisalhrbk"
							target="_blank"
							rel="noreferrer"
						>
							<GitHubIcon />
						</a>
						<a
							href="https://www.facebook.com/profile.php?id=100012771817674"
							target="_blank"
							rel="noreferrer"
						>
							<LinkedInIcon />
						</a>
					</div>
					<h1>Mohd Sami</h1>
					<p>Software Engineer</p>

					<div className="mobile_social_icons">
						<a
							href="https://github.com/faisalhrbk"
							target="_blank"
							rel="noreferrer"
						>
							<GitHubIcon />
						</a>
						<a
							href="https://www.facebook.com/profile.php?id=100012771817674"
							target="_blank"
							rel="noreferrer"
						>
							<LinkedInIcon />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;