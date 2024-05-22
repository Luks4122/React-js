import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"

export const Navbar = () =>{
    return <nav>
            <Link to="/" className="titulo">Inicio</Link>
        <ul>
            <li>
                <NavLink to="/acerca">Acerca</NavLink>
            </li>
            <li>
                <NavLink to="/servicios">Servicios</NavLink>
            </li>
            <li>
                <NavLink to="/contacto">Contacto</NavLink>
            </li>
        </ul>
    </nav>;
}