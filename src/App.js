import Nav from "./Nav";
import AgregarVideojuego from "./AgregarVideojuego";
import Testing from "./Testing";
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
              <Testing></Testing>
            </Route>

          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
