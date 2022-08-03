import React, { element } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

// React Router Import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Import Pages
import Home from "./pages/Home";
import Sobrenos from "./pages/Sobrenos";
import Contato from "./pages/Contato";
import Comofunciona from "./pages/Comofunciona";
import Cadcondominio from "./pages/Cadcondominio";
import Estag_cad from "./pages/Estag_cad";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Esquecisenha from "./pages/Esquecisenha";
import Perfil from "./pages/Perfil";
import Tasks from "./pages/Tasks";
import Trocapts from "./pages/Trocapts";
import Redefinirsenha from "./pages/Redefinirsenha";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenos" element={<Sobrenos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/comofunciona" element={<Comofunciona />} />
          <Route path="/cadcondominio" element={<Cadcondominio />} />
          <Route path="/estagiodocad" element={<Estag_cad />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/esqueciminhasenha" element={<Esquecisenha />} />
          <Route path="/redefinirsenha" element={<Redefinirsenha />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/trocadepts" element={<Trocapts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
