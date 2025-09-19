import { Provider } from "react-redux";
import { store } from "../../../store/store";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import ProfilePage from "./ProfilePage";

function MainApp() {
  return (
    <Provider store={store}>
      <div>
        <p>MainApp with Redux</p>
        <Navbar />
        <hr />
        <LoginForm />
        <hr />
        <ProfilePage />
      </div>
    </Provider>
  );
}

export default MainApp;
