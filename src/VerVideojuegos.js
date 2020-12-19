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