import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/userActions";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    navigate("/");
  }, []);

  return null;
};

export default Logout;
