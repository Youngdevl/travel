/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import background from "../images/bg-img/01.jpg";
import Navbar from '../Navbar/navbar';
import Tours from '../Tours/tours'
import Body from '../Body/body'
import './home.css'
class Home extends Component {
render() {
	const myStyle={
		backgroundImage: `url(${background})`,
		height:'100vh',
		marginTop:'-20px',
		fontSize:'50px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	};
	return (
	<div style={myStyle}>
		<Navbar/>
    <Body/>
	<Tours/>
	</div>
	);
}
}

export default Home;
