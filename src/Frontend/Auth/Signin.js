import React from 'react';
import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import './Auth.css';

const Signin = () => {
	return (
		<section className='grid justify-center'>
			<div className="container px-16 pt-1">
				<div className="signup-title">
					<img src={logo} alt="" className='lg:w-1/3 w-1/2'/>
				</div>
				
				<div className="grid">
					<form className='form'>
						<input type="email" placeholder='Email' className='p-2 mb-1 border-2 lg:w-2/5 w-full' />
						<input type="password" placeholder='Password' className='p-2 mb-1 border-2 lg:w-2/5 w-full' />
						<button type="submit" className='p-2 mb-1 border-2 lg:w-2/5 w-full bg-red-500 text-white'>Sign in</button>
					</form>
					<Link to='/signup' className='text-center text-red-600'>Need an account?</Link>
				</div>

				<div className="flex justify-center gap-4 py-2">
					<button> <i className='fab fa-facebook text-3xl p-1 hover:text-blue-600 hover:bg-blue-200 bg-blue-600 text-white rounded-md'></i> </button>
					<button> <i className='fab fa-google text-3xl p-1 hover:text-red-500 hover:bg-red-300 bg-red-500 text-white rounded-md'></i> </button>
				</div>
			</div>
		</section>
	);
};

export default Signin;