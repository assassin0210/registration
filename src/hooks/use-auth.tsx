import { useSelector } from "react-redux";
import { RootState } from "../core/store";

export const useAuth = () => {
  const { email, token, id, isAuth } = useSelector((state: RootState) => state.user);

  return {
    auth: isAuth || !!token,
    email,
    token,
    id,
  };
};
