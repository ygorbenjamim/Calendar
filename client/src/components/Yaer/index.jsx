import React from 'react';
import './style.css';
import { CgCalendarDates } from 'react-icons/cg';

const Yaer = () => {
  function toPage(url){
    window.location.href = url;
  }

  return (
    <div className="container">
      <div className="topLabel">
        <button className="title" onClick={() => toPage('/') }>2021</button>
      </div>
      <div className="months">
        <button className="item" onClick={() => toPage('/january') }>
          Janeiro
          <CgCalendarDates size={50} />
        </button>
        <button className="item" onClick={() => toPage('/february') }>
          Fevereiro
          <CgCalendarDates size={50} />
        </button>
        <button className="item" onClick={() => toPage('/march') }>
          Março
          <CgCalendarDates size={50} />
        </button>
        <button className="item" onClick={() => toPage('/april') }>
          Abril
          <CgCalendarDates size={50} />
        </button>
        <button className="item" onClick={() => toPage('/may') }>
          Maio
          <CgCalendarDates size={50} />
        </button>
        <button className="item" onClick={() => toPage('/june') }>
          Junho
          <CgCalendarDates size={50} />
        </button>
        <button className="item" onClick={() => toPage('/july') }>
          Julho
          <CgCalendarDates size={50} />
        </button>
        <button className="item" onClick={() => toPage('/august') }>
          Agosto
          <CgCalendarDates size={50} />
        </button>
        <button className="item" onClick={() => toPage('/september') }>
          Setembro
          <CgCalendarDates size={50} />
        </button>
        <button className="item" onClick={() => toPage('/october') }>
          Outubro
          <CgCalendarDates size={50} />
        </button>
        <button className="item" onClick={() => toPage('/november') }>
          Novembro
          <CgCalendarDates size={50} />
        </button>
        <button className="item" onClick={() => toPage('/december') }>
          Dezembro
          <CgCalendarDates size={50} />
        </button>
      </div>
    </div>
  );
}
 
export default Yaer;