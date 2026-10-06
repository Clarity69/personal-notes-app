import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function PublicRoute() {
  const { authedUser } = useAuth();
  const location = useLocation();

if (authedUser) {
  return <Navigate to={location.state?.from ?? '/'} replace />;
}

  return <Outlet />;
}

export default PublicRoute;
