import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.user);
  if (!user.currentUser) return <p>Please log in.</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>ID: {user.currentUser?.id}</p>
      <p>Name: {user.currentUser?.name}</p>
      <p>Email: {user.currentUser?.email}</p>
    </div>
  );
};

export default ProfilePage;
