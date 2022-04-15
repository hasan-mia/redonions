import React from 'react';
import './ProductDetails.css'
const ProductDetails = () => {
	return (
		<section className='flex justify-center'>
			<div class="container px-16">
				<div class="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-3 py-4 product-details">
					<div class="content">
						<h1 class="text-5xl text-black"> Light Breakfast</h1>
						<p class="text-lg text-justify my-5"> Fish pie is usually made with fresh and smoked fish (for example cod, haddock, salmon, or halibut) or seafood in a white sauce[1] or cheddar cheese sauce made using the milk the fish was poached in. Hard-boiled eggs are a common additional ingredient.[citation needed] Parsley or chives are sometimes added to the sauce. It is oven-baked in a deep dish but is not usually made with the shortcrust or puff pastry casing that is associated with most savory pies (e.g. steak and kidney pie). </p>
						<div className='flex text-4xl gap-12'>
							<span className='font-semibold'>$55.9</span>
							<div className="count pb-2">
								<button className='px-3 text-gray-500'>-</button>
								<input type="submit" value='0' className='text-gray-600'/>
								<button className='px-3 text-red-500'>+</button>
							</div>
						</div>
						<button className='flex items-center'> <i className="far fa-cart-plus text-2xl"></i> <span className='px-2 items-baseline'>Add</span></button>
					</div>
					<div class="content-img">
						<img src="https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg" alt="" className='b'/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;