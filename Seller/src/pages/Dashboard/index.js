import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowDownCircle, FiLogOut } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';
import barMenu from '../../assets/barMenu.svg';
import resumo from './assets/resumo.svg';
import clientes from './assets/clientes.svg';
import vendas from './assets/vendas.svg';
import configuracoes from './assets/configuracoes.svg';
import pedido from './assets/pedido01.svg';
import reputacao from './assets/reputacao.svg';
import buttonNext from './assets/button-arrow.svg';
import buttonBack from './assets/button-arrow-opost.svg';

export default function VendedorArea() {
  return (
    <div className="seller-container" >
      <header className="navbar">
        <img className="logo" src={logoImg} alt="Olist"/>
      </header>

      <section className="content">

        <div className="menu" >
          <div className="user">
            <Link className="link">
              <img className="icon-bar" src={barMenu} alt="icon Bar"/>
            </Link>
            <div className="username">
                <span>Minha Conta</span>
                <span>Olá, Sônia</span>
                <Link className="link" to="">
                  <FiLogOut size="16" color="#e02041" />
                  Sair
                </Link>
              </div>
          </div>

          <div className="options">
              <Link className="link icon">
                <img src={resumo} alt="icon Resumo"/>
                <span>Resumo</span>
              </Link>
              <Link className="link icon">
                <img src={clientes} alt="icon Clientes"/>
                <span>Clientes</span>
              </Link>
              <Link className="link icon">
                <img src={vendas} alt="icon Vendas"/>
                <span>Vendas</span>
                <button><FiArrowDownCircle size={20} color="#0c29d0" /></button>
              </Link>
              <Link className="link icon">
                <img src={configuracoes} alt="icon Configuracoes"/>
                <span>Configurações</span>
                <button><FiArrowDownCircle size={20} color="#0c29d0" /> </button>
              </Link>
          </div>
        </div>

        <div className="pedidos">
          <div className="title">
            <h2>Pedidos</h2>
            <Link className="link"><span>Ver histórico</span></Link>
          </div>
          <div className="items">
            <Link className="link"><img className="backNext" src={buttonBack} alt="back"/> </Link>

            <Link className="link"><img src={pedido} alt="pedido01"/></Link>
            <Link className="link"><img src={pedido} alt="pedido01"/></Link>
            <Link className="link"><img src={pedido} alt="pedido01"/></Link>
            <Link className="link"><img src={pedido} alt="pedido01"/></Link>

            <Link className="link"><img className="backNext" src={buttonNext} alt="next"/> </Link>
          </div>
        </div>

        <div className="reputacao">
          <Link className="link">
            <img src={reputacao} alt="reputacao"/>
          </Link>
        </div>
      </section>

    </div>
  );
}