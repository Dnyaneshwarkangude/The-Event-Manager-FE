
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element, isAuthenticated}) =>{
    const location = useLocation();

    return isAuthenticated ? element : <Navigate to={'/login'} state={{ from: location }} />;
}


export default ProtectedRoute;