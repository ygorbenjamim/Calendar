import React from 'react';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

const June = () => {
  return (
    <>
      <Header month={ 6 } />
      <Calendar month={ 6 } />
    </>
  );
}
 
export default June;