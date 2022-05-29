import React from 'react';
import { Tab } from '@headlessui/react'
import './Products.css'
import Breakfasts from './Breakfasts';
import Lunches from './Lunches';
import Dinners from './Dinners';

const Products = () => {
	return (
		<section className='category mx-auto text-center'>
			<div className="container px-6">
					 <Tab.Group>
						<Tab.List className='flex justify-center py-8'>
							<Tab className="px-2 py-2 flex items-center active:border-b-1 active:border-red-600 active:text-red-600 text-xl capitalize font-semibold">BreakFast</Tab>
							<Tab className="px-2 py-2 flex items-center active:border-b-1 active:border-red-600 active:text-red-600 text-xl capitalize font-semibold">Lunch</Tab>
							<Tab className="px-2 py-2 flex items-center active:border-b-1 active:border-red-600 active:text-red-600 text-xl capitalize font-semibold">Dinner</Tab>
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