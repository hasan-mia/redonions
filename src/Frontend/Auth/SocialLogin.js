import React, { useEffect } from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
	const [signInWithGoogle, googleUser, googleloading, googleError] = useSignInWithGoogle(auth);
	const [signInWithFacebook, facbookuser, facebookloading, facebookerror] = useSignInWithFacebook(auth);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	useEffect( () =>{
        if (googleUser || facbookuser) {
            navigate(from, { replace: true });
            if (googleUser) {
              toast.success("Welcome", googleUser?.displayName);
            }
            if (facbookuser) {
              toast.success("Welcome", facbookuser?.displayName);
            }
        }
    }, [googleUser, facbookuser, from, navigate])

	 useEffect(() => {
        if (googleError || facebookerror) {
            switch (googleError?.code || facebookerror?.code) {
                case "auth/invalid-email":
                    toast.error("Please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast.error("Wrong password!!");
                    break;
                default:
                    toast.error("Something went wrong");
            }
        }
    }, [googleError, facebookerror]);

    if (googleloading || facebookloading) {
        return <Loading></Loading>
    }

	return (
		<div className="flex justify-center gap-4 py-2">
			<button onClick={() => signInWithGoogle()}> <i className='fab fa-google text-3xl p-1 hover:text-red-500 hover:bg-red-300 bg-red-500 text-white rounded-md'></i> </button>
			<button onClick={()=>signInWithFacebook()}> <i className='fab fa-facebook text-3xl p-1 hover:text-blue-600 hover:bg-blue-200 bg-blue-600 text-white rounded-md'></i> </button>
		</div>
	);
};

export default SocialLogin;