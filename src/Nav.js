/*

  ____          _____               _ _           _       
 |  _ \        |  __ \             (_) |         | |      
 | |_) |_   _  | |__) |_ _ _ __ _____| |__  _   _| |_ ___ 
 |  _ <| | | | |  ___/ _` | '__|_  / | '_ \| | | | __/ _ \
 | |_) | |_| | | |  | (_| | |   / /| | |_) | |_| | ||  __/
 |____/ \__, | |_|   \__,_|_|  /___|_|_.__/ \__, |\__\___|
         __/ |                               __/ |        
        |___/                               |___/         
    
____________________________________
/ Si necesitas ayuda, contáctame en \
\ https://parzibyte.me               /
 ------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
Creado por Parzibyte (https://parzibyte.me).
------------------------------------------------------------------------------------------------
Si el código es útil para ti, puedes agradecerme siguiéndome: https://parzibyte.me/blog/sigueme/
Y compartiendo mi blog con tus amigos
También tengo canal de YouTube: https://www.youtube.com/channel/UCroP4BTWjfM0CkGB6AFUoBg?sub_confirmation=1
------------------------------------------------------------------------------------------------
*/
import React from 'react';
import logo from "./img/parzibyte_logo.png";
import { NavLink } from "react-router-dom";
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarMenu: false,
        };
        this.intercambiarEstadoMenu = this.intercambiarEstadoMenu.bind(this);
        this.ocultarMenu = this.ocultarMenu.bind(this);
    }


    ocultarMenu() {
        this.setState({
            mostrarMenu: false,
        })
    }
    intercambiarEstadoMenu() {
        this.setState(state => {
            return {
                mostrarMenu: !state.mostrarMenu,
            }
        });
    }
    render() {
        return (
            <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://parzibyte.me/l/fW8zGd">
                        <img alt="" src={logo} style={{ maxHeight: "80px" }} />
                    </a>
                    <button onClick={this.intercambiarEstadoMenu} className={`navbar-burger ${this.state.mostrarMenu ? "is-active" : ""} is-warning button`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className={`navbar-menu ${this.state.mostrarMenu ? "is-active" : ""}`}>
                    <div className="navbar-start">
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/videojuegos/ver">Ver videojuegos</NavLink>
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/videojuegos/agregar">Agregar videojuego</NavLink>
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