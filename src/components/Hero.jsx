export default function Hero(){
    return(
        <section className="banner">

		<div className="intro">
			<h1>Welcome to My Portfolio!</h1>
			<p>I'm Nathan Nderitu, a software developer.</p>
			<div className="btn-wrapper">

				<a href="www.linkedin.com/in/nathan-nderitu-98aa36247">
					<img src="assets/icons/linkedin-svgrepo-com.svg" alt="linkedin"/>
				</a>

				<a href="https://github.com/Gethol">
					<img src="assets/icons/github-142-svgrepo-com.svg" alt="github" />
				</a>
			</div>
		</div>

		<img className="img-container" src="assets/public/profile_photo.jpg" alt="Nathan Nderitu" />


	</section> 
    );
}