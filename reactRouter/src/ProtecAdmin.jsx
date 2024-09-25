import React from 'react';
import { Navigate } from 'react-router-dom';

const protectAdmin = ({ children }) => {
    
    const autenticadoAdmin = localStorage.getItem('admin') === 'true'; 

    if (!autenticadoAdmin ) {
       
        return <Navigate to="/" />;
    }

    return children;
};

export default protectAdmin;