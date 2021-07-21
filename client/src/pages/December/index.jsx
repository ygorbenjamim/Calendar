import React from 'react';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

const December = () => {
  return (
    <>
      <Header month={ 12 } />
      <Calendar month={ 12 } />
    </>
  );
}
 
export default December;