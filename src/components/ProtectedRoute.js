import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const location = useLocation();
  const token = localStorage.getItem('token');

  console.log('ProtectedRoute - Auth Status:', {
    isAuthenticated,
    hasToken: !!token,
    currentPath: location.pathname
  });

  if (!isAuthenticated || !token) {
    console.log('Redirecting to login...');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute; 