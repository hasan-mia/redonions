import React from 'react';
import './Product.css'
const Product = () => {
	return (
		<div className="product-card flex flex-col items-center rounded-lg p-4">
			<img src="https://i.imgur.com/wdWvEtb.png" alt="" className='w-2/4'/>
			<h2 className='text-lg font-semibold py-2'>Helthy meal plan</h2>
			<p className='text-sm text-justify py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
			<p className='text-xl font-semibold'>$599</p>
			<div className="flex justify-between w-full">
				<button className='btn-cart px-2 py-1 text-xl border-2 rounded-full font-semibold'> <i className="fas fa-cart-plus"></i> </button>
				<button className='btn-buy px-2 py-1 text-xl border-2 rounded-3xl font-semibold'>Buy Now</button>
			</div>
		</div>
	);
};

export default Product;