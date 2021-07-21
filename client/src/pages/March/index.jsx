import React from 'react';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

const March = () => {
  return (
    <>
      <Header month={ 3 } />
      <Calendar month={ 3 } />
    </>
  );
}
 
export default March;