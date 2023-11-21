import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegistrationPage from "./pages/RegistrationPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
