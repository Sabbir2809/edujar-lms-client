import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import CourseDetailsPage from "./pages/CourseDetailsPage.jsx";
import ForgetPasswordPage from "./pages/ForgetPasswordPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import StudentsDasboard from "./pages/StudentsDasboard.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/course-details" element={<CourseDetailsPage />} />
        <Route path="/my-courses" element={<StudentsDasboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
