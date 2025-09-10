<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Dashboard from "../src/pages/Dashboard";
import Setting from "../src/pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from '../pages/Dashboard';
import Setting from '../pages/Settings';
import Task from '../pages/Tasks';
import {BrowserRouter,Routes,Route,useNavigate } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/setting" element={<Setting />}/>
      <Route path="/task" element={<Task />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)


>>>>>>> 64a84887794e83e783f4938dd85f774ea420a0f3
