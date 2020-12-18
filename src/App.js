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
      <div className="container is-fullhd">
        <div className="columns">
          <Switch>
            <Route path="/videojuegos/agregar">
              <AgregarVideojuego></AgregarVideojuego>
            </Route>
            <Route path="/videojuegos/ver">
              <VerVideojuegos></VerVideojuegos>
            </Route>
            <Route path="/videojuegos/editar/:id">
              <EditarVideojuego></EditarVideojuego>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
