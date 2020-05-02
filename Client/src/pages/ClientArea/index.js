import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function ClientArea() {
  return (
    <div className="client-container" >
      <img className="logo" src={logoImg} alt="Olist"/>
    </div>
  );
}