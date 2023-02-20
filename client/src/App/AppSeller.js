import React from 'react';
import './App.css';
import Login from './Login/Login';
import useToken from './useToken';
import Permissions from './PermissionsData';



function AppSeller() {
    const {token, setToken} = useToken();
    if (!token || token.role !== "seller") {
        sessionStorage.removeItem("token")
        return <Login setToken={setToken} loginRole={"sellers"}/>
    }

    if (token.role === "seller") {
        return <Permissions role={token.role}/>
    }

}

export default AppSeller;