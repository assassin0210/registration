import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../core/store/slices/userSlice";
import { useDispatch } from "react-redux";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  return (
    <div>
      {!isAuth && <Navigate to="/login" />}
      <button onClick={() => dispatch(removeUser())}>Exit</button>
      <Link to="/login">to login</Link>
    </div>
  );
};
