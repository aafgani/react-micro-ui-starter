import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/store";
import { logout } from "../../../store/userSlice";

const Navbar = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <nav>
      <h1>My App</h1>
      {user.currentUser ? (
        <>
          <span>Welcome, {user.currentUser?.name}</span>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <span>Not logged in</span>
      )}
    </nav>
  );
};

export default Navbar;
