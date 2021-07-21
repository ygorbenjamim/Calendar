import React from 'react';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

const November = () => {
  return (
    <>
      <Header month={ 11 } />
      <Calendar month={ 11 } />
    </>
  );
}
 
export default November;