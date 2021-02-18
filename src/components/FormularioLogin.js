import React from "react";

export default function FormularioLogin() {
  return (
    <>
      <h1>Olá, seja bem-vindo</h1>
      <p>Para acessar a plataforma, faça seu login</p>
      <form>
        <label htmlFor="email">EMAIL</label>
        <input className="texto-login" type="text" name="email" id="email" required />
        <label htmlFor="senha">SENHA</label>
        <input className="texto-login" type="text" name="senha" id="senha" required />
        <input className="btn-login" type="button" value="ENTRAR" />
      </form>
    </>
  );
}
