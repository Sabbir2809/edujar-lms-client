import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ForgetPasswordPage from "./pages/ForgetPasswordPage.jsx";
import StudentsDasboard from "./pages/StudentsDasboard.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/forget-password" element={<ForgetPasswordPage/>}/>
          <Route path="/student-dashboard" element={<StudentsDasboard/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
