import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPasswordPage from "./pages/ForgetPasswordPage.jsx";
<<<<<<< HEAD
import StudentsDasboard from "./pages/StudentsDasboard.jsx";
=======
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import CourseDetailsPage from "./pages/CourseDetailsPage.jsx";
>>>>>>> 8280642cca5f29cc8a5532ae6a1fc10e2062dbac

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/forget-password" element={<ForgetPasswordPage/>}/>
          <Route path="/student-dashboard" element={<StudentsDasboard/>}/>
=======
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/course-details" element={<CourseDetailsPage />} />
>>>>>>> 8280642cca5f29cc8a5532ae6a1fc10e2062dbac
      </Routes>
    </BrowserRouter>
  );
};

export default App;
