import React, { useState, useEffect } from 'react';
import {
  CgCloseO,
  CgRadioCheck,
  CgRadioChecked
} from 'react-icons/cg';
import Api from '../../Api';
import './style.css';

const Note = () => {
  const [text, setText] = useState('');
  const [notes, setNotes] = useState([]);

  async function handleCheckNotes(id, status){
    const data = { _id: id, status: status };
    await Api.put('/notes/update', data);
    selectAll();
  }

  async function removeNote(id){
    await Api.delete('/notes/remove/' + id);
    selectAll();
  }

  async function selectAll(){
    const response = await Api.get('/notes');
    setNotes(response.data);
  }

  async function create(){
    if(text === '') return;
    const data = { name: text }
    const response = await Api.post('/notes/create', data);
    if(response.status === 200){
      console.log('Anotação adicionada.');
      setText('');
      selectAll();
    }
  }

  const notesResult = notes.map(value => {
    return(
      <div
        className="note-result-item"
        key={ value._id }
      >
        <button
          className="note-result-button"
          onClick={ () => handleCheckNotes(value._id, !value.status) }
        >
          { value.status === true ? <CgRadioChecked size={25} /> : <CgRadioCheck size={25} /> }
          <p className="note-result-text">{ value.name }</p>
        </button>
        <button
          className="note-result-button-remove"
          onClick={ () => removeNote(value._id) }
        >
          <CgCloseO size={25}/>
        </button>
      </div>
    );
  });

  useEffect(() => {
    selectAll();
  }, []);

  return (
    <div className="note">
      <p className="note-title">Anotações</p>
      <div className="note-top">
        <input
          placeholder="Digite uma anotação"
          value={ text }
          onChange={(value) => setText(value.target.value)}
        />
        <button className="note-button" onClick={ create }>Adicionar</button>
      </div>
      <div className="note-list">
        <p className="note-list-title">Suas anotações</p>
        <div className="note-result">
          { notes.length < 1 ? <p className="notes-not-found">Nenhuma anotação encontrada.</p> : notesResult }
        </div>
      </div>
    </div>
  );
}
 
export default Note;
