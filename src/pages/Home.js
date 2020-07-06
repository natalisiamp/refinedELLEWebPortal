import React from 'react';
import { Link } from 'react-router-dom';
import MainTemplate from '../pages/MainTemplate';

import '../stylesheets/style.css';
import '../lib/bootstrap/css/bootstrap.min.css';
import '../lib/font-awesome/css/font-awesome.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/ionicons/css/ionicons.min.css';

const Home = (props) => {
  return (
	<div>
		<MainTemplate/>

		<section id="intro">
			<div className="intro-content">
				<h2>The <span>ultimate</span> way<br />to learn a language.</h2>
				<div>
					<Link to='/downloads' className="btn-projects scrollto">Download ELLE</Link>
				</div>
			</div>
			<div id="intro-carousel" className="owl-carousel">
				<div className="item" style={{backgroundImage: 'url("../Images/intro-carousel/1.jpg")'}} />
				<div className="item" style={{backgroundImage: 'url("../Images/intro-carousel/2.jpg")'}} />
				<div className="item" style={{backgroundImage: 'url("../Images/intro-carousel/3.jpg")'}} />
				<div className="item" style={{backgroundImage: 'url("../Images/intro-carousel/4.jpg")'}} />
				<div className="item" style={{backgroundImage: 'url("../Images/intro-carousel/5.jpg")'}} />
			</div>
		</section>


		<section id="about" className="wow fadeInUp">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 about-img">
						<img src={require('../Images/ELLE/ELLE_Login.jpg')} alt=""/>
					</div>
					<div className="col-lg-6 content">
						<h2>Meet the Endless Learner.</h2>
						<ul>
							<li><i className="ion-android-checkmark-circle" /> Play an endless runner game where you choose the right translations to keep going!</li>
							<li><i className="ion-android-checkmark-circle" /> Create an account to view statistics, compare your scores, and make new language packs!</li>
							<li><i className="ion-android-checkmark-circle" /> Use ELLE to study for exams or conduct research of your own!</li>
							<li><i className="ion-android-checkmark-circle" /> Available in desktop, mobile, and virtual reality versions!</li>
						</ul>
					</div>
				</div>
			</div>
			<br />
		</section>


		<section id="services" className="wow fadeInUp">
			<div className="container">
				<div className="section-header">
					<h2>What's possible with ELLE</h2>
					<p><Link to='/register'>Sign up</Link> for ELLE now and get a unique profile and tools to make the most of your ELLE experience.</p>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="box wow fadeInLeft">
							<div className="icon"><i className="fa fa-list-ol" /></div>
							<h4 className="title">Study Vocabulary</h4>
							<p className="description">You can view a list of words from every language pack you have. You can view words,
							their translations, and their image and audio files.</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="box wow fadeInRight">
							<div className="icon"><i className="fa fa-language" /></div>
							<h4 className="title">Create Language Decks</h4>
							<p className="description">Build a dictionary of words for any language. Play games with any decks that you create,
							or play games with decks made by other players.</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="box wow fadeInLeft" data-wow-delay="0.2s">
							<div className="icon"><i className="fa fa-bar-chart" /></div>
							<h4 className="title">View Statistics</h4>
							<p className="description">Look at data from every session you've ever played. See how well you do on certain languages
							and what words you should work on the most.</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="box wow fadeInRight" data-wow-delay="0.2s">
							<div className="icon"><i className="fa fa-user" /></div>
							<h4 className="title">Communicate with Instructors</h4>
							<p className="description">ELLE makes it easy for instructors to see how you are progressing through a language.
							They can use your scores and sessions and to help students learn.</p>
						</div>
					</div>
				</div>
			</div>
		</section>


	<section id="team" className="wow fadeInUp">
		<div className="container">
			<div className="section-header">
				<h2>Group Members</h2>
			</div>
			<div className="row">
				<div className="col-lg-1"><div className="member" /></div>
				
				<div className="col-lg-2 col-md-6">
					<div className="member">
					{/*<div className="pic"><img src={require('../Images/ELLE/team-1.jpg')} alt=""/></div>*/}
						<div className="details">
							<h4>Kalonte Jackson-Tate</h4>
							<span>Database Front End</span>
							<div className="social">
								{/*<a href><i className="fa fa-twitter" /></a>
								<a href><i className="fa fa-facebook" /></a>
							<a href><i className="fa fa-linkedin" /></a>*/}
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-lg-2 col-md-6">
					<div className="member">
						{/*<div className="pic"><img src={require('../Images/ELLE/team-2.jpg')} alt=""/></div>*/}
						<div className="details">
							<h4>Eugene</h4>
							<h4>Lucino</h4>
							<span>Website Front End</span>
							<div className="social">
								{/*<a href><i className="fa fa-facebook" /></a>
							<a href><i className="fa fa-linkedin" /></a>*/}
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-lg-2 col-md-6">
					<div className="member">
						{/*<div className="pic"><img src={require('../Images/ELLE/team-3.jpg')} alt=""/></div>*/}
						<div className="details">
							<h4>Christopher Rodbourne</h4>
							<span>Database, API, Mobile</span>
							<div className="social">
							{/*<a href><i className="fa fa-twitter" /></a>
								<a href><i className="fa fa-facebook" /></a>
							<a href><i className="fa fa-linkedin" /></a>*/}
							</div>
							</div>
					</div>
				</div>
				
				<div className="col-lg-2 col-md-6">
					<div className="member">
						{/*<div className="pic"><img src={require('../Images/ELLE/team-4.jpg')} alt=""/></div>*/}
						<div className="details">
							<h4>Josh</h4>
							<h4>Sewnath</h4>
							<span>Project ELLE</span>
							<div className="social">
								{/*<a href><i className="fa fa-twitter" /></a>
								<a href><i className="fa fa-facebook" /></a>
							<a href><i className="fa fa-linkedin" /></a>*/}
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-lg-2 col-md-6">
					<div className="member">
						{/*<div className="pic"><img src={require('../Images/ELLE/testimonial-4.jpg')} alt=""/></div>*/}
						<div className="details">
							<h4>Patrick Thompson</h4>
							<span>Project Manager</span>
							<div className="social">
								{/*<a href><i className="fa fa-twitter" /></a>
								<a href><i className="fa fa-facebook" /></a>
							<a href><i className="fa fa-linkedin" /></a>*/}
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-lg-1"><div className="member" /></div>
			</div> <br />
			

			<div className="section-header">
				<h2>Sponsors</h2>
			</div>
			<div className="row" style={{textAlign: 'center'}}>
				<div className="col-lg-12">
					<h2><a href="https://gamesresearch.cah.ucf.edu/elle-the-endless-learner/">
						UCF GaIM Research Group</a></h2>
					<p>Orlando Tech Center Bldg 500, Orlando, FL 32826</p>
					<p><br /></p>
				</div>
			</div>
			<div className="row" style={{textAlign: 'center'}}>
				<div className="col-lg-4">
					<h4>Dr. Emily Johnson</h4>
					<p>Postdoctoral Research Associate</p>
				</div>
				<div className="col-lg-4">
					<h4>Dr. Amy Giroux</h4>
					<p>Computer Research Specialist, Center of Humanities and Digital Research</p>
				</div>
				<div className="col-lg-4">
					<h4>Dr. Don Merritt</h4>
					<p>Director, Office of Instructional Resources</p>
				</div>
			</div>
		</div>
	</section>

	
	<div className="row" style={{textAlign: 'center'}}>
		<div className="col-lg-12">
			<br/><br/>
			<p>ELLE is a Senior Design project made at the University of Central
				Florida under the direction of Dr. Mark Heinrich.</p>
			<br/>
		</div>
	</div>

	
	<footer id="footer">
		<div className="container">
			<div className="copyright">&copy; Copyright 2019 <strong>Reveal</strong>. All Rights Reserved</div>
			<div className="credits">
			{/*
			All the links in the footer should remain intact.
			You can delete the links only if you purchased the pro version.
			Licensing information: https://bootstrapmade.com/license/
			Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Reveal
			*/}
			Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
			</div>
		</div>
	</footer>
	
	</div>
  );
};

export default Home;
