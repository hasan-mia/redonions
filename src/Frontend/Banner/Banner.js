import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import useProducts from '../../Hooks/useProducts';
import './Banner.css';

const Banner = () => {
	const {products}=useProducts()
	const [searchText, setSearchText] = useState();
    const [searchResult, setSearchResult] = useState();
	 // Search handler
    const searchHandler = e =>{
        setSearchText(e.target.value);
    }
     useEffect(() => {
     	const findProduct = products.filter(product => (product.title).toLowerCase().includes(searchText))
        setSearchResult(findProduct);
    }, [searchText])

	return (
		<>
		<section className='banner text-center'>
			<div className="container">
				<div className='banner-content text-center'>
					<h2 className='md:text-6xl text-xl font-semibold'>Best food waiting for bally</h2>
					<form className='search py-5'>
						<input onChange={searchHandler} type="search" placeholder='search food items' className='py-3 w-100 rounded-3xl'/>
						<button type='button' className='search-btn py-3 rounded-3xl text-white bg-red-500'> search </button>
					</form>
				</div>
			</div>
		</section>
		{/*=========Search Product====== */}
		{
			searchText &&
			<section className='mt-4'>
			<div className='category text-center'>
				<div className="container px-8">
					<div className="grid lg:grid-cols-4  md:gird-cols-2 grid-cols-1 gap-5 justify-items-center">					
						{
							// searchResult === null ? <p className='text-center text-lg font-semibold'>Sorry! Not match..</p>
							// :
							searchResult?.map(product => <Product key={product._id} product={product}></Product>)
						}					
					</div>						
				</div>
			</div>
		</section>
		}
		
		</>
	);
};

export default Banner;