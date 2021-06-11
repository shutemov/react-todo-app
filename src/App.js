import "./App.css";
import MainPage from "./components/MainPage";
import PadPage from "./components/PadPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App"></div>

      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/pads/:id">
          <PadPage />
        </Route>
        <Route path="*">404</Route>
      </Switch>
    </Router>
  );
}

export default App;
