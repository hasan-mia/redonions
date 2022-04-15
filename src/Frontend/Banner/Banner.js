import React from 'react';
import './Banner.css'

const Banner = () => {
	return (
		<section className='banner text-center'>
			<div className="container">
				<div className='banner-content text-center'>
					<h2 className='md:text-6xl text-xl font-semibold'>Best food waiting for bally</h2>
					< form className='search py-5'>
						<input type="search" placeholder='search food items' className='py-3 w-100 rounded-3xl'/>
						<button type='button' className='search-btn py-3 rounded-3xl text-white bg-red-500'> search </button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Banner;