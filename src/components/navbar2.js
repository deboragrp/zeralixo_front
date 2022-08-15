import logo from "../images/logo.svg";

import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { UserContext } from "../App";

function Navbar2() {
  const { setToken } = useContext(UserContext);
  let navigate = useNavigate();
  function confirmSair(e) {
    e.preventDefault();
    if (window.confirm("Deseja realmente sair do sistema?")) {
      console.log("Saiu");
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand ms-5 " href="#">
          <img src={logo} alt="logo" style={{ width: "60px" }} />
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            background: "#f8f9fa",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a
                className="nav-link active text-white text-uppercase ms-5"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white text-uppercase ms-5"
                aria-current="page"
                href="/sobrenos"
              >
                Sobre Nós
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white text-uppercase ms-5"
                aria-current="page"
                href="/comofunciona"
              >
                Como Funciona
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white text-uppercase ms-5"
                aria-current="page"
                href="/contato"
              >
                Contato
              </a>
            </li>
          </ul>

          <button
            className="btn btn-danger me-5 ms-5"
            aria-current="page"
            onClick={(e) => confirmSair(e)}
          >
            Sair
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;