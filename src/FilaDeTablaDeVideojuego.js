import React from 'react';
class FilaDeTablaDeVideojuego extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.videojuego.nombre}</td>
                <td>{this.props.videojuego.precio}</td>
                <td>{this.props.videojuego.calificacion}</td>
                <td>
                    <button className="button is-info">Editar</button>
                </td>
                <td>
                    <button className="button is-danger">Eliminar</button>
                </td>
            </tr>
        );
    }
}

export default FilaDeTablaDeVideojuego;