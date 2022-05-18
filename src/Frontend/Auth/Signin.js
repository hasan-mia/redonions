import React, { useEffect } from 'react';
import logo from '../../Assets/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Auth.css';
import SocialLogin from './SocialLogin';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { toast } from 'react-toastify';

const Signin = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();
	const [ signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
	
	let signInError;
	const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

	useEffect( () =>{
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])

	if (loading) {
        return <p className='text-center text-3xl'>Loading...</p>
    }

    if(error){
        signInError= <p className='text-red-500'><small>{error?.message}</small></p>
    }

    const handleLogin = data => {
        signInWithEmailAndPassword(data.email, data.password);
		toast.success("Welcome", user?.displayName);
    }

	return (
		<section className='grid justify-center'>
			<div className="container px-16 pt-1">
				<div className="signup-title">
					<img src={logo} alt="" className='lg:w-1/3 w-1/2'/>
				</div>
				
				<div className="grid">
					<form className='form' onSubmit={handleSubmit(handleLogin)}>
						<input type="email" placeholder='Email' className='p-2 mb-1 border-2 lg:w-2/5 w-full' 
								{...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })
							}  
						/>
						{errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
						<input type="password" placeholder='Password' className='p-2 mb-1 border-2 lg:w-2/5 w-full' 
							{...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
						/>
						{errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

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