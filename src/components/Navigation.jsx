import React, { useState } from "react";



export default function Navigation() {
    const [isVisible, setIsVisible] = useState(false);

	const handleClick = () => {
		setIsVisible((prevVisibility) => !prevVisibility);
	}

	
	return(
    	<header className="primary-header">

		<button className="mobile-nav-toggle " onClick={handleClick} aria-controls="navbar" aria-expanded={isVisible}>
			<span className="sr-only">Menu</span>
		</button>
		<nav>
			<ul id="navbar" data-visible={isVisible} className="navbar flex">
				<li>
					<a href="#"><span>Home</span></a>
				</li>
				<li><a href="#about"><span>About Me</span></a></li>
				<li><a href="#skills"><span>Skills</span></a></li>
				<li><a href="#projects"><span>Projects</span></a></li>
			</ul>
		</nav>
		</header>     
    );
    
}