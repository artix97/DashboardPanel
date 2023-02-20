import useToken from "../../App/useToken";
import { useEffect } from "react";





export default function Refresh () {
    const {token,setToken} = useToken()
    const getRefreshToken = async ( refresh_token, role) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/refresh-token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ refresh_token, role }),
            });
            const ref_token = await response.json();
            if (response.status === 200) {
                return ref_token.data;
            }
            if (response.status === 500){
                return null
            }
            return localStorage.removeItem("token")
        } catch (error) {
            return null
        }
    };
    useEffect(() => {
        const checkRefreshToken = async () => {
            const newRefreshToken = await getRefreshToken(token.refresh_token, token.role);
            if (newRefreshToken !== null){
                newRefreshToken.role = token.role
            }
            setToken(newRefreshToken)
        };
        //900000
        const intervalId = setInterval(checkRefreshToken, 900000 );
        return () => clearInterval(intervalId);
    }, [token]);
    
}