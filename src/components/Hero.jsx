import linkedin from '../assets/icons/linkedin-svgrepo-com.svg';
import github from "../assets/icons/github-142-svgrepo-com.svg"
import photo from "../assets/public/profile_photo.jpg"

export default function Hero(){
    return(
        <section className="banner">

		<div className="intro">/assets/icons/pytorch-svgrepo-com.svg
			<h1>Welcome to My Portfolio!</h1>
			<p>I'm Nathan Nderitu, a software developer.</p>
			<div className="btn-wrapper">

				<a href="www.linkedin.com/in/nathan-nderitu-98aa36247">
					<img src={linkedin} alt="linkedin"/>
				</a>

				<a href="https://github.com/Gethol">
					<img src={github} alt="github" />
				</a>
			</div>
		</div>

		<img className="img-container" src={photo} alt="Nathan Nderitu" />


	</section> 
    );
}