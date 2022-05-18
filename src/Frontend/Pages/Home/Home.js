import React from 'react';
import Banner from '../../Banner/Banner';
import Blogs from '../../Blogs/Blogs';
import Products from '../../Products/Products';
const Home = () => {
	return (
		<main>
			<Banner></Banner>
			<Products></Products>
			<Blogs></Blogs>
		</main>
	);
};

export default Home;