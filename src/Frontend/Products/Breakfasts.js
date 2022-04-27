import React from 'react';
import useBreakFast from '../../Hooks/useBreakFast';
import Breakfast from '../Product/Breakfast';
import './Products.css'

const Breakfasts = () => {
	const [breakfasts] = useBreakFast();
	return (
		<section className='category text-center'>
			<div className="container px-8">
				<div className="grid lg:grid-cols-4  md:gird-cols-2 grid-cols-1 gap-5 justify-items-center">
					
					{
						breakfasts.map(breakfast => <Breakfast key={breakfast.id} breakfast={breakfast}></Breakfast>)
					}
					
				</div>
				
			</div>
		</section>
	);
};

export default Breakfasts;