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
import Nav from "./Nav";
import AgregarVideojuego from "./AgregarVideojuego";
import VerVideojuegos from "./VerVideojuegos";
import EditarVideojuego from "./EditarVideojuego";
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="section">
        <div className="columns">
          <Switch>
            <Route path="/videojuegos/agregar">
              <AgregarVideojuego></AgregarVideojuego>
            </Route>
            <Route path="/videojuegos/editar/:id">
              <EditarVideojuego></EditarVideojuego>
            </Route>
            <Route path="/videojuegos/ver">
              <VerVideojuegos></VerVideojuegos>
            </Route>
            <Route path="/">
              <VerVideojuegos></VerVideojuegos>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
