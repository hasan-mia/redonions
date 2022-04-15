import React from 'react';
import './Banner.css'

const Banner = () => {
	return (
		<section className='banner text-center'>
			<div className="container">
				<div className='text-center'>
					<h2 className='text-3xl font-semibold pt-36'>Best food waiting for bally</h2>
					< form className='search'>
						<input type="search" placeholder='search food items' className='py-3 px-40 w-100 rounded-3xl'/>
						<button type='button' className='search-btn py-3 px-10 rounded-3xl text-white bg-red-500'> search </button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Banner;