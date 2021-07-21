import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';
import Note from '../../components/Note';

const Home = () => {
  const date = new Date();
  return (
    <>
      <Header month={ date.getMonth() + 1 } />
      <Calendar month={ date.getMonth() + 1 } />
      <Note />
    </>
  );
}
 
export default Home;