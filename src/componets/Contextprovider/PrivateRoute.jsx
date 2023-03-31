import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Auth } from "./Context/AuthContext";


function PrivateRoute(props) {
    let val=useContext(Auth)
    if(val.isAuth){
        return <Navigate to={"/login"}/>
    }
    return props.children
}

export default PrivateRoute;
