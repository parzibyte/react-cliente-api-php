import React from 'react';
import { Link, Redirect } from 'react-router-dom';
class FilaDeTablaDeVideojuego extends React.Component {
    constructor(props) {
        super(props);
        this.redireccionarParaEditar = this.redireccionarParaEditar.bind(this);
    }
    redireccionarParaEditar() {
        console.log(this.props.videojuego);

        return <Redirect to={`/videojuegos/editar/${this.props.videojuego.id}`} />
    }
    render() {
        return (
            <tr>
                <td>{this.props.videojuego.nombre}</td>
                <td>{this.props.videojuego.precio}</td>
                <td>{this.props.videojuego.calificacion}</td>
                <td>
                    <Link to={`/videojuegos/editar/${this.props.videojuego.id}`} className="button is-info">Editar</Link>
                </td>
                <td>
                    <button className="button is-danger">Eliminar</button>
                </td>
            </tr>
        );
    }
}

export default FilaDeTablaDeVideojuego;