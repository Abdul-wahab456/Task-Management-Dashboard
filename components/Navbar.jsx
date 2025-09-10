import "./Navbar.css"
import { Link } from "react-router-dom";
import {FaSearch ,FaUserCircle} from "react-icons/fa";
import { useRef } from "react";
import { useState,useEffect } from "react";
import logo from "./dev_n_tech_logo.jpeg";

export default function Navbar(){
    const inputRef = useRef(null);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    const handleIconClick = () => {
        inputRef.current.focus();
    };
    return (
        <>
                <div className="flex_searchbar">
                    <FaSearch id="search-icon" onClick={handleIconClick}/>
                    <input className="input" ref={inputRef} type="text" placeholder="Search..." />
                    <div ref={dropdownRef}>
                        <button className="profile_pic_b" onClick={() => setOpen(!open)} >
                            <img className = "profile_icon"src={logo} alt="DevnTech" />
                        </button> 
                          {open&&(<div className="dropdown_menu">
                                <button>Profile</button>
                                 <Link to="/setting">
                                    <button>Setting</button>
                                    </Link>
                                <button>Logout</button>
                            </div>)}
                       </div>
                </div>
        </>
    )
 };
