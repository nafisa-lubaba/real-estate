import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} =useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if (!user){
        return <Navigate to ='/signin' state={location?.pathname|| '/'}></Navigate>
    }
    return (
        <div>
        
           
            {children}
            
        </div>
    );
};

export default PrivateRoute;