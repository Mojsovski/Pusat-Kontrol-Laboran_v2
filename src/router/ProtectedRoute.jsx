import { Navigate } from "react-router-dom";
import { useAuthStore } from "../data/Auth";

const ProtectedRoute = ({ children }) => {
  const { user, isSessionValid } = useAuthStore();

  if (!user || !isSessionValid()) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
