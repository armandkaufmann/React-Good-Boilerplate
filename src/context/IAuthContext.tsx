import {ReactNode} from "react";

export interface User {
    id: string;
    username: string;
    first: string;
    last: string;
    token: string;
}

export interface AuthContextType {
    user: User | null;
    login : (username : string, password : string) =>  void;
    logout: () => void;
}

export interface AuthProviderProps {
    children: ReactNode;
    user?: User;
}