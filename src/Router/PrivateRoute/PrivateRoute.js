import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex flex-row justify-center space-x-16 h-screen my-20">
                <div className="flex">
                    <div className="relative"></div>
                    <div className="w-24 h-24 rounded-full absolute
                            border-8 border-solid border-gray-200"></div>

                    <div className="w-24 h-24 rounded-full animate-spin absolute
                            border-8 border-solid border-indigo-500 border-t-transparent"></div>
                </div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;