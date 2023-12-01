import { createContext, useState } from "react";

export const AuthContext=createContext({
    token:'',
    isAuthentcated: false,
    authenticate:(token)=>{},
    logout:()=>{}
});

function AuthContextProvider({children}){
    const [authToken,setAuthToken]=useState();

    function authenticate(token){
        setAuthToken(token);
    }
    function logout(){
        setAuthToken(null);
    }

    const value={
        token:authToken,
        isAuthentcated:!!authToken,
        authenticate:authenticate,
        logout:logout
    }


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


export default AuthContextProvider;