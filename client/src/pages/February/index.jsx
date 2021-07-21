import React from 'react';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

const February = () => {
  return (
    <>
      <Header month={ 2 } />
      <Calendar month={ 2 } />
    </>
  );
}
 
export default February;