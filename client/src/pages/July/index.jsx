import React from 'react';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

const July = () => {
  return (
    <>
      <Header month={ 7 } />
      <Calendar month={ 7 } />
    </>
  );
}
 
export default July;