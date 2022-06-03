import React, { useContext } from 'react';
import { productContext } from '../../App';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
	const {blogs} = useContext(productContext);
	return (
		<section className='blogs text-center'>
			<div className="container px-8">
				<div className="grid lg:grid-cols-3  md:gird-cols-2 grid-cols-1 gap-5 justify-items-center">
					{
						blogs.map(blog=><Blog key={blog._id} blog={blog}></Blog>)
					}
					
				</div>
			</div>
		</section>
	);
};

export default Blogs;