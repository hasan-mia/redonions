import React from 'react';
// import { productContext } from '../../App';
import useDinner from '../../Hooks/useDinner';
// import BreakfastDetails from './BreakfastDetails';
// import DinnerDetails from './DinnerDetails';
// import LunchDetails from './LunchDetails';

import './ProductDetails.css';

const ProductDetails = () => {
	const [dinners]=useDinner()
	// const [dinners] = useContext(productContext);
	console.log(dinners);
	return (
		<section className='flex justify-center'>
			<div className="container px-16">
				{/* <BreakfastDetails></BreakfastDetails>
				<LunchDetails></LunchDetails>
				<DinnerDetails></DinnerDetails> */}
			</div>
		</section>
	);
};

export default ProductDetails;