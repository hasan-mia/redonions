import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productContext } from '../../App';
import './BlogDetails.css';
const BlogDetails = () => {
	// Get Id From Navigate
	const {id} = useParams();
	// Get All Data
	const [breakfasts, lunches, dinners, blogs] = useContext(productContext);
	// Get Specific Item With ID
	const blog = blogs.find(item => item.id === +id)
	const {title, description,price,img} = blog;
	return (
		<section className='flex justify-center'>
			<div className="container px-16 py-2">
				<div className="grid md:grid-cols-1 lg:grid-cols-1 grid-cols-1 gap-3 mt-3 blog-details">
					<div className="blog-img">
						<img src={img} alt=""/>
					</div>
					<div className="blog">
						<h1 className="text-5xl text-black"> {title}</h1>
						<p className="text-lg text-justify my-5"> {description} </p>
					</div>
				</div>
				<Link to='/' className='text-center text-3xl mb-3 text-red-500 font-semibold mx-auto bg-teal-50'>Back</Link>
			</div>
		</section>
	);
};

export default BlogDetails;