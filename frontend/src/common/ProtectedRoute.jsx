import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAdmin = false }) => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      navigate("/signin");
      return;
    }
    if (userInfo && isAdmin && !userInfo.isAdmin) {
      navigate("/");
      return;
    }
  }, []);

  return children;
};

export default ProtectedRoute;
