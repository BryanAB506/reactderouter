import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    
    const estaAutenticado = localStorage.getItem('usuario') === 'true'; 
    const esAdmin = localStorage.getItem('admin') === 'true'; 

    if (!estaAutenticado || !esAdmin) {
        return <Navigate to= '/'/>
    }

    return children;
};

export default ProtectedRoute;