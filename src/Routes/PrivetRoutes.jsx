import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import LoadingSpainer from '../components/LoadingSpainer';
import { Navigate } from 'react-router-dom';

const PrivetRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <LoadingSpainer />
    }
    if (user?.email) {
        return children
    }
    return <Navigate to={"/signin"} />

};

export default PrivetRoutes;