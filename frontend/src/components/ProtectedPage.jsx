import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
const ProtectedPage = ({ children }) => {
  const { isAuthentiCated } = useAuth();

  if (!isAuthentiCated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedPage;
