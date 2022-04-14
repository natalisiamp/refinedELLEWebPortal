import React, { Component } from 'react';
import { Button } from 'reactstrap';
import MainTemplate from '../pages/MainTemplate'; 
import Template from '../pages/Template';

import '../stylesheets/style.css';
import '../lib/bootstrap/css/bootstrap.min.css';
import '../lib/font-awesome/css/font-awesome.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/ionicons/css/ionicons.min.css';

// import banner from '../Images/ELLEDownloadsBanner.mp4';

import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({

  loaderUrl: 'Build/DevBuild413v4.loader.js',
  dataUrl: 'Build/DevBuild413v4.data',
  frameworkUrl: 'Build/DevBuild413v4.framework.js',
  codeUrl: 'Build/DevBuild413v4.wasm',

});


export default class MazeGame extends Component {
	constructor(props) {
		super(props);

		this.state = {
			permission: this.props.user.permission,
			username: this.props.user.username,
			password: this.props.user.password,
		}
		console.log(this.state);
	
	}  

	componentDidMount() {
		this.verifyPermission(); 
	}

	verifyPermission = () => {
		const jwt = localStorage.getItem('jwt');
		//console.log("jwt as retrieved from localStorage: " + jwt);
		if (!jwt) {
		  this.props.history.push(this.props.location.pathname);
		}
		else {
			var jwtDecode = require('jwt-decode');
		
			var decoded = jwtDecode(jwt);
		
			this.setState({ permission: decoded.user_claims.permission }); 
			//console.log("sending following jwt to sendLogin: " + jwt + " decoded: " + decoded)
			//console.log("identity test: " + decoded.identity);
			//unityContext.send("ContinueButton", "loginAttempt", {"access_token": jwt, "id": decoded.identity});
			//console.log("login sent");
		}
		
		//this.sendLogin(jwt, decoded);
	}   
	
	sendLogin() {
		const jwt = localStorage.getItem('jwt');
		var jwtDecode = require('jwt-decode');	
		var decoded = jwtDecode(jwt);
		console.log("jwt received: " + jwt)
		unityContext.send("ContinueButton", "loginAttempt", {"access_token": jwt, "id": decoded.identity});
		console.log("login sent");
	  }
	  
	handleOnClickFullscreen() {
		  unityContext.setFullscreen(true);
	}
	render() {
	return (  
	<div className="downloadsBg">
		
		{localStorage.getItem('jwt') === null ? <MainTemplate /> : <Template permission={this.state.permission}/>}
		<h3 style={{color: '#ffffff'}}>ELLE aMAZEing Game</h3>
						<p style={{color: '#ffffff'}}className="cta-text">Senior Design Team:</p>
						<ul style={{color: '#ffffff'}}>
								<li>Annabel Bland</li>
								<li>Tyler Morejon</li>
								<li>Nathan Otis</li>
                                <li>Daniel Rodriguez</li>
                                <li>Tanner Williams</li>
						</ul>

						<center>
						<Unity unityContext={unityContext} style={{
							height: "75%",
							width: "75%",
							border: "2px solid black",
							background: "grey",
						}}/>
						<br />
						<br />
						<Button onClick={this.sendLogin}>Fullscreen</Button>
						<p></p>
						<br />
						</center>
		<footer id="footer">
			<div className="container">
				<div className="copyright">&copy; Copyright 2022 <strong>Reveal</strong>. All Rights Reserved</div>
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
	}
}
