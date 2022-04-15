import React from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
	return (
		<section className='category text-center'>
			<div className="container px-8">
				<div className="grid lg:grid-cols-4  md:gird-cols-2 grid-cols-1 gap-5 justify-items-center">
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
				</div>
				<button className='text-xl my-8 py-2 px-4 rounded-lg bg-gray-500 text-white'>Checkout Your Food</button>
			</div>
		</section>
	);
};

export default Products;