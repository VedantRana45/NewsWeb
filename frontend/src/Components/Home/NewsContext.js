import React, { createContext, useState } from 'react'

export const NewsContext = createContext();

export const NewsContextProvider = ({ children }) => {
    const [query, setQuery] = useState({
        mainQuery: 'top-headlines',
        subQuery: 'category=general',
    });

    const updateQuery = (newQuery) => {
        setQuery(newQuery);
    }

    return (
        <NewsContext.Provider value={{ query, updateQuery }}>
            {children}
        </NewsContext.Provider>
    );
} 
