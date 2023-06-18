import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export default function Context({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [routeName, setRouteName] = useState("Profile")

    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'))


    const setUserFromLocalStorage = () => {
        if (userFromLocalStorage) {
            getUsers(userFromLocalStorage)
        }
        setLoading(false)
    }
    const getUsers = (data) => {
        setUser(data)
    }
    return (
        <UserContext.Provider value={{ setUserFromLocalStorage, loading, user, setUser, getUsers, routeName, setRouteName }}>
            {children}
        </UserContext.Provider>
    )
}
