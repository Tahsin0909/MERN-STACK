/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import { Navigate, useLocation } from "react-router-dom";




const PrivetRoutes = ({ children }) => {

    let { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
    console.log(user)
    if (loading) {
        console.log(loading)
        return <Navigate to={`/signIn?${location.pathname}`} replace={true} />
    }
    if (user.email) {
            console.log(loading)
            return children;
    }

    return <Navigate to={`/signIn?${location.pathname}`} replace={true} />
};

export default PrivetRoutes;