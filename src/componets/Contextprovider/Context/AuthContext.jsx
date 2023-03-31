import { createContext } from "react";

import { useState } from "react";

 export const Auth=createContext()
function AuthContextProvider(props) {
    const [isAuth,setAuth]=useState(true)
    const [token,settoken]=useState("")
    return (
        <Auth.Provider value={{isAuth:isAuth,setAuth:setAuth,token:token,settoken:settoken}}>
           {props.children}
        </Auth.Provider>
    )
    

}

export default AuthContextProvider;
