import React from 'react';
import useDinner from '../../Hooks/useDinner';
import Dinner from '../Product/Dinner';
import './Products.css'

const Dinners = () => {
	const {dinners} = useDinner();
	return (
		<section className='category text-center'>
			<div className="container px-8">
				<div className="grid lg:grid-cols-4  md:gird-cols-2 grid-cols-1 gap-5 justify-items-center">
					
					{
						dinners.map(dinner => <Dinner key={dinner.id} dinner={dinner}></Dinner>)
					}
					
				</div>
				
			</div>
		</section>
	);
};

export default Dinners;