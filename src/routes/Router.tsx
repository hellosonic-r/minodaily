import { HomePage, SignInPage, SignUpPage } from "@/pages";
import { Route, Routes } from "react-router-dom";

const RouterComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </>
  );
};

export default RouterComponent;
