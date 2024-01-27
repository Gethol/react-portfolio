export default function Projects() {
    return (
        <section id="projects" className="section-wrapper projects">
		<h2>Projects</h2>
		<div className="grid ">

			<a href="https://github.com/Gethol/esomaApp" target="_blank"  rel="noreferrer" className="project-card project ">
				<img src="assets/public/real_estate.jpg" alt=""/>
				<h3>Esoma Website</h3>
				<h4>HTML,CSS,Javascript</h4>
				<p>
					As part of my coursework for my Human-Computer Interaction className, my group and I redesigned Esoma, a
					platform that provides learning resources to students. The project involved evaluating the original
					website and then revamping the website improve the UI and UX of the website.
				</p>

				</a>
			<a href="https://github.com/Gethol/aide" target="_blank"  rel="noreferrer" className="project-card project">
				<img src="assets/public/ambulance_deployment.jpg" alt=""/>
				<h3>Ambulance Deployment App</h3>
				<h4>Mapbox, Laravel, HTML,CSS,Javascript</h4>
				<p>
					Developed an application to retrieve the location of ambulances
					throughout the city of Nairobi and use a user's location to locate
					the closest ambulance to them.
				</p>

			</a>

			<a href="https://github.com/Gethol/MusicGenreClassifier" target="_blank" rel="noreferrer" className="project-card project">
				<img src="assets/public/real_estate.jpg" alt=""/>
				<h3>Music Genre Classification</h3>
				<h4>Python, Tensorflow, OpenCV, Librosa</h4>
				<p>
					Created a Music Genre Classification model using a Convolutional Neural Network.
					The model was trained on spectrograms generated from 30-second snippets of songs that were
					classified into ten genres.
				</p>

			</a>

			<a href="https://github.com/Gethol/hr-app"  rel="noreferrer" className="project-card project">
				<img src="assets/public/Untitled.jpg" alt="" />
				<h3>HR Management System</h3>
				<h4>Laravel, Postman, Vue</h4>
				<p>
					Developed the API for an HR management system for the organisation where I was an intern. This was
					part of an initiative to digitise the company’s processes. HR department processes such as leave
					management, performance appraisal and employee management at the company were implemented by the
					system.
				</p>

				</a>
		</div>
	</section>       
    );    

}