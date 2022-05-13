import React from 'react';
import { Tab } from '@headlessui/react'
import './Products.css'
import Breakfasts from './Breakfasts';
import Lunches from './Lunches';
import Dinners from './Dinners';

const Products = () => {
	return (
		<section className='category text-center'>
			<div className="container px-8">
					 <Tab.Group>
						<Tab.List className='flex justify-center py-8'>
							<Tab className="px-2 py-2 flex items-center hover:border-b-2 border-red-600 hover:text-red-600 text-xl capitalize font-semibold">BreakFast</Tab>
							<Tab className="px-2 py-2 flex items-center hover:border-b-2 border-red-600 hover:text-red-600 text-xl capitalize font-semibold">Lunch</Tab>
							<Tab className="px-2 py-2 flex items-center hover:border-b-2 border-red-600 hover:text-red-600 text-xl capitalize font-semibold">Dinner</Tab>
						</Tab.List>
						<Tab.Panels>
							<Tab.Panel>
								<Breakfasts/>
							</Tab.Panel>
							<Tab.Panel>
								<Lunches/>
							</Tab.Panel>
							<Tab.Panel>
								<Dinners/>
							</Tab.Panel>
						</Tab.Panels>
						</Tab.Group>
					
				</div>
		</section>
	);
};

export default Products;