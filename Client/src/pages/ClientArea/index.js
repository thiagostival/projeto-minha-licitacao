import React, { useState } from 'react';
import { FiStar, FiArrowDown, FiSearch } from 'react-icons/fi';
import { Link, useHistory  } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import iconPerfil from '../../assets/perfil.svg';
import iconPedidos from '../../assets/pedidos.svg';
import iconConfigs from '../../assets/configs.svg';
import dados from './assets/dados.svg';

export default function ClientArea() {
  const [search, setSearch] = useState('');
  const history = useHistory();

  async function handleSearch(e) {
    e.preventDefault();

    try{
      localStorage.setItem('search', search);

      history.push('/dashboard/search');
    } catch (err) {
      alert('Falha na Pesquisa! Tente Novamente!');
    }
  }

  return (
    <div className="client-container" >

      <header className="navbar">
        <img className="logo" src={logoImg} alt="Olist"/>
        <div className="perfil">
          <Link className="link">
            <img src={iconPerfil} alt="icon Perfil"/>
            <div className="dados">
              <span>Bem vinda, Sônia</span>
              <span>4,90 <FiStar size="13" color="#ffffff" /> </span>
            </div>
          </Link>
        </div>
        <div className="buttons">
          <Link className="link" >
            <img src={iconPedidos} alt="icon Pedidos"/>
            <span>Pedidos</span>
          </Link>
          <Link className="link" >
            <img src={iconConfigs} alt="icon Configuracoes"/>
            <span>Configurações</span> <FiArrowDown size="15" color="#ffffff"/>
          </Link>
        </div>
      </header>

      <div className="search">
        <h1>O que você está buscando hoje?</h1>
        <form onSubmit={handleSearch}>
          <input 
            placeholder="Pesquisar" 
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <button type="submit"><FiSearch className="icon" /> </button>
        </form>
      </div>

      <img className="dados" src={dados} alt="Passo a passo"/>

    </div>
  );
}