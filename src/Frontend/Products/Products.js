import React from 'react';
// import { Link } from 'react-router-dom';
// import { productContext } from '../../App';
import useBreakFast from '../../Hooks/useBreakFast';
import useDinner from '../../Hooks/useDinner';
import useLunch from '../../Hooks/useLunch';
import Breakfast from '../Product/Breakfast';
import Dinner from '../Product/Dinner';
import Lunch from '../Product/Lunch';
import './Products.css'

const Products = () => {
	const [breakfasts] = useBreakFast();
	const [lunches] = useLunch();
	const [dinners] = useDinner();
	return (
		<section className='category text-center'>
			<div className="container px-8">
				<div className="grid lg:grid-cols-4  md:gird-cols-2 grid-cols-1 gap-5 justify-items-center">
					
					{
						breakfasts.map(breakfast => <Breakfast key={breakfast.id} breakfast={breakfast}></Breakfast>)
					}
					
					{
						lunches.map(lunch => <Lunch key={lunch.id} lunch={lunch}></Lunch>)
					} 
					
					{
						dinners.map(dinner => <Dinner key={dinner.id} dinner={dinner}></Dinner>)
					}
					
				</div>
				
			</div>
		</section>
	);
};

export default Products;