import React from 'react';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

const September = () => {
  return (
    <>
      <Header month={ 9 } />
      <Calendar month={ 9 } />
    </>
  );
}
 
export default September;