import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (email, password) => {
        const loggedUser = { id: "123", email };
        localStorage.setItem("user", JSON.stringify(loggedUser))

        if (password === "secret") {
            setUser(loggedUser);
            navigate('/');
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    const clickLogin = () => {
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout, setUser, clickLogin }}>{children}</AuthContext.Provider>
    )
};
