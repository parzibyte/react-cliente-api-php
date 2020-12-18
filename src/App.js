import Nav from "./Nav";
import AgregarVideojuego from "./AgregarVideojuego";
import VerVideojuegos from "./VerVideojuegos";
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
            <Route path="/agregar/videojuego">
              <AgregarVideojuego></AgregarVideojuego>
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
