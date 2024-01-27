import html from '../assets/icons/html5-02-svgrepo-com.svg';
import css from '../assets/icons/css3-02-svgrepo-com.svg';
import laravel from '../assets/icons/laravel-svgrepo-com.svg';
import mysql from '../assets/icons/mysql-svgrepo-com.svg';
import postman from '../assets/icons/postman-svgrepo-com.svg';
import python from '../assets/icons/python-svgrepo-com.svg';
import pytorch from '../assets/icons/pytorch-svgrepo-com.svg'
import tailwind from '../assets/icons/tailwind-svgrepo-com.svg'
import tensorflow from '../assets/icons/tensorflow-svgrepo-com.svg'


export default function Skills() {
    return (
        <section id="skills" className="section-wrapper skill">
		<h2>Skills</h2>
		<div className="skills-container">
			<div className="card">
				<img src={html} alt="HTML"/>
			</div>
			<div className="card">
				<img src={css} alt="CSS"/>
			</div>
			<div className="card">
				<img src={mysql} alt="MySQL"/>
			</div>
			<div className="card">
				<img src={laravel} alt="Laravel"/>
			</div>
		
			<div className="card">
				<img src={postman} alt="Postman"/>
			</div>
			<div className="card">
				<img src={python} alt="Python"/>
			</div>
			<div className="card">
				<img src={tensorflow} alt="Tensorflow"/>
			</div>
			<div className="card">
				<img src={pytorch} alt="Pytorch"/>
			</div>
		</div>
	</section>   
    );
}