import React, { useEffect } from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const SocialLogin = () => {
	const [signInWithGoogle, googleUser, googleloading, googleError] = useSignInWithGoogle(auth);
	const [signInWithFacebook, facbookuser, facebookloading, facebookerror] = useSignInWithFacebook(auth);
	const [user, loading, error] = useAuthState(auth);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	useEffect(() => {
		if (user) {
			// ========Create Token======
            const url = 'https://boiling-basin-90703.herokuapp.com/login';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: user.email
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("accessToken", data.token);
                navigate(from, { replace: true });
            });
		}
	}, [user]);
	return (
		<div className="flex justify-center gap-4 py-2">
			<button onClick={()=>signInWithFacebook()}> <i className='fab fa-facebook text-3xl p-1 hover:text-blue-600 hover:bg-blue-200 bg-blue-600 text-white rounded-md'></i> </button>
			<button onClick={() => signInWithGoogle()}> <i className='fab fa-google text-3xl p-1 hover:text-red-500 hover:bg-red-300 bg-red-500 text-white rounded-md'></i> </button>
		</div>
	);
};

export default SocialLogin;