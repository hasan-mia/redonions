import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import useAdmin from '../../Hooks/useAdmin';
import { signOut } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth)
    const {admin, isLoad} = useAdmin(user);
    const location = useLocation();

    if (loading || isLoad) {
        return <Loading></Loading>
    }

    if(!user || !admin){
        signOut(auth);
        return <Navigate to="/" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;