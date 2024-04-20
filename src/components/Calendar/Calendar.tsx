import { getDaysInMonth } from '../../util';
import './calendar.scss'
import  { useState } from 'react';

export const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ];

  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  return (
    <div className='calendar'>
      <h1 className='calendar-month'>{months[date.getMonth()]} {date.getFullYear()}</h1>
      <table className='calendar-container'>
        <thead>
          <tr>
            {days.map(day => (
              <th className='calendar-day' key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
  {Array.from({ length: Math.ceil((getDaysInMonth(date.getMonth(), date.getFullYear()) + new Date(date.getFullYear(), date.getMonth(), 1).getDay()) / 7) }, (_, i) => (
  <tr key={i}>
    {Array.from({ length: 7 }, (_, j) => (i * 7) + j).map(dayIndex => {
      const day = dayIndex - new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 1;
      const totalDaysInMonth = getDaysInMonth(date.getMonth(), date.getFullYear());
      
      if (day <= 0 || day > totalDaysInMonth) {
        return <td className='calendar-day' key={dayIndex}></td>;
      } else {
        const isToday = day === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear();
        return <td key={dayIndex} className={isToday ? 'calendar-day__today' : 'calendar-day'}>{day}</td>;
      }
      
    })}
  </tr>
))}
</tbody>
      </table>
      {/* <button onClick={prevMonth}>Предыдущий месяц</button>
      <button onClick={nextMonth}>Следующий месяц</button> */}
    </div>
  );
};