import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css'
const Blog = ({blog}) => {
	const {title, shortdesc, img, _id} = blog;
	const blogDetails = useNavigate()
	// Create Markup HTML
	const createMarkup = (htmlContent) => { 
		return { __html: htmlContent }
	}
	return (
		<div className="blog-card flex flex-col rounded-lg p-4">
			<img src={img} alt="" className='w-full'/>
			<div className="card-title flex items-center">
				<span className='text-lg font-semibold px-2 py-1 mr-2 text-white bg-red-500 rounded-full'> <i className='fad fa-blog'></i> </span>
				<h2 className='text-lg font-semibold py-2'>{title}</h2>
			</div>
			<div className="grid">
				<p className='text-sm text-justify py-1'>
					<div dangerouslySetInnerHTML={createMarkup(`${shortdesc}`)} />
				</p>
				<button onClick={()=>blogDetails(`/blog/${_id}`)} className='text-lg text-left font-semibold text-blue-600 cursor-pointer'>see more<i className='fas fa-arrow-right bg-green-400 rounded-full py-1 px-2 ml-2 text-sm text-white'></i> </button>
			</div>
		</div>
	);
};

export default Blog;