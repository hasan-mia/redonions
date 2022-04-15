import React from 'react';
import Banner from '../../Banner/Banner';
import Blogs from '../../Blogs/Blogs';
import Navbar from '../../Navbar/Navbar';
import Products from '../../Products/Products';

const Home = () => {
	return (
		<main>
			<Banner></Banner>
			<Navbar></Navbar>
			<Products></Products>
			<Blogs></Blogs>
		</main>
	);
};

export default Home;