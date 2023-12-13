import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/common/NotFound.jsx";
import BlogDetailsPage from "./pages/BlogDetailsPage.jsx";
import CategoryCoursePage from "./pages/CategoryCoursePage.jsx";
import CourseDetailsPage from "./pages/CourseDetailsPage.jsx";
import ForgetPasswordPage from "./pages/ForgetPasswordPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LessonModulePage from "./pages/LessonModulePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import AllCourses from "./components/course/AllCourses.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/my-courses" element={<LessonModulePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route
          path="/course-by-category/:id"
          element={<CategoryCoursePage />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/course-details/:id" element={<CourseDetailsPage />} />
        <Route
          path="/course-by-category/:id"
          element={<CategoryCoursePage />}
        />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
