import React, { useState } from 'react';
import './style.css';

const Header = ( props ) => {
  const date = new Date();
  const [focusMonths, setFocusMonths] = useState('none');

  window.addEventListener('scroll', () => {
    window.scrollY > 50 && window.scrollY < 600 ? setFocusMonths('flex') : setFocusMonths('none');
  });

  function toPage(){
    window.location.href = '/monthsoftheyaer';
  }

  return (
    <div className="container">
      <div className="header">
        <button className="title" onClick={ toPage }>
          { props.month !== (date.getMonth() + 1) ? 'Calendário' : 'Dia ' + date.getDate() }
        </button>
        <p className="subTitle">{ props.month }</p>
      </div>
      <div className="focus-months" style={{ display: focusMonths }}>
        <p className="name">Domingo</p>
        <p className="name">Segunda-feira</p>
        <p className="name">Terça-feira</p>
        <p className="name">Quarta-feira</p>
        <p className="name">Quinta-feira</p>
        <p className="name">Sexta-feira</p>
        <p className="name">Sábado</p>
      </div>
      <div className="name-day">
        <p className="name">Domingo</p>
        <p className="name">Segunda-feira</p>
        <p className="name">Terça-feira</p>
        <p className="name">Quarta-feira</p>
        <p className="name">Quinta-feira</p>
        <p className="name">Sexta-feira</p>
        <p className="name">Sábado</p>
      </div>
    </div>
  );
}
 
export default Header;