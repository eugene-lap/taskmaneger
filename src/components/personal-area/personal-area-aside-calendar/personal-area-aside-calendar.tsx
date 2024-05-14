import './personal-area-aside-calendar.scss';

export function PersonalAreaAsideCalendar() {

	const myDate = new Date();
	const monthName = myDate.toLocaleString('default', { month: 'long' })[0].toLocaleUpperCase()+myDate.toLocaleString('default', { month: 'long' }).slice(1);
  const thisDay = myDate.getDate();
	const thisOfWeek = myDate.toLocaleString('en-US', { weekday: 'short' });


  return (
    <div className="personal-area-aside-calendar">
      <div className="calendar__date">
				<h3>{monthName}</h3>	

				<div className="calendar__days">
					{ [0, 1, 2, 3, 4, 6].map((numberDay) => (
						<div className='calendar__day'>
							<div className='calendar__day-number'>{thisDay + numberDay}</div>
							<div className='calendar__day-week'>{thisOfWeek}</div>
						</div>
					)) }
				</div>
				
			</div>
			<div className="events">
				<div></div>
				<div></div>
			</div>

    </div>
  )
}