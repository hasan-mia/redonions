import React from 'react';
import Banner from '../../Banner/Banner';
import Navbar from '../../Navbar/Navbar';
import Products from '../../Products/Products';

const Home = () => {
	return (
		<main>
			<Banner></Banner>
			<Navbar></Navbar>
			<Products></Products>
		</main>
	);
};

export default Home;