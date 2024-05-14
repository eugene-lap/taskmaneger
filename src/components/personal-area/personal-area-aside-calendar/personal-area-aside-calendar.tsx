import './personal-area-aside-calendar.scss';

export function PersonalAreaAsideCalendar() {

	const myDate = new Date();
	const monthName = myDate.toLocaleString('default', { month: 'long' })[0].toLocaleUpperCase()+myDate.toLocaleString('default', { month: 'long' }).slice(1);
  const thisDay = myDate.getDate();
	const thisOfWeek = myDate.toLocaleString('en-US', { weekday: 'short' });
	const personalEvents: { [key: string]: { title: string; time: string } | undefined }  = { 
		'09:00': undefined,
		'10:00': { title: 'UI Motion', time: '10:00 - 12:00' },
		'11:00': undefined,
		'12:00': { title: 'UI Design', time: '12:00 - 01:00' },
		'13:00': undefined }

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
				{ ['09:00','10:00','11:00','12:00','01:00'].map((time) => (
					<div className="event" key={time}>
						<div className='event__time'>{time}</div>
						{ personalEvents[time]
								? <div className='event__active-title'>
										<div>{personalEvents[time]?.title}</div>
										<div>{personalEvents[time]?.time}</div>
									</div> 
								: <div className='event__title'></div>
						}
						
					</div>
				)) }
				
			</div>

    </div>
  )
}