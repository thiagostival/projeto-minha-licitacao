import React, { useState } from 'react';
import { Link, useHistory   } from 'react-router-dom';
import { FiArrowDownCircle, FiLogOut } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';
import barMenu from '../../assets/barMenu.svg';

import resumo from '../../assets/resumo.svg';
import clientes from '../../assets/clientes.svg';
import vendas from '../../assets/vendas.svg';
import configuracoes from '../../assets/configuracoes.svg';

import reputacao from './assets/reputacao.svg';
import news from './assets/news.svg';
import vallet from './assets/vallet.svg';

export default function Offer() {
  const [offer, setOffer] = useState({
    modelo: String,
    marca: String,
    usb: Number,
    hdmi: Number,
    preco: Number,
    peso: Number,
    garantia: String,
    prazoEntrega: Number,
    valorFrete: Number,
    resumo: String,
    observacoes: String
  });
  const history = useHistory();

  async function handleForm(e) {
    e.preventDefault();

    try{
      alert("Proposta enviada com sucesso!");
      history.push("/dashboard");

    } catch (err) {
      alert('Falha no envio! Tente Novamente!');
    }
  }

  return (
    <div className="offer-container" >
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

        <div className="offer">
          <div className="title">
            <h2>Fazer Proposta Pedido - 25418</h2>
          </div>
          <div className="items">
            <h3>Especificações que o cliente busca:</h3>
            <p>SmartTV 50 polegadas, cor preta, com conversor digital, LED, com 
              3 ou mais entradas HDMI, 2 ou mais entradas USB, com WIFI e garantia
              extendida de 3 meses.
            </p>
            <h3>Sua proposta:</h3>
            <form onSubmit={handleForm}>
              <input 
                placeholder="Modelo" 
                value={offer.modelo}
                onChange={e => setOffer({modelo: e.target.value})}
              />
              <input 
                placeholder="Marca" 
                value={offer.marca}
                onChange={e => setOffer({marca: e.target.value})}
              />
              <input 
                placeholder="Entradas USB"
                type="number"
                min="0"
                max="10"
                value={offer.usb}
                onChange={e => setOffer({usb: e.target.value})}
              />
              <input 
                placeholder="Entradas HDMI" 
                type="number"
                min="0"
                max="10"
                value={offer.hdmi}
                onChange={e => setOffer({hdmi: e.target.value})}
              />
              <input 
                placeholder="Preço" 
                type="number"
                min="0"
                step="0.01"
                value={offer.preco}
                onChange={e => setOffer({preco: e.target.value})}
              />
              <input 
                placeholder="Peso"
                type="number"
                min="0"
                step="0.01" 
                value={offer.peso}
                onChange={e => setOffer({peso: e.target.value})}
              />
              <input 
                placeholder="Garantia" 
                type="number"
                type="number"
                min="0"
                value={offer.garantia}
                onChange={e => setOffer({garantia: e.target.value})}
              /> 
              <input 
                placeholder="Prazo de entrega" 
                type="number"
                min="0"
                value={offer.prazoEntrega}
                onChange={e => setOffer({prazoEntrega: e.target.value})}
              />
              <input 
                placeholder="Valor do frete" 
                type="number"
                min="0"
                step="0.01"
                value={offer.valorFrete}
                onChange={e => setOffer({valorFrete: e.target.value})}
              />
              <textarea 
                placeholder="Resumo" 
                value={offer.resumo}
                onChange={e => setOffer({resumo: e.target.value})}
              />
              <textarea 
                placeholder="Observações" 
                value={offer.observacoes}
                onChange={e => setOffer({observacoes: e.target.value})}
              />
              <button type="submit">Enviar Proposta</button>

            </form>
          </div>
        </div>

        <div className="informations">
          <Link className="link">
            <img src={reputacao} alt="reputacao"/>
          </Link>
          <Link className="link">
            <img src={news} alt="news"/>
          </Link>
          <Link className="link">
            <img src={vallet} alt="vallet"/>
          </Link>
        </div>
      </section>

    </div>
  );
}