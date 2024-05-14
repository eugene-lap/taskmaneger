import './personal-area-calendar.scss';

export function PersonalAreaCalendar() {
  
  return (
    <div className="personal-area-calendar">
      
	<div className="datepicker-top">		
		<div className="month-selector">
			<button className="arrow">&lt;</button>
			<span className="month-name">December 2023</span>
			<button className="arrow">&gt;</button>
		</div>
	</div>
	<div className="datepicker-calendar">
		<span className="day">Mo</span>
		<span className="day">Tu</span>
		<span className="day">We</span>
		<span className="day">Th</span>
		<span className="day">Fr</span>
		<span className="day">Sa</span>
		<span className="day">Su</span>
		<button className="date faded">30</button>
		<button className="date">1</button>
		<button className="date">2</button>
		<button className="date">3</button>
		<button className="date">4</button>
		<button className="date">5</button>
		<button className="date">6</button>
		<button className="date">7</button>
		<button className="date">8</button>
		<button className="date current-day">9</button>
		<button className="date">10</button>
		<button className="date">11</button>
		<button className="date">12</button>
		<button className="date">13</button>
		<button className="date">14</button>
		<button className="date">15</button>
		<button className="date">16</button>
		<button className="date">17</button>
		<button className="date">18</button>
		<button className="date">19</button>
		<button className="date">20</button>
		<button className="date">21</button>
		<button className="date">22</button>
		<button className="date">23</button>
		<button className="date">24</button>
		<button className="date">25</button>
		<button className="date">26</button>
		<button className="date">27</button>
		<button className="date">28</button>
		<button className="date">29</button>
		<button className="date">30</button>
		<button className="date">31</button>
		<button className="date faded">1</button>
		<button className="date faded">2</button>
		<button className="date faded">3</button>
	</div>

    </div>
  )
}