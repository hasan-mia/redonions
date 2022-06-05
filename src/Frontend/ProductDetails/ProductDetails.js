import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../App';
import { useCart } from 'react-use-cart';
import './ProductDetails.css';

const ProductDetails = () => {
	// Get Id From Navigate
	const {id} = useParams();
	// Get All Data
	const {products} = useContext(productContext);
	// Get Specific Item With ID
 	const product = products.find(item => item._id === id);
	const {title, description, price, img} = product;

	// Create Markup HTML
	const createMarkup = (htmlContent) => { 
		return { __html: htmlContent }
	}

	const {addItem} = useCart();
	
	return (
		<section className='flex justify-center'>
			<div className="container px-16">
				<div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-3 py-4 product-details">
					<div className="content">
						<h1 className="text-5xl text-black"> {title}</h1>
						<p className="text-lg text-justify my-5">
							<div dangerouslySetInnerHTML={createMarkup(`${description}`)} />
						</p>

						<div className='flex items-center justify-between'>
							<div className='text-4xl'>
								<span className='font-semibold'>${price}</span>
							</div>
							{/* <div className="flex ml-8 rounded-full border-2 gap-5">
								<button onClick={() => updateItemQuantity(product.id, totalItems - 1)} className=' text-gray-500 p-1'>-</button>
									<input type="text" value={quantity} className='text-gray-600 text-3xl w-8'/>
								<button onClick={() => updateItemQuantity(product.id, totalItems + 1)} className=' text-red-500 p-1'>+</button>
							</div> */}
							<button onClick={() => addItem(product)} className='flex text-2xl items-center cart px-4 py-2 uppercase w-6/12'> <i className="far fa-cart-plus text-2xl"></i> <span className='px-2 items-baseline'>Add to cart</span></button>

						</div>

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