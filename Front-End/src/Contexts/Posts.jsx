import React, { createContext, useState } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    console.log(posts);

    return (
        <PostsContext.Provider value={{ posts, setPosts }}>{children}</PostsContext.Provider>
    )
};
