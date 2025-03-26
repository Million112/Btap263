// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loadAuthState = async () => {
            const savedLoginState = await AsyncStorage.getItem('isLoggedIn');
            if (savedLoginState === 'true') {
                setIsLoggedIn(true);
            }
        };
        loadAuthState();
    }, []);

    const login = async () => {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
    };

    const logout = async () => {
        await AsyncStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
