import React, { createContext, useState, useEffect } from 'react';
import { login as apiLogin } from '../services/authService';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if token exists on load
        
        const token = localStorage.getItem('token');
        if (token) {
            setUser({ token });
        } 
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            // 1. Call the API
            const response = await apiLogin(email, password);
            
            // 2. Extract Token
            // Your backend sends: { success: true, data: "JWT_TOKEN_HERE", ... }
            // authService returns response.data, so 'response' here is the body.
            const token = response.data; 

            if (!token) {
                throw new Error('No token found in response');
            }

            // 3. Set State & Storage
            localStorage.setItem('token', token);
            setUser({ token });
            
            return response;
        } catch (err) {
            console.error("Login failed:", err);
            throw err;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};