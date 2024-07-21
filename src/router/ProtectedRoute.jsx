import { Navigate } from "react-router-dom";
import { useAuthStore, isSessionValid } from "../data/Auth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore();

  if (!user || !isSessionValid()) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
