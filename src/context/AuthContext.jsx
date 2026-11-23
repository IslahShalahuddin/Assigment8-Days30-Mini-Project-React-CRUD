import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [token, setToken] = useState(localStorage.getItem("token"))

    function logout(){
        localStorage.removeItem("token");
        setToken(null)
    }

    return(
        <AuthContext.Provider value={{token, setToken, logout}}>
            {children}
        </AuthContext.Provider>
    )
}