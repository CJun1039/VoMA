import logo from "./logo.svg";
import LoginPage from "./components/LoginPage/login-page";
import "./App.css";
import RegistrationPage from "./components/RegistrationPage/registration-page";
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegistrationPage />}></Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
