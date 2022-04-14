import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation()


    if(!user) {
        return (
            <div>
                <h1>You are not logged in</h1>
                <p>Please login to continue</p>
                <Navigate to="/login" state={{from: location}} replace>Login</Navigate>
            </div>
        )
    }
    return children;
};

export default RequireAuth;