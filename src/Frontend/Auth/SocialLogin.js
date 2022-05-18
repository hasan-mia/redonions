import React, { useEffect } from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const SocialLogin = () => {
	const [signInWithGoogle, googleUser, googleloading, googleError] = useSignInWithGoogle(auth);
	const [signInWithFacebook, facbookuser, facebookloading, facebookerror] = useSignInWithFacebook(auth);
	const [user, loading, error] = useAuthState(auth);

	let socialInError;
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	useEffect( () =>{
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])

    if (googleloading || facebookloading) {
        return <p className='text-center text-3xl'>Loading...</p>
    }

    if (facebookerror || googleError) {
        socialInError = <p className='text-red-500'><small>{error?.message || googleError?.message}</small></p>
    }

	return (
		<div className="flex justify-center gap-4 py-2">
			<button onClick={()=>signInWithFacebook()}> <i className='fab fa-facebook text-3xl p-1 hover:text-blue-600 hover:bg-blue-200 bg-blue-600 text-white rounded-md'></i> </button>
			<button onClick={() => signInWithGoogle()}> <i className='fab fa-google text-3xl p-1 hover:text-red-500 hover:bg-red-300 bg-red-500 text-white rounded-md'></i> </button>
		</div>
	);
};

export default SocialLogin;