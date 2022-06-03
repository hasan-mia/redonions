import React from 'react';

const Search = () => {
	return (
		< form className='search py-5'>
			<input onChange={searchHandler} type="search" placeholder='search food items' className='py-3 w-100 rounded-3xl'/>
			<button type='button' className='search-btn py-3 rounded-3xl text-white bg-red-500'> search </button>
		</form>
		
	);
};

export default Search;