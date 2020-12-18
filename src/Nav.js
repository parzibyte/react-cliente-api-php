import React from 'react';
import logo from "./img/parzibyte_logo.png";
import { NavLink } from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://parzibyte.me/l/fW8zGd">
                        <img alt="" src={logo} style={{ maxHeight: "70px" }} />
                    </a>
                    <button  className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <NavLink activeClassName="is-active" className="navbar-item" to="/videojuegos/ver">Ver videojuegos</NavLink>
                        <NavLink activeClassName="is-active" className="navbar-item" to="/videojuegos/agregar">Agregar videojuego</NavLink>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a target="_blank" rel="noreferrer" href="https://parzibyte.me/l/fW8zGd" className="button is-primary">
                                    <strong>Soporte y ayuda</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Nav;