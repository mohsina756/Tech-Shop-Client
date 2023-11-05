/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {pathname} = useLocation()
    console.log(pathname);
    
    const {user, loading} = useContext(AuthContext);
    console.log(pathname);
    if(loading){
        return "Loading";
    }
    if(!user){
        return<Navigate to={"/login"} replace={true} state={{path: pathname}}></Navigate>
    }
    return children;
};

export default PrivateRoute;