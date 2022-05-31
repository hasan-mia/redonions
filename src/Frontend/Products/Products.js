import React from 'react';
import { Tab } from '@headlessui/react'
import './Products.css'
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
	const {products}=useProducts()
	console.log(products);
	return (
		<section className='category mx-auto text-center'>
			<div className="container px-6">
					 <Tab.Group>
						<Tab.List className='flex justify-center py-8'>
							<Tab className="px-2 py-2 flex items-center active:border-b-1 active:border-red-600 active:text-red-600 text-xl capitalize font-semibold">BreakFast</Tab>
							{/* <Tab className="px-2 py-2 flex items-center active:border-b-1 active:border-red-600 active:text-red-600 text-xl capitalize font-semibold">Lunch</Tab>
							<Tab className="px-2 py-2 flex items-center active:border-b-1 active:border-red-600 active:text-red-600 text-xl capitalize font-semibold">Dinner</Tab> */}
						</Tab.List>
						<Tab.Panels>
							<Tab.Panel>
							<div className='category text-center'>
								<div className="container px-8">
									<div className="grid lg:grid-cols-4  md:gird-cols-2 grid-cols-1 gap-5 justify-items-center">					
										{
											products.map(product => <Product key={product.id} product={product}></Product>)
										}					
									</div>						
								</div>
							</div>
							</Tab.Panel>
						
						</Tab.Panels>
						</Tab.Group>
					
				</div>
		</section>
	);
};

export default Products;