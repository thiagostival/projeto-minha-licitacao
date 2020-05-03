import React, { useState } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import { FiStar, FiArrowDown, FiSearch, FiLogOut } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import iconPerfil from '../../assets/perfil.svg';
import iconPedidos from '../../assets/pedidos.svg';
import iconConfigs from '../../assets/configs.svg';
import bgOrder from './assets/order.svg';
import orderAbstract from './assets/orderAbstract.svg';

export default function Order() {
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
    <div className="orderAbstract-container" >

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

      <div className="order">
        <div className="abstract">
          <h1>Demanda enviada com sucesso!</h1>
          <h3>em pouco tempo receberá propostas de nossos vendedores =)</h3>
          <Link to="/dashboard/orders">
            <img src={orderAbstract} alt="abstract Order"/>
          </Link>
          <button action="/dashboard/orders">Ver Pedidos</button>
        </div>

        <img className="bgOrder" src={bgOrder} alt="background"/>

      </div>

    </div>
  );
}