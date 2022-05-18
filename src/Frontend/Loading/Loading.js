import React from 'react';
import loader from '../../Assets/loading.gif'

const Loading = () => {
	return (
		<div className='flex justify-center'>
			<img src={loader} alt="loader" />
		</div>
	);
};

export default Loading;