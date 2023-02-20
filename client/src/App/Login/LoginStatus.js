
const LoginStatus = (state) => {
    const getLoginState = (actualStatus) => {
        if (!actualStatus){
            return false
        }
        return true
    }
    const [isLoggedin, setIsLoggedin] = getLoginState(state)
    const setLoginState = (prefStatus) => {
        setIsLoggedin(prefStatus)
    }
    return {
        setIsLoggedin: setLoginState,
        isLoggedin
    }
    }
    


export default LoginStatus 

