import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi, api } from "../Services/Api";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    console.log(posts);

    return (
        <PostsContext.Provider value={{ posts, setPosts }}>{children}</PostsContext.Provider>
    )
};
