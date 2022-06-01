import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productContext } from '../../App';
import './BlogDetails.css';
const BlogDetails = () => {
	// Get Id From Navigate
	const {id} = useParams();
	// Get All Data
	const {blogs}= useContext(productContext);
	// Get Specific Item With ID
	const blog = blogs.find(item => item._id === id)
	const {title, description,img} = blog;
	// Create Markup HTML
	const createMarkup = (htmlContent) => { 
		return { __html: htmlContent }
	}
	return (
		<section className='flex justify-center'>
			<div className="container px-16 py-2">
				<div className="grid lg:flex gap-x-4">
					<div className="w-12/12 lg:7/12">
						<div className="w-full">
							<img src={img} alt=""/>
						</div>
						<div className="blog">
							<h1 className="text-5xl text-black"> {title}</h1>
							<p className="text-lg text-justify my-5"> <div dangerouslySetInnerHTML={createMarkup(`${description}`)} /> </p>
						</div>
					</div>

					<div className="w-12/12 lg:w-5/12">
						{
							blogs.map(blog=>
							<div key={blog._id} className="flex">
								<img src={img} alt="blog thumbnail" className='w-12'/>
								<Link to={`/blogDetails/${blog._id}`} className="text-md text-black"> {title}</Link>
							</div>	
							)
						}
					</div>
				</div>
				
				
				<Link to='/' className='text-center text-3xl mb-3 text-red-500 font-semibold mx-auto bg-teal-50'>Back</Link>
			</div>
		</section>
	);
};

export default BlogDetails;