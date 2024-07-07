import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivareRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)
    if(loading) {
        return <span className="loading loading-spinner text-error "></span>
    }
    if (!user) {
        return <Navigate to="/login" />;
      }
    
      return children;
    
};

export default PrivareRoute;