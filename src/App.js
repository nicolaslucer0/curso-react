import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/index.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Contacto from "./components/Contacto.jsx";
import SobreMi from "./components/SobreMi.jsx";

function App() {
  return (
    <>
      <Navbar />
      <SobreMi />
      <Experiencia />
      <Contacto />
    </>
  );
}

export default App;
