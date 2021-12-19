import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" />;
    }
    return user.displayName ? children : <Navigate to="/login" />;

};

export default PrivateRoute;