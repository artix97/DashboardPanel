import React from 'react';
import './App.css';
import Login from './Login/Login';
import useToken from './useToken';
import PermissionsData from './PermissionsData';

function AppAdmin() {
    const { token, setToken } = useToken();
    if (!token || token.role !== "admin" ) {
        localStorage.removeItem("token")
        return <Login setToken={setToken} loginRole="admins" />
    }
    if (token.role === "admin" ) {
        return <PermissionsData role={token.role}/>
    }
}

export default AppAdmin;