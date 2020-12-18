import React from 'react';
import Constantes from "./Constantes";
class AgregarVideojuego extends React.Component {
    constructor(props) {
        console.log(Constantes);
        super(props);
        this.state = {
            videojuego: {
                "nombre": "",
                "precio": "",
                "calificacion": "",
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
    }
    render() {
        return (
            <div className="col-12">
                <h1>Agregar videojuego</h1>
                <form onSubmit={this.manejarEnvioDeFormulario}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input required placeholder="Nombre" type="text" id="nombre" onChange={this.manejarCambio} value={this.state.videojuego.nombre} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="precio">Precio:</label>
                        <input required placeholder="Precio" type="number" id="precio" onChange={this.manejarCambio} value={this.state.videojuego.precio} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="calificacion">Calificación:</label>
                        <input required placeholder="Calificación" type="number" id="calificacion" onChange={this.manejarCambio} value={this.state.videojuego.calificacion} className="form-control" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">Guardar</button>
                    </div>
                </form>
                <p>Depuración:</p>
                <pre>{JSON.stringify(this.state.videojuego)}</pre>
            </div>
        );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();
        // Codificar nuestro videojuego como JSON
        const cargaUtil = JSON.stringify(this.state.videojuego);
        // ¡Y enviarlo!
        const r = await fetch(`${Constantes.RUTA_API}/guardar_videojuego.php`, {
            method: "POST",
            body: cargaUtil,
        });
        const respuesta = await r.json();
        console.log({ respuesta });
    }
    manejarCambio(evento) {
        // Extraer la clave del estado que se va a actualizar, así como el valor
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const videojuegoActualizado = state.videojuego;
            // Si es la calificación o el nombre, necesitamos castearlo a entero
            if (clave !== "nombre") {
                valor = parseFloat(valor);
            }
            // Actualizamos el valor del videojuego, solo en el campo que se haya cambiado
            videojuegoActualizado[clave] = valor;
            return {
                videojuego: videojuegoActualizado,
            }
        });
    }
}

export default AgregarVideojuego;