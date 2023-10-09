import React, {ReactElement, ReactNode} from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

export const ProtectedRoutes = ({ children } : { children : ReactNode }) : ReactElement => {
    const { user } = useAuth();

    if (user){
        return <>{children}</>
    }

    return (
        <Navigate to="/login" />
    )
}