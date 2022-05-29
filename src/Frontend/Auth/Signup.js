import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import logo from '../../Assets/logo.png';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Loading/Loading';
import useToken from '../../Hooks/useToken';
import './Auth.css';

const Signup = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();
	const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect( () =>{
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    useEffect(() => {
        if (error || updateError) {
            switch (error?.code || updateError?.code) {
                case "auth/invalid-email":
                    toast.error("Please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast.error("Invalid password!!");
                    break;
                case "auth/wrong-password":
                    toast.error("Password is Wrong!!");
                    break;
                case "auth/user-not-found":
                    toast.error("User Not Found!!");
                    break;
                default:
                    toast.error("Something went wrong");
            }
        }
    }, [error, updateError]);

    if (loading || updating) {
        return <Loading></Loading>
    }

	const handleRegister = async data => {
        await updateProfile({ displayName: data.name });
        await createUserWithEmailAndPassword(data.email, data.password);
        toast.success("Email vaification link sent");
    }
	return (
		<section className='grid justify-center'>
			<div className="container px-16 py-1">
				<div className="signup-title">
					<img src={logo} alt="" className='lg:w-1/3 w-1/2'/>
				</div>
				
				<div className="grid">
					<form onSubmit={handleSubmit(handleRegister)} className='form'>
						<input
                            type="text"
                            placeholder="Your Name"
                            className="p-2 mb-1 border-2 lg:w-2/5 w-full"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
						{errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
						<input
                            type="email"
                            placeholder="Your Email"
                            className="p-2 mb-1 border-2 lg:w-2/5 w-full"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
						<label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
						<input
                            type="password"
                            placeholder="Password"
                            className="p-2 mb-1 border-2 lg:w-2/5 w-full"
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
						<label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
						{/* <input
                            type="password"
                            placeholder="Confirm Password"
                            className="p-2 mb-1 border-2 lg:w-2/5 w-full"
                            {...register("confirmpassword", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                validate: {
                                    validate: value => value === '1',
                                    message: 'Password dont match'
                                }
                            })}
                        /> */}
						{/* <label className="label">
                            {errors.confirmpassword?.type === 'required' && <span className="label-text-alt text-red-500">{errors.confirmpassword.message}</span>}
                            {errors.confirmpassword?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.confirmpassword.message}</span>}
                        </label> */}

						<button type="submit" className='p-2 mb-1 border-2 lg:w-2/5 w-full bg-red-500 text-white'>Sign up</button>
					</form>
					<Link to='/signin' className='text-center text-red-600'>Already have an account?</Link>
				</div>
			</div>
		</section>
	);
};

export default Signup;