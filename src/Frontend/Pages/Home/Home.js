import React from 'react';
import Banner from '../../Banner/Banner';
import Blogs from '../../Blogs/Blogs';
import Products from '../../Products/Products';
// import Test from '../../Test';
const Home = () => {
	return (
		<main>
			<Banner></Banner>
			<Products></Products>
			<Blogs></Blogs>
			{/* <Test></Test> */}
		</main>
	);
};

export default Home;