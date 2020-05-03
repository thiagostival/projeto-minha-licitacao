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

import order1 from './assets/order1.svg';
import order2 from './assets/order2.svg';
import order3 from './assets/order3.svg';
import order4 from './assets/order4.svg';

export default function Orders() {
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
    <div className="orders-container" >

      <header className="navbar">
        <img className="logo" src={logoImg} alt="Olist"/>
        <div className="perfil">
          <Link className="link" to="/dashboard/search">
            <img src={iconPerfil} alt="icon Perfil"/>
            <div className="dados">
              <span>Bem vinda, Sônia</span>
              <span>4,90 <FiStar size="13" color="#ffffff" /> </span>
            </div>
          </Link>
        </div>
        <div className="buttons">
          <Link className="link" to="/dashboard/search">
            <img src={iconPedidos} alt="icon Pedidos"/>
            <span>Pedidos</span>
          </Link>
          <Link className="link" to="/dashboard/search">
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

      <div className="pedidos">
          <div className="title">
            <h2>Pedidos Realizados</h2>
          </div>
          <div className="items">
            <Link className="link"><img className="backNext" src={buttonBack} alt="back"/> </Link>

            <Link className="link" to="/dashboard/orders/offers"><img src={order1} alt="order01"/></Link>
            <Link className="link" to="/dashboard/orders/offers"><img src={order2} alt="order02"/></Link>
            <Link className="link" to="/dashboard/orders/offers"><img src={order3} alt="order03"/></Link>
            <Link className="link" to="/dashboard/orders/offers"><img src={order4} alt="order04"/></Link>

            <Link className="link"><img className="backNext" src={buttonNext} alt="next"/> </Link>
          </div>
        </div>
    </div>
  );
}