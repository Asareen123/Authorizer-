import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <div className="navbar">
            <ul className="nav-menu">
               <Link to="/"><li>Home</li></Link>
               <Link to="/login"><li>Login</li></Link>
              

            </ul>
        </div>
    )
}
