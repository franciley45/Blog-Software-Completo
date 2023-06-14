import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi, api } from "../Services/Api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    console.log(user);


    const login = async (email, password) => {
        const response = await loginApi(email, password);
        if (response.status == 200) {
            setUser(response.data.name);
            const token = response.data.token;
            const loggedUser = { id: response.data.user_id, name: response.data.name };

            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("user", JSON.stringify(loggedUser));
            api.defaults.headers.Authorization = `Bearer ${token}`;
            navigate('/');
        } else {
            alert(response.message);
        }
    };
    const Register = async (name, email, password) => {
    
    };


    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
    };

    const clickLogin = () => {
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout, setUser, clickLogin }}>{children}</AuthContext.Provider>
    )
};
