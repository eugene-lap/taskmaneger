import './personal-area-tasks.scss';

export function PersonalAreaTasks() {
  const tasks = {
    totalCaunt: 12,
    completed: '2/5',
    tasksArray: [
      {title: 'Дизайн', date: '01Sep2022', procent: '86/100'},
      {title: 'Сборка', date: '01Sep2022', procent: '90/100'},
      {title: 'Установка', date: '03Sep2022', procent: '0/100'},
      {title: 'Тестинг', date: '06Sep2022', procent: '0/100'}
    ] 
  };

  return (
    <div className="personal-area-tasks">
      <h3>Задачи ({tasks.totalCaunt})</h3>  
      <div>
        {tasks.completed} completed
      </div>
      {
        tasks.tasksArray.map((task) => (
          <div className='task'>
            {task.procent[0] !== '0' 
            ? <div className='task__column-title'>
               <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.891113" y="0.695587" width="20.5029" height="20.5652" rx="9.34783" fill="#DDD6ED" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5856 0.695587C19.0598 0.695587 21.394 3.14079 21.394 6.77878V15.1776C21.394 18.8156 19.0598 21.2608 15.5845 21.2608H6.69857C3.22435 21.2608 0.891113 18.8156 0.891113 15.1776V6.77878C0.891113 3.14079 3.22435 0.695587 6.69857 0.695587H15.5856ZM15.5856 2.23798H6.69857C4.10495 2.23798 2.42883 4.01995 2.42883 6.77878V15.1776C2.42883 17.9364 4.10495 19.7184 6.69857 19.7184H15.5845C18.1792 19.7184 19.8563 17.9364 19.8563 15.1776V6.77878C19.8563 4.01995 18.1792 2.23798 15.5856 2.23798ZM15.3349 7.99316C15.6353 8.29444 15.6353 8.78183 15.3349 9.08311L10.4696 13.9632C10.3199 14.1144 10.1231 14.1895 9.92624 14.1895C9.73044 14.1895 9.53259 14.1144 9.38292 13.9632L6.94922 11.5232C6.64885 11.2219 6.64885 10.7345 6.94922 10.4332C7.24959 10.1319 7.73551 10.1319 8.03587 10.4332L9.92624 12.3273L14.2483 7.99316C14.5486 7.69187 15.0346 7.69187 15.3349 7.99316Z" fill="#5534A5" />
                </svg>
                <div className='task__title'>
                  <div>{task.title}</div>
                  <div>{task.date}</div>
                </div>
               
              </div>   
            : <div className='task__column-title'>
                <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0502 0.369507C19.6343 0.369507 22.0423 2.81471 22.0423 6.4527V14.8515C22.0423 18.4895 19.6343 20.9347 16.0491 20.9347H6.8822C3.29812 20.9347 0.891113 18.4895 0.891113 14.8515V6.4527C0.891113 2.81471 3.29812 0.369507 6.8822 0.369507H16.0502ZM16.0502 1.9119H6.8822C4.20657 1.9119 2.47745 3.69387 2.47745 6.4527V14.8515C2.47745 17.6104 4.20657 19.3923 6.8822 19.3923H16.0491C18.7258 19.3923 20.456 17.6104 20.456 14.8515V6.4527C20.456 3.69387 18.7258 1.9119 16.0502 1.9119Z" fill="#EAEAEA" />
                </svg>
                <div className='task__title'>
                  <div>{task.title}</div>
                  <div>{task.date}</div>
                </div>
              </div>   
            }
            
            <div className='task__procent'>{task.procent}</div>
          </div>
        ))  
      }
    </div>
  )
}