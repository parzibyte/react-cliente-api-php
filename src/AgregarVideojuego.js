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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
class AgregarVideojuego extends React.Component {
    constructor(props) {
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
            <div className="column is-one-third">
                <h1 className="is-size-3">Agregar videojuego</h1>
                <ToastContainer></ToastContainer>
                <form className="field" onSubmit={this.manejarEnvioDeFormulario}>
                    <div className="form-group">
                        <label className="label" htmlFor="nombre">Nombre:</label>
                        <input autoFocus required placeholder="Nombre" type="text" id="nombre" onChange={this.manejarCambio} value={this.state.videojuego.nombre} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="precio">Precio:</label>
                        <input required placeholder="Precio" type="number" id="precio" onChange={this.manejarCambio} value={this.state.videojuego.precio} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="calificacion">Calificación:</label>
                        <input required placeholder="Calificación" type="number" id="calificacion" onChange={this.manejarCambio} value={this.state.videojuego.calificacion} className="input" />
                    </div>
                    <div className="form-group">
                        <button className="button is-success mt-2">Guardar</button>
                        &nbsp;
                        <Link to="/videojuegos/ver" className="button is-primary mt-2">Volver</Link>
                    </div>
                </form>
            </div>
        );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();
        // Codificar nuestro videojuego como JSON

        const cargaUtil = JSON.stringify(this.state.videojuego);
        // ¡Y enviarlo!
        const respuesta = await fetch(`${Constantes.RUTA_API}/guardar_videojuego.php`, {
            method: "POST",
            body: cargaUtil,
        });
        const exitoso = await respuesta.json();
        if (exitoso) {
            toast('Videojuego guardado 🎮', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.setState({
                videojuego: {
                    nombre: "",
                    precio: "",
                    calificacion: "",
                }
            });
        } else {
            toast.error("Error guardando. Intenta de nuevo");
        }
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