import React from 'react';

const useReducers = () => {
	  // ====Product Cart Increment & Decrement=====
	const reducer = (cart, action) => {
		if (action.type === 'increment') {
			cart = cart + 1;
		}
		if (cart > 0 && action.type === 'decrement') {
			cart = cart - 1;
		}
		return cart;
	}
	const initState = 0;
	const{cart, dispatch}=useCarts(reducer, initState);

	return (
		<div>
			<div className="flex ml-8 rounded-full border-2 gap-5">
				<button onClick={()=>dispatch({type:'decrement'})} className=' text-gray-500 p-1'>-</button>
					<input type="text" value={cart} className='text-gray-600 text-3xl w-8'/>
				<button onClick={()=>dispatch({type:'increment'})} className=' text-red-500 p-1'>+</button>
			</div>
		</div>
	);
};

export default useReducers;