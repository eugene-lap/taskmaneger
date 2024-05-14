import { useNavigate } from 'react-router-dom';
import { Button } from '../Button'
import { ProgressLine } from '../ProgressLine'
import './task.scss'
export const Task = ({width, date, taskName, taskType, progress, taskId} : {width?: string, date: Date, taskName: string, taskType: string, progress: number, taskId: number}) => {

    const taskDate = new Date(date);
    const navigate = useNavigate()
    
    const getMonthName = (monthNumber: number) => {
        const months = ['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт.', 'Ноя.', 'Дек.'];
        return months[monthNumber];
    };


    return (
        <div className="task"
        style={
            {width: `${width}%`}
        }
        >
            <h4 className="task__date">{getMonthName(taskDate.getMonth())}. {taskDate.getDate()}, {taskDate.getFullYear()}</h4>
            <div className="task-container">
                <h2 className="task-container__title">{taskName}</h2>
                <p className="task-container__text">{taskType}</p>
                <ProgressLine width={String(progress)} bgColor='#E26001'/>
                <div className="task-container-blok">
                    <p className="task-container-blok__info">Progress</p>
                    <p className="task-container-blok__progress">{progress}%</p>
                </div>
            </div>
            <div className="task-blok">
                    <div className="task-blok__line"></div>
                    <div className="task-blok-container">
                        <div className="task-blok-container-img">
                        </div>
                        <Button text='Открыть' fontSize='15' bgColor='#DDACF5' textColor='#64379F' borderRadius='19.22' onClick={() =>navigate(`/task/${taskId}`)}/>
                    </div>
                </div>
        </div>
    )
}