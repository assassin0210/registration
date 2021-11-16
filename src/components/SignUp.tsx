import { Form } from "./Form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
        navigation("../", { replace: true });
      })
      .catch(console.error);
  };
  return <Form title="register" handleClick={handleRegister} />;
};
