import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Logon(){
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="logon-container">
      <section className="form">
        <header>
          <img src={logoImg} alt="Olist"/>
        </header>

        <form action="/dashboard" >
          <h1>Faça seu logon</h1>

          <div className="inputs">
            <input 
              placeholder="Sua ID" 
              value={id}
              onChange={e => setId(e.target.value)}
            />
            <input 
              type="password"
              placeholder="Sua Senha" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="">
            <FiLogIn size="16" color="#e02041" />
            Esqueci meu login
          </Link>
        </form>
      </section>
    </div>
  );
}