
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} =UseAuth()
    const location = useLocation()
    // console.log(location)

    if (loading){
        return  (
            <div className="text-center">
                <span className="loading loading-dots loading-md"></span>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }
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