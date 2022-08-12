import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function Estag_cad() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <form className="form-signin w-25 mt-5  m-auto pt-5 ">
        <h3 className=" mb-3 text-center">Login Condomínio</h3>
        <div className="mb-3">
          <label>Email </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <label>Senha</label>
          <input type="password" className="form-control" placeholder="Senha" />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox ">
            <input
              type="checkbox"
              className="custom-control-input me-2"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Lembrar de mim
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button
            onClick={() => navigate("/perfil")}
            type="submit"
            className="btn btn-success"
          >
            Entrar
          </button>
        </div>
        <p className="forgot-password text-right">
          Esqueceu a <a href="/esqueciminhasenha">senha?</a>
        </p>
      </form>
    </div>
  );
}
export default Estag_cad;
