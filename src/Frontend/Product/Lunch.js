import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Lunch = ({lunch}) => {
	const {title, img, description, price, id} = lunch
	const lunchDetails = useNavigate()
	return (
		<div className="product-card flex flex-col items-center rounded-lg p-4">
			<img src={img} alt="" className='w-2/4'/>
			<h2 className='text-lg font-semibold py-2'>{title}</h2>
			<p className='text-sm text-justify py-1'>{description.slice(0,60)} </p>
			<p className='text-xl font-semibold'>${price}</p>
			<div className="flex justify-between w-full">
				<button className='btn-cart px-2 py-1 text-xl border-2 rounded-full font-semibold'> <i className="fas fa-cart-plus"></i> </button>
				<button onClick={()=>lunchDetails(`/lunches/${id}`)} className='btn-buy px-2 py-1 text-xl border-2 rounded-3xl font-semibold'>Buy Now</button>
			</div>
		</div>
	);
};

export default Lunch;