import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

  const login = (email, password) => {
    console.log('login', { email, password });
    if(password === "secret"){
        setUser({ id: '123', email });
        navigate('/')
    }
    
  }
  const logout = () => {
    console.log("logout");
    setUser(null)
  };
    return(
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>{children}</AuthContext.Provider>
    )
};
