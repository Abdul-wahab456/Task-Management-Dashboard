import "./Navbar.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState, useEffect } from "react";
import logo from "./dev_n_tech_logo.jpeg";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({
  darkMode,
  setDarkMode,
  searchTerm,
  setSearchTerm,
}) {
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <div className="header_navbar">
        <div className="flex_searchbar">
          <input
            className="input"
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* Toggle (connected to Dashboard state) */}
        <div className="toggle">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
          </button>
        </div>
        <div ref={dropdownRef}>
          <div className="profile_parent">
            <button className="profile_pic_b" onClick={() => setOpen(!open)}>
              <img className="profile_icon" src={logo} alt="DevnTech" />
            </button>
          </div>
        </div>
        {open && (
          <div className="dropdown_menu">
            <button>Profile</button>
            <Link to="/setting">
              <button onClick={() => setOpen(false)}>Setting</button>
            </Link>
            <button>Logout</button>
          </div>
        )}
      </div>
    </>
  );
}
