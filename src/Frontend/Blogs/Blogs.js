import React from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
	return (
		<section className='blogs text-center'>
			<div className="container px-8">
				<div className="grid lg:grid-cols-3  md:gird-cols-2 grid-cols-1 gap-5 justify-items-center">
					<Blog></Blog>
					<Blog></Blog>
					<Blog></Blog>
				</div>
			</div>
		</section>
	);
};

export default Blogs;