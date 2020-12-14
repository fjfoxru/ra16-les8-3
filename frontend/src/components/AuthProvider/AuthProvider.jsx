import React from 'react'
import AuthContext from '../../contexts/AuthContext';
import useStorage from '../../hooks/useLocalStorage';

export default function AuthProvider(props) {
    const [token, setToken] = useStorage(localStorage, 'token');
    const [profile, setProfile] = useStorage(localStorage, 'profile', true);

    const handleLogin = async (login, password) => {
        try {
            const response = await fetch('http://localhost:7070/auth', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({login: login, password: password})
            });
            if (!response.ok) {
                throw new Error('Auth failed');
            }
            const {token, profile} = await response.json();
            setToken(token);
            setProfile(profile);
        } catch (e) {

        }
    }

    const handleLogout = () => {
        setToken(null);
        setProfile(null);
    }


    return (
        <AuthContext.Provider value={{ handleLogin, handleLogout, token, profile }}>
            {props.children}
        </AuthContext.Provider>
    )
}