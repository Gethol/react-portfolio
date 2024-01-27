export default function Navigation() {
    return(
    	<header className="primary-header">

		<button className="mobile-nav-toggle " aria-controls="navbar" aria-expanded="false">
			<span className="sr-only">Menu</span></button>
		<nav>
			<ul id="navbar" data-visible="false" className="navbar flex">
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