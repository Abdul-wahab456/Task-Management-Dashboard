import { Link } from "react-router-dom";
import "./Sidebar.css"
import logo from "./dev_n_tech_logo.jpeg";
export default function Sidebar(){
    return (
        <>
            <div className="flex">
                <img src={logo} alt="DevnTech" />
                <hr className="logo_line" />
                <Link to="/" onClick={() => (window.location.href = "/")}>
                    <button className="button">Dashboard</button>
                </Link>
                <Link to="/setting">
                    <button className="button">Setting</button>
                </Link>
                <Link to="/task">
                    <button className="button">Task</button>
                </Link>
            </div>
        </>
    )
 };
