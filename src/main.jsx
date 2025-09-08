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


