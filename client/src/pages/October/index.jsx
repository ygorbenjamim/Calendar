import React from 'react';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

const October = () => {
  return (
    <>
      <Header month={ 10 } />
      <Calendar month={ 10 } />
    </>
  );
}
 
export default October;