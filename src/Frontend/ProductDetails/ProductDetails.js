import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../App';
// import useBreakFast from '../../Hooks/useBreakFast';
import './ProductDetails.css';

const ProductDetails = () => {
	// Get Id From Navigate
	const {id} = useParams();
	// Get All Data
	const [breakfasts] = useContext(productContext);
	// Get Specific Item With ID
 	const breakfast = breakfasts.find(item => item.id === +id);

	return (
		<section className='flex justify-center'>
			<div className="container px-16">
				<div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-3 py-4 product-details">
					<div className="content">
						<h1 className="text-5xl text-black"> {breakfast.title}</h1>
						<p className="text-lg text-justify my-5"> {breakfast.description} </p>
						<div className='flex text-4xl gap-12'>
							<span className='font-semibold'>${breakfast.price}</span>
							<div className="count pb-2">
								<button className='px-3 text-gray-500'>-</button>
								<input type="submit" value='0' className='text-gray-600'/>
								<button className='px-3 text-red-500'>+</button>
							</div>
						</div>
						<button className='flex items-center'> <i className="far fa-cart-plus text-2xl"></i> <span className='px-2 items-baseline'>Add</span></button>
					</div>
					<div className="content-img">
						<img src={breakfast.img} alt=""/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;