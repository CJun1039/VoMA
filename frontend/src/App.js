import LoginPage from "./components/LoginPage/login-page";
import SingleEventPage from "./components/SingleEventPage/SingleEventPage";
import Profile from "./components/Profile/profile";
import "./App.css";
import RegistrationPage from "./components/RegistrationPage/registration-page";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import ParticularsForm from "./components/ParticularsForm/particulars-form";
import PreferencesForm from "./components/PreferencesForm/preferences-form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/event" element={<SingleEventPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/particulars" element={<ParticularsForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
