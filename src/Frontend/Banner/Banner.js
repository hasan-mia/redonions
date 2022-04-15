import React from 'react';
import './Banner.css'

const Banner = () => {
	return (
		<section className='banner'>
			<div className="container">
				<div className='search'>
					< form >
						<input type="search" placeholder='search food items' className='py-3 px-40 w-100 rounded-3xl'/>
						<button type='button' className='search-btn py-3 px-6 rounded-3xl text-white bg-red-500'> search </button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Banner;