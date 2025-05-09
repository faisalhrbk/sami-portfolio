import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
		<footer>
			<div>
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
			<p>
				A portfolio designed & built by{" "}
				<a
					href="https://github.com/faisalhrbk/faisalhrbk"
					target="_blank"
					rel="noreferrer"
				>
					Mohd Sami
				</a>{" "}
				with 💜
			</p>
		</footer>
	);
}

export default Footer;