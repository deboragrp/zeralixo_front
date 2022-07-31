import React from "react";
import Navbar from "../layouts/navbar";
import Footer from "../layouts/Footer";

function Cadastro() {
  return (
    <div>
      <Navbar />
      <form className="form-signin w-50 mt-5  m-auto">
        <h3 className="text-center">Cadastre-se</h3>
        <div className="row">
          <div className="mb-3 col">
            <label>Nome completo</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nome completo"
            />
          </div>

          <div className="mb-3 col">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col">
            <label>CPF</label>
            <input
              type="text"
              name="cpf"
              className="form-control"
              pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
              placeholder="CPF"
            />
          </div>

          <div className="mb-3 col">
            <label>Data de nascimento</label>
            <input type="date" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col">
            <label>Senha</label>
            <input
              type="password"
              className="form-control"
              placeholder="ID do seu condomínio"
            />
          </div>
          <div className="mb-3 col">
            <label>Confirmar senha</label>
            <input
              type="password"
              className="form-control"
              placeholder="ID do seu condomínio"
            />
          </div>
          <div className="mb-3 col">
            <label>Função</label>
            <select id="inputState" class="form-select">
              <option selected>Escolha...</option>
              <option>Regar</option>
              <option>Colher</option>
              <option>Limpar</option>
              <option>Plantar</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col">
            <label>Andar</label>
            <input
              type="number"
              className="form-control"
              placeholder="Digite seu andar"
            />
          </div>

          <div className="mb-3 col">
            <label>Nº do apt</label>
            <input
              type="text"
              className="form-control"
              placeholder="Número do seu Apê"
            />
          </div>

          <div class="mb-3 col">
            <label>CEP</label>
            <input
              type="text"
              class="form-control"
              placeholder="CEP"
              aria-label="Zip"
            />
          </div>
        </div>
        <div className="row">
          <div class="mb-3 col">
            <label>Bairro</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div class="mb-3 col">
            <label>Cidade</label>
            <input
              type="text"
              class="form-control"
              placeholder="Cidade"
              aria-label="City"
            />
          </div>
          <div class="mb-3 col">
            <label>Estado</label>
            <input
              type="text"
              class="form-control"
              placeholder="Estado"
              aria-label="State"
            />
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-success mt-3">
            Cadastrar
          </button>
        </div>
        <p className="forgot-password text-right">
          Já tem cadastro? <a href="/sign-in">Entre aqui</a>
        </p>
      </form>
    </div>
  );
}
export default Cadastro;
