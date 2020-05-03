import React, { useState } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import { FiStar, FiArrowDown, FiSearch, FiLogOut } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import iconPerfil from '../../assets/perfil.svg';
import iconPedidos from '../../assets/pedidos.svg';
import iconConfigs from '../../assets/configs.svg';
import buttonNext from '../../assets/button-arrow-next.svg';
import buttonBack from '../../assets/button-arrow-back.svg';

import offer1 from './assets/offer1.svg';
import offer2 from './assets/offer2.svg';
import offer3 from './assets/offer3.svg';
import offer4 from './assets/offer4.svg';

export default function Offers() {
  const [search, setSearch] = useState('');
  const history = useHistory();

  async function handleSearch(e) {
    e.preventDefault();

    try{
      localStorage.setItem('search', search);

      document.location.reload(true);
    } catch (err) {
      alert('Falha na Pesquisa! Tente Novamente!');
    }
  }

  return (
    <div className="offers-container" >

      <header className="navbar">
        <img className="logo" src={logoImg} alt="Olist"/>
        <div className="perfil">
          <Link className="link" to="/dashboard">
            <img src={iconPerfil} alt="icon Perfil"/>
            <div className="dados">
              <span>Bem vinda, Sônia</span>
              <span>4,90 <FiStar size="13" color="#ffffff" /> </span>
            </div>
          </Link>
        </div>
        <div className="buttons">
          <Link className="link" to="/dashboard/orders">
            <img src={iconPedidos} alt="icon Pedidos"/>
            <span>Pedidos</span>
          </Link>
          <Link className="link" to="">
            <img src={iconConfigs} alt="icon Configuracoes"/>
            <span>Configurações</span> <FiArrowDown size="15" color="#ffffff"/>
          </Link>
          <Link className="link" to="/">
            <FiLogOut size="16" color="#000000" />
            <span>Sair</span>
          </Link>
        </div>
      </header>

      <div className="search form bg">
        <form onSubmit={handleSearch}>
          <input 
            placeholder="Pesquisar" 
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <button type="submit"><FiSearch className="icon" /> </button>
        </form>
      </div>

      <div className="offers">
        <div className="title">
          <h2>Propostas para o Pedido - 25418</h2>
        </div>
        <div className="items">
          <Link className="link"><img className="backNext" src={buttonBack} alt="back"/> </Link>

          <Link className="link" to="/dashboard/orders/offers"><img src={offer1} alt="offer01"/></Link>
          <Link className="link" to="/dashboard/orders/offers"><img src={offer2} alt="offer02"/></Link>
          <Link className="link" to="/dashboard/orders/offers"><img src={offer3} alt="offer03"/></Link>
          <Link className="link" to="/dashboard/orders/offers"><img src={offer4} alt="offer04"/></Link>

          <Link className="link"><img className="backNext" src={buttonNext} alt="next"/> </Link>
        </div>
      </div>

    </div>
  );
}
