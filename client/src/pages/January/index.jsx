import React from 'react';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

const January = () => {
  return (
    <>
      <Header month={ 1 } />
      <Calendar month={ 1 } />
    </>
  );
}
 
export default January;