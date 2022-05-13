import React from 'react';
import error from '../../Assets/logo.png'

const Notfound = () => {
	return (
		<section className='grid justify-center'>
			<div className="container px-16 py-1">
				<div className="signup-title">
					<img src={error} alt="" className='lg:w-1/3 w-1/2'/>
				</div>
			</div>
		</section>
	);
};

export default Notfound;