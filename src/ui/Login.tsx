import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./components/Form";
import { useDispatch } from "react-redux";
import { setUser } from "../core/store/slices/userSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            // @ts-ignore
            token: user.accessToken,
          }),
        );

        navigation("/", { replace: true });
      })
      .catch(console.error);
  };
  return <Form title="Login" handleClick={handleLogin} />;
};
