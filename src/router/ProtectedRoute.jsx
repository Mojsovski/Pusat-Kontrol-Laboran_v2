import { Navigate } from "react-router-dom";
import { useAuthStore } from "../data/Auth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
