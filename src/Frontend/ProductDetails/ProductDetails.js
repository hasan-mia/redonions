import React, { useContext, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../App';
import './ProductDetails.css';

const ProductDetails = () => {
	// Get Id From Navigate
	const {id} = useParams();
	// Get All Data
	const {products} = useContext(productContext);
	// Get Specific Item With ID
 	const product = products.find(item => item._id === id);
	const {title, description,price,img} = product;
	// Create Markup HTML
	const createMarkup = (htmlContent) => { 
		return { __html: htmlContent }
	}
	
	// ====Product Increment & Decrement=====
	
	const reducer = (state, action) => {
		if (action.type === 'increment') {
			state = state + 1;
		}
		if (state > 0 && action.type === 'decrement') {
			state = state - 1;
		}
		return state;
	}
	const count =0;
	const[state, dispatch]=useReducer(reducer, count);
	
	return (
		<section className='flex justify-center'>
			<div className="container px-16">
				<div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-3 py-4 product-details">
					<div className="content">
						<h1 className="text-5xl text-black"> {title}</h1>
						<p className="text-lg text-justify my-5">
							<div dangerouslySetInnerHTML={createMarkup(`${description}`)} />
						</p>

						<div className='flex justify-start pl-auto text-4xl'>
							<span className='font-semibold'>${price}</span>
							<div className="flex ml-8 rounded-full border-2 gap-5">
								<button onClick={()=>dispatch({type:'decrement'})} className=' text-gray-500 p-1'>-</button>
									<input type="text" value={state} className='text-gray-600 text-3xl w-8'/>
								<button onClick={()=>dispatch({type:'increment'})} className=' text-red-500 p-1'>+</button>
							</div>
						</div>
						<button className='flex items-center'> <i className="far fa-cart-plus text-2xl"></i> <span className='px-2 items-baseline'>Add</span></button>
					</div>
					<div className="content-img">
						<img src={img} alt=""/>
					</div>
				</div>
				{/* <Link to='/' className='text-center text-3xl mb-3 text-red-500 font-semibold mx-auto bg-teal-50'>Back</Link> */}
			</div>
		</section>
	);
};

export default ProductDetails;