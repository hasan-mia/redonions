import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from '../../App';
// import useBreakFast from '../../Hooks/useBreakFast';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
	const [breakfasts] = useContext(productContext);
	return (
		<section className='category text-center'>
			<div className="container px-8">
				<div className="grid lg:grid-cols-4  md:gird-cols-2 grid-cols-1 gap-5 justify-items-center">
					
					{
						breakfasts.map(breakfast => <Product key={breakfast.id} breakfast={breakfast}></Product>)
					}
					
				</div>
				<button className='text-xl my-8 py-2 px-4 rounded-lg bg-gray-500 text-white hover:bg-black'>
					<Link to='/productdetails'>Checkout Your Food</Link>
				</button>
			</div>
		</section>
	);
};

export default Products;