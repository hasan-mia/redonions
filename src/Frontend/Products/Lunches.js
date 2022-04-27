import React from 'react';
import useLunch from '../../Hooks/useLunch';
import Lunch from '../Product/Lunch';
import './Products.css'

const Lunches = () => {
	const [lunches] = useLunch();
	// console.log(lunches);
	return (
		<section className='category text-center'>
			<div className="container px-8">
				<div className="grid lg:grid-cols-4  md:gird-cols-2 grid-cols-1 gap-5 justify-items-center">
					
					{
						lunches.map(lunch => <Lunch key={lunch.id} lunch={lunch}></Lunch>)
					} 
					
				</div>
				
			</div>
		</section>
	);
};

export default Lunches;