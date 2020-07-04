import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/index.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Contacto from "./components/Contacto.jsx";
import Projects from "./components/Projects";
import Personas from "./components/Personas.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact>
          <Experiencia titulo="tarejta copada" color="red" />
        </Route>
        <Route path="/personas">
          <Personas />
        </Route>
        <Route path="/proyectos">
          <Projects />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
