import React from 'react';
import './Products.css'

const Products = () => {
	return (
		<section className='category'>
			<div className="container px-8">
				<div className="grid grid-cols-4 gap-5 justify-items-center">
					<div className="product-card flex flex-col items-center rounded-lg p-4">
						<img src="https://i.imgur.com/wdWvEtb.png" alt="" className='w-2/4'/>
						<h2 className='text-lg font-semibold py-2'>Helthy meal plan</h2>
						<p className='text-sm text-justify py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
						<p className='text-xl font-semibold'>$599</p>
						<div className="flex justify-between w-full">
							<button className='px-2 text-xl '>Cart</button>
							<button className='px-2 text-xl '>Buy</button>
						</div>
					</div>
					<div className="product-card flex flex-col items-center rounded-lg p-4">
						<img src="https://i.imgur.com/wdWvEtb.png" alt="" className='w-2/4'/>
						<h2 className='text-lg font-semibold py-2'>Helthy meal plan</h2>
						<p className='text-sm text-justify py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
						<p className='text-xl font-semibold'>$599</p>
						<div className="flex justify-between w-full">
							<button className='px-2 text-xl '>Cart</button>
							<button className='px-2 text-xl '>Buy</button>
						</div>
					</div>
					<div className="product-card flex flex-col items-center rounded-lg p-4">
						<img src="https://i.imgur.com/wdWvEtb.png" alt="" className='w-2/4'/>
						<h2 className='text-lg font-semibold py-2'>Helthy meal plan</h2>
						<p className='text-sm text-justify py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
						<p className='text-xl font-semibold'>$599</p>
						<div className="flex justify-between w-full">
							<button className='px-2 text-xl '>Cart</button>
							<button className='px-2 text-xl '>Buy</button>
						</div>
					</div>
					<div className="product-card flex flex-col items-center rounded-lg p-4">
						<img src="https://i.imgur.com/wdWvEtb.png" alt="" className='w-2/4'/>
						<h2 className='text-lg font-semibold py-2'>Helthy meal plan</h2>
						<p className='text-sm text-justify py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
						<p className='text-xl font-semibold'>$599</p>
						<div className="flex justify-between w-full">
							<button className='px-2 text-xl '>Cart</button>
							<button className='px-2 text-xl '>Buy</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;