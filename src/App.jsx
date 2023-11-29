import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/common/NotFound.jsx";
import CourseDetailsPage from "./pages/CourseDetailsPage.jsx";
import ForgetPasswordPage from "./pages/ForgetPasswordPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LessonModulePage from "./pages/LessonModulePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
<<<<<<< HEAD
import StudentsDasboard from "./pages/StudentsDasboard.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
=======
>>>>>>> 63a5040a4c26d85bfdf7b80715fc77d777a35740

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/course-details" element={<CourseDetailsPage />} />
        <Route path="/my-courses" element={<LessonModulePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
