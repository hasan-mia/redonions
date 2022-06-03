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
					<div className="w-12/12 lg:w-8/12">
						<div className="w-full">
							<img src={img} alt="" className='w-full h-96'/>
						</div>
						<div className="blog">
							<h1 className="text-5xl text-black"> {title}</h1>
							<p className="text-lg text-justify my-5"> <div dangerouslySetInnerHTML={createMarkup(`${description}`)} /> </p>
						</div>
					</div>

					<div className="w-12/12 lg:w-4/12">
						{
							blogs.reverse([]).slice(0,3).map(blogItem=>
							<div key={blogItem._id} className="flex border-b">
								<img src={blogItem?.img} alt="blog thumbnail" className='w-2/6 h-16 my-1'/>
								<Link to={`/blog/${blogItem._id}`} className="text-lg font-semibold pl-1 text-black w-4/6"> <h2>{blogItem?.title}</h2></Link>
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