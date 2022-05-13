import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import auth from '../../Firebase/Firebase.init';
import './Auth.css';

const Signup = () => {
	const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
	return (
		<section className='grid justify-center'>
			<div className="container px-16 py-1">
				<div className="signup-title">
					<img src={logo} alt="" className='lg:w-1/3 w-1/2'/>
				</div>
				
				<div className="grid">
					<form className='form'>
						<input type="Name" placeholder='Name' className='p-2 mb-1 border-2 lg:w-2/5 w-full' />
						<input type="email" placeholder='Email' className='p-2 mb-1 border-2 lg:w-2/5 w-full' />
						<input type="password" placeholder='Password' className='p-2 mb-1 border-2 lg:w-2/5 w-full' />
						<input type="password" placeholder='Confirm Password' className='p-2 mb-1 border-2 lg:w-2/5 w-full' />
						<button type="submit" className='p-2 mb-1 border-2 lg:w-2/5 w-full bg-red-500 text-white'>Sign up</button>
					</form>
					<Link to='/signin' className='text-center text-red-600'>Already have an account?</Link>
				</div>
			</div>
		</section>
	);
};

export default Signup;