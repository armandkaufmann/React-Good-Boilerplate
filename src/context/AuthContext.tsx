import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {AuthContextType, AuthProviderProps, User} from "./IAuthContext";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children}) => {
    const userStorage = localStorage.getItem('user') || null;

    const [user, setUser] = useState<User | null>(() => {
        if (userStorage) {
            return JSON.parse(userStorage);
        }
        return null;
    });

    const login = async (username : string, password : string) => {
    }

    const logout = () => {
        setUser(null);
    }

    const value : AuthContextType = {user, login, logout};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
