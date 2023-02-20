import React, { useState } from "react";
import "./Login.css";
import LoginStatus from "./LoginStatus";





export default function Login ( {setToken, loginRole} )  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {isLoggedin, setIsLoggedin} = LoginStatus();
  console.log(isLoggedin)
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/"+loginRole+"/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const token = await response.json();
      if (token.data.access_token && token.data.role) {
        setToken(token.data);
      } else {
        setError(token.metadata.message);

      }
    } catch (error) {
      setError('Wystąpił błąd podczas logowania.');
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="email" value={email}
onChange={(event) => setEmail(event.target.value)} required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" value={password}
onChange={(event) => setPassword(event.target.value)} required />
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};





