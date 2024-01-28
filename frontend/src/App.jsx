import { HomePage, WeiGuanPage, GwynethPage, EntitiesPage, PositionPage, InstrAnalyticsPage, AnalyticsPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import React from "react";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
            <Route path="/positions" element={<PositionPage />} />
            <Route path="/weiguan" element={<WeiGuanPage />} />
            <Route path="/gwyneth" element={<GwynethPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/entities" element={<EntitiesPage />} />
            <Route path="/entities/:id" element={<InstrAnalyticsPage />} />
            <Route path='/analytics' element={<AnalyticsPage />} />
          </Routes>
        </LocalizationProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
