import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import useEditor from '../../Hooks/useEditor';
import { signOut } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";

const RequireEditor = ({children}) => {
    const [user, loading] = useAuthState(auth)
    const {editor, isLoad} = useEditor(user);
    const location = useLocation();

    if (loading || isLoad) {
        return <Loading></Loading>
    }

    if(!user || !editor){
        signOut(auth);
        return <Navigate to="/" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireEditor;