import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import "./Dashboard.css";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
    const tasksString = localStorage.getItem("tasks");

    const savedTasks = JSON.parse(tasksString || "[]");

    console.log("📋 PARSED tasks:", savedTasks);

    if (Array.isArray(savedTasks)) {
      setTasks(savedTasks);
    } else {
      setTasks([]);
      localStorage.setItem("tasks", "[]");
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <div className="dashboard">
          <div className="navbar">
            <Navbar
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="TaskCard">
            <TaskCard tasks={tasks} setTasks={setTasks} />
          </div>
          <div className="TaskForm">
            <TaskForm
              tasks={tasks}
              setTasks={setTasks}
              searchTerm={searchTerm}
            />
          </div>
        </div>
      </div>
    </>
  );
}
