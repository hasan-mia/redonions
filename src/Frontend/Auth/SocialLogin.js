import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.init';

const SocialLogin = () => {
	const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
	const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";
	 if (googleUser || fbUser) {
        navigate(from, { replace: true });
    }
	return (
		<div className="flex justify-center gap-4 py-2">
			<button onClick={()=>signInWithFacebook()}> <i className='fab fa-facebook text-3xl p-1 hover:text-blue-600 hover:bg-blue-200 bg-blue-600 text-white rounded-md'></i> </button>
			<button onClick={() => signInWithGoogle()}> <i className='fab fa-google text-3xl p-1 hover:text-red-500 hover:bg-red-300 bg-red-500 text-white rounded-md'></i> </button>
		</div>
	);
};

export default SocialLogin;