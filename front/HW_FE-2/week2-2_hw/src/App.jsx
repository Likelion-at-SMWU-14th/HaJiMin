import SignupForm from "./components/SignupForm";
import UpdateProfileForm from "./components/UpdateProfile";
import MyPage from "./components/MyPage";
import DeleteUser from "./components/DeleteUser";

function App() {
  return (
    <div>
      <SignupForm />
      <UpdateProfileForm />
      <MyPage />
      <DeleteUser />
    </div>
  );
}

export default App;
