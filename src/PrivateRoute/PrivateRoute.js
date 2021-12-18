import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return user.displayName ? children : <Navigate to="/login" />;

};

export default PrivateRoute;