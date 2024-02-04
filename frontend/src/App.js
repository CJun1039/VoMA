import logo from "./logo.svg";
import LoginContainer from "./components/Login/login-container";
import RegistrationContainer from "./components/Registration/registration-container";
import LoginPage from "./components/LoginPage/login-page";
import "./App.css";
import RegistrationPage from "./components/RegistrationPage/registration-page";
import ActivityCard from "./components/ActivityCard/activity-card";
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import RecommendedActivities from "./components/Dashboard/recommended-activities";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegistrationPage />}></Route>
      <Route path="/dashboard" element={<RecommendedActivities />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
