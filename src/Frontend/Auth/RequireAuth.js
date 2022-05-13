import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../Firebase/Firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <p>Loading</p>
    }
    
    if(user){
        return children;
    } else{
        return <Navigate to="/login" state={{from: location}} replace />
    }
};

export default RequireAuth;