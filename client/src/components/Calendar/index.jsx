import React from 'react';
import './style.css';

const Calendar = ( props ) => {

  const date = new Date();

  const months = [
    {
      index: 1,
      days: 31,
      tab: 5,
      holyday: [1, 5]
    },
    {
      index: 2,
      days: 28,
      tab: 1,
      holyday: [1, 6]
    },
    {
      index: 3,
      days: 31,
      tab: 1,
      holyday: [2, 5]
    },
    {
      index: 4,
      days: 30,
      tab: 4,
      holyday: [2, 5]
    },
    {
      index: 5,
      days: 31,
      tab: 6,
      holyday: [2, 5]
    },
    {
      index: 6,
      days: 30,
      tab: 2,
      holyday: [2, 5]
    },
    {
      index: 7,
      days: 31,
      tab: 4,
      holydays: [6, 9]
    },
    {
      index: 8,
      days: 31,
      tab: 0,
      holyday: [2, 5]
    },
    {
      index: 9,
      days: 30,
      tab: 3,
      holyday: [2, 5]
    },
    {
      index: 10,
      days: 31,
      tab: 5,
      holyday: [2, 5]
    },
    {
      index: 11,
      days: 30,
      tab: 1,
      holyday: [2, 5]
    },
    {
      index: 12,
      days: 31,
      tab: 3,
      holyday: [2, 5]
    }
  ];

  const result = months.map(value => {
    if(value.index === ( props.month )){
      const tabSize = Array.from({ length: value.tab }).map((_, index) => (
        <div
          className="day"
          key={ index }
        ></div>
      ));
      const days = Array.from({ length: value.days }).map((_, index) => (
        <div
          className="day"
          key={ index += 'a' }
        >
          { index + 1 === date.getDate() && props.month === ( date.getMonth() + 1) ? <p className="today">{ index + 1 }</p> : <p>{ index + 1 }</p>}
        </div>
      ));
      return(
        tabSize.concat(days)
      );
    }
    return null;
  });

  return (
    <div className="container">
      <div className="number-day">
        { result }
      </div>
    </div>
  );
}
 
export default Calendar;