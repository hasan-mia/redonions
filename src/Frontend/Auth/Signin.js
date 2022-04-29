import React from 'react';
import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import './Auth.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/Firebase.init';
import SocialLogin from './SocialLogin';

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

				<SocialLogin></SocialLogin>
			</div>
		</section>
	);
};

export default Signin;