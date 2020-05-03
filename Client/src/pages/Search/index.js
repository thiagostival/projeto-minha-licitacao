import React, { useState } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import { FiStar, FiArrowDown, FiSearch, FiLogOut } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import iconPerfil from '../../assets/perfil.svg';
import iconPedidos from '../../assets/pedidos.svg';
import iconConfigs from '../../assets/configs.svg';

export default function Search() {
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

  async function handleForm(e) {
    e.preventDefault();

    try{
      history.push('/dashboard/search/abstract');

    } catch (err) {
      alert('Falha no envio! Tente Novamente!');
    }
  }

  return (
    <div className="search-container" >

      <header className="navbar background">
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

      <div className="search form background">
      <form onSubmit={handleSearch}>
          <input 
            placeholder={localStorage.getItem('search', search)} 
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <button type="submit"><FiSearch className="icon" /> </button>
        </form>
      </div>

      <section className="description">
        <form onSubmit={handleForm} >
          <div className="items">
            <span>Tamanho em Polegadas</span>
            <div className="radio">
              <input type="radio" id="24" name="polegadas" value="24"/> 24"
              <input type="radio" id="30" name="polegadas" value="30"/> 30"
              <input type="radio" id="32" name="polegadas" value="32"/> 32"
              <input type="radio" id="40" name="polegadas" value="40"/> 40"
              <input type="radio" id="49" name="polegadas" value="49"/> 49"
              <input type="radio" id="50" name="polegadas" value="50"/> 50"
              <input type="radio" id="55" name="polegadas" value="55"/> 55"
              <input type="radio" id="60" name="polegadas" value="60"/> 60"
              <input type="radio" id="70" name="polegadas" value="70"/> 70"
            </div>
          </div>

          <div className="items">
            <span>Smart TV?</span>
            <div className="radio">
              <input type="radio" id="sim" name="smartTv" value="sim"/> Sim
              <input type="radio" id="nao" name="smartTv" value="nao"/> Não
            </div>
          </div>

          <div className="items">
            <span>Conversor Digital?</span>
            <div className="radio">
              <input type="radio" id="sim" name="conversor" value="sim"/> Sim
              <input type="radio" id="nao" name="conversor" value="nao"/> Não
            </div>
          </div>

          <div className="items">
            <span>Quantidade de Entradas:</span>
            <div className="select">
              <strong>HDMI:</strong>
              <select name="hdmi">
                <option value="1">1 Entrada</option>
                <option value="2">2 Entradas</option>
                <option value="3">3 Entradas</option>
                <option value="4">4 Entradas</option>
              </select>
              <strong>USB:</strong>
              <select name="hdmi">
                <option value="1">1 Entrada</option>
                <option value="2">2 Entradas</option>
                <option value="3">3 Entradas</option>
                <option value="4">4 Entradas</option>
              </select>
            </div>
          </div>

          <div className="items">
            <span>Conexão Wifi?</span>
            <div className="radio">
              <input type="radio" id="sim" name="polegadas" value="sim"/> Sim
              <input type="radio" id="nao" name="polegadas" value="nao"/> Não
            </div>
          </div>

          <div className="items">
            <span>Tecnologia da Tela: </span>
            <div className="radio tela">
              <input type="radio" id="qled" name="polegadas" value="qled"/> QLED
              <input type="radio" id="lcd" name="polegadas" value="lcd"/> LCD
              <input type="radio" id="led" name="polegadas" value="led"/> LED
              <input type="radio" id="oled" name="polegadas" value="oled"/> OLED
              <input type="radio" id="tantoFaz" name="polegadas" value="tantoFaz"/> Tanto Faz
            </div>
          </div>

          <div className="items">
            <span>Alguma cor específica?</span>
            <div className="select garantia">
              <select name="hdmi">
                <option value="preta">Preta</option>
                <option value="prata">Prata</option>
                <option value="cinza">Cinza Espacial</option>
                <option value="vermelha">Vermelha</option>
              </select>
            </div>
          </div>

          <div className="items">
            <span>Prazo de garantia</span>
            <div className="select garantia">
              <select name="garantia">
                <option value="padrao">Grátis (Fabricante - 1 ano)</option>
                <option value="3">Fabricante + 3 meses</option>
                <option value="6">Fabricante + 6 meses</option>
                <option value="1Ano">Fabricante + 1 ano</option>
                <option value="2Anos">Fabricante + 2 anos</option>
              </select>
            </div>
          </div>

          <div className="items">
            <span>Alguma Observação?</span>
            <div className="textbox">
              <textarea placeholder="Observações"/>
            </div>
          </div>

          <button className="button" type="submit">Enviar Demanda</button>
        </form>
      </section>

    </div>
  );

}