import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../store/store";
import { login } from "../../../store/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  function handleLogin() {
    // fake login
    const fakeUser = {
      id: "1",
      name: "andrya",
      email: "andrya@example.com",
    };
    dispatch(login(fakeUser));
  }

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginForm;
