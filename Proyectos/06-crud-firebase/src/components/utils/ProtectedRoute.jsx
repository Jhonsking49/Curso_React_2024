import { Navigate, Outlet } from "react-router-dom";
import { useAuthProduct } from "../../context/useAuthProducts";

const ProtectedRoute = ({redirectPath}) => {
    const { userFirebase } = useAuthProduct();
    const isActive = !!userFirebase ;

    if(!isActive){
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
};

export default ProtectedRoute;