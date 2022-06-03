import React, {useState } from 'react';
import { Tab } from '@headlessui/react'
import './Products.css'
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
	const {products}=useProducts()
	const[catProducts, setCatProducts]=useState(products);
	
	// ========CategoryWise Product=======
	const filterCategory =(category)=>{
		const categoryWiseProduct = products.filter((productCat)=>{
			return productCat.category === category;
		})
		setCatProducts(categoryWiseProduct)
	}

	// ========Get All Uniq Category From Product=======
	const categoyList = [...new Set(products.map((product) => {
		return product.category
	}))]
	// categoyList.map(cat=>console.log(cat))


	return (
		<section className='category mx-auto text-center'>
			<div className="container px-6">
					 <Tab.Group>
						<Tab.List className='flex justify-center py-8'>
							<Tab onClick={()=>setCatProducts(products)} className="px-2 py-2 flex items-center active:border-b-1 active:border-red-600 active:text-red-600 text-xl capitalize font-semibold">All</Tab>
							{
								categoyList.map(categoryName=>
									<Tab onClick={()=>filterCategory(categoryName)} className="px-2 py-2 flex items-center active:border-b-1 active:border-red-600 active:text-red-600 text-xl capitalize font-semibold">	
									{categoryName}
									</Tab>
								)

							}
							
						 </Tab.List>

						<Tab.Panels>
							<Tab.Panel>
							<div className='category text-center'>
								<div className="container px-8">
									<div className="grid lg:grid-cols-4  md:gird-cols-2 grid-cols-1 gap-5 justify-items-center">					
										{
											products.reverse().slice(0, 12).map(product => <Product key={product._id} product={product}></Product>)
										}					
									</div>						
								</div>
							</div>
							</Tab.Panel>
							<Tab.Panel>
							<div className='category text-center'>
								<div className="container px-8">
									<div className="grid lg:grid-cols-4  md:gird-cols-2 grid-cols-1 gap-5 justify-items-center">					
										{
											catProducts.map(product => <Product key={product._id} product={product}></Product>)
										}					
									</div>						
								</div>
							</div>
							</Tab.Panel>
							<Tab.Panel>
							<div className='category text-center'>
								<div className="container px-8">
									<div className="grid lg:grid-cols-4  md:gird-cols-2 grid-cols-1 gap-5 justify-items-center">					
										{
											catProducts.map(product => <Product key={product._id} product={product}></Product>)
										}					
									</div>						
								</div>
							</div>
							</Tab.Panel>
							<Tab.Panel>
							<div className='category text-center'>
								<div className="container px-8">
									<div className="grid lg:grid-cols-4  md:gird-cols-2 grid-cols-1 gap-5 justify-items-center">					
										{
											catProducts.map(product => <Product key={product._id} product={product}></Product>)
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