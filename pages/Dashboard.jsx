import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import "./Dashboard.css"
import { useState, useEffect} from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Dashboard(){
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);
    return(
        <>
        <div className =  {darkMode ? "app dark" : "app"}>
            <div className="dashboard">
                <div className = "navbar">
                    <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} >
                        {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                        </button>
                    <Navbar />
                </div>
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="TaskCard">
                    <TaskCard/>
                </div>
                <div className="TaskForm">
                    <TaskForm/>
                </div>
            </div>
        </div>
        </>
    )
}
