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
import Constantes from "./Constantes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FilaDeTablaDeVideojuego from './FilaDeTablaDeVideojuego';
class VerVideojuegos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videojuegos: [],
        };
    }
    async componentDidMount() {
        const respuesta = await fetch(`${Constantes.RUTA_API}/obtener_videojuegos.php`);
        const videojuegos = await respuesta.json();
        this.setState({
            videojuegos: videojuegos,
        });
    }
    render() {
        return (
            <div>
                <div className="column">
                    <h1 className="is-size-3">Ver videojuegos</h1>
                    <ToastContainer></ToastContainer>
                </div>
                <div className="table-container">
                    <table className="table is-fullwidth is-bordered">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Calificación</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.videojuegos.map(videojuego => {
                                return <FilaDeTablaDeVideojuego key={videojuego.id} videojuego={videojuego}></FilaDeTablaDeVideojuego>;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default VerVideojuegos;