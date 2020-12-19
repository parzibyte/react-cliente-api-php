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
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Constantes from './Constantes';
class FilaDeTablaDeVideojuego extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Si han eliminado este juego, no necesitamos mostrarlo
            eliminado: false,
        };
        this.redireccionarParaEditar = this.redireccionarParaEditar.bind(this);
        this.eliminar = this.eliminar.bind(this);
    }
    redireccionarParaEditar() {
        return <Redirect to={`/videojuegos/editar/${this.props.videojuego.id}`} />
    }
    async eliminar() {
        const resultado = await Swal.fire({
            title: 'Confirmación',
            text: `¿Eliminar "${this.props.videojuego.nombre}"?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3298dc',
            cancelButtonColor: '#f14668',
            cancelButtonText: 'No',
            confirmButtonText: 'Sí, eliminar'
        });
        // Si no confirma, detenemos la función
        if (!resultado.value) {
            return;
        }
        const respuesta = await fetch(`${Constantes.RUTA_API}/eliminar_videojuego.php?id=${this.props.videojuego.id}`, {
            method: "DELETE",
        });
        const exitoso = await respuesta.json();
        if (exitoso) {
            toast('Videojuego eliminado ', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.setState({
                eliminado: true,
            });
        } else {
            toast.error("Error eliminando. Intenta de nuevo");
        }
    }
    render() {
        if (this.state.eliminado) {
            return null;
        }
        return (
            <tr>
                <td>{this.props.videojuego.nombre}</td>
                <td>{this.props.videojuego.precio}</td>
                <td>{this.props.videojuego.calificacion}</td>
                <td>
                    <Link to={`/videojuegos/editar/${this.props.videojuego.id}`} className="button is-info">Editar</Link>
                </td>
                <td>
                    <button onClick={this.eliminar} className="button is-danger">Eliminar</button>
                </td>
            </tr>
        );
    }
}

export default FilaDeTablaDeVideojuego;