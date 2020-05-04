import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import contractImg from '../../assets/contract.svg';
import checkImg from '../../assets/check.svg';

export default function Home(){
  return (
    <div className="home-container">

      <header className="navbar">
        <h2 className="logo">Proposta Ideal</h2>
        <div className="botoes">
          <Link to="/dashboard">
            <button className="button">Área do Cliente</button>
          </Link>
          <button className="button">Criar Conta</button>	
        </div>
      </header>

      <section id="conteudo">
        <div id="mensagem">
          <p id="slogan">As ofertas <br/>vem até você!</p>
          <p id="titulo">Ajudamos quem quer comprar a encontrar quem quer vender </p>
          <div id="vantagens">
            <div id="text">
              <img className="check" src={checkImg} alt="Check" /> 
              Especifique todas as características do que está procurando e espere 
              pelas propostas dos mais de 500 mil lojistas cadastrados na plataforma.	
            </div>
            <div id="text">
              <img className="check" src={checkImg} alt="Check" />
              Ao invés de ficar buscando ofertas na internet nossos vendedores levam 
              a proposta até você de forma personalizada que atenda a sua demanda.
            </div>
            <div><button className="button">Quero comprar</button></div>
          </div>
        </div>
        <img className="home-bg" src={contractImg} alt="Contract" />
		</section>

    </div>
  );
}