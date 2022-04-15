import React from 'react';
import './Blog.css'
const Blog = () => {
	return (
		<div className="blog-card flex flex-col rounded-lg p-4">
			<img src="https://i.imgur.com/9eEal4H.png" alt="" className='w-full'/>
			<div className="card-title flex items-center">
				<span className='text-lg font-semibold px-2 py-1 mr-2 text-white bg-red-500 rounded-full'> <i className='fad fa-blog'></i> </span>
				<h2 className='text-lg font-semibold py-2'>Helthy meal plan</h2>
			</div>
			<div className="grid">
				<p className='text-sm text-justify py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, repudiandae reprehenderit fugit blanditiis soluta nesciunt necessitatibus quae explicabo excepturi perferendis at quo dolore esse iste officiis voluptates fugiat nulla voluptatum.</p>
				<a href='' className='text-lg text-left font-semibold text-blue-600'>see more<i className='fas fa-arrow-right bg-green-400 rounded-full py-1 px-2 ml-2 text-sm text-white'></i> </a>
			</div>
		</div>
	);
};

export default Blog;