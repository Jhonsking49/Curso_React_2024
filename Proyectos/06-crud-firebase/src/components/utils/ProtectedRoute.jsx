import { Navigate, Outlet } from "react-router-dom";
import { useAuthProducts } from "../../context/useAuthProducts";

const ProtectedRoute = ({isActive,redirectPath}) => {
    const { userFirebase} = useAuthProducts();
    if(!isActive){
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
};

export default ProtectedRoute;