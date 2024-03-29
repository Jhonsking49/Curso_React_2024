import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ redirectPath}) => {
    const { user } = useAuthContext()

    const isActive = false
    console.log(user);

    if(!isActive){
        return <Navigate to={redirectPath}/>
    }else{
        return <Outlet/>
    }

}

export default ProtectedRoute