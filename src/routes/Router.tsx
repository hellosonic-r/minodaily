import {
  HomePage,
  ProfilePage,
  SignInPage,
  SignUpPage,
  SplashPage,
} from "@/pages";
import { Route, Routes } from "react-router-dom";

const RouterComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
};

export default RouterComponent;
