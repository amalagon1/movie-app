import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Popular from "./components/Popular";
import Recommended from "./components/Recommended";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="popular" element={<Popular />} />
      {/* <Route path="favorites" element={<Favorites />} /> */}
      <Route path="recommended" element={<Recommended />} />
    </Routes>
  </BrowserRouter>

);


