/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/auth" component={Auth}></Route>
      </Switch>
    </div>
  );
}

export default App;
