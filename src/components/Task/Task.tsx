import { Button } from '../Button'
import { ProgressLine } from '../ProgressLine'
import './task.scss'
export const Task = ({width} : {width?: string}) => {
    return (
        <div className="task"
        style={
            {width: `${width}%`}
        }
        >
            <h4 className="task__date">Янв. 2, 2022</h4>
            <div className="task-container">
                <h2 className="task-container__title">Web Dashboard</h2>
                <p className="task-container__text">Designing</p>
                <ProgressLine width='90' bgColor='#E26001'/>
                <div className="task-container-blok">
                    <p className="task-container-blok__info">Progress</p>
                    <p className="task-container-blok__progress">90%</p>
                </div>
            </div>
            <div className="task-blok">
                    <div className="task-blok__line"></div>
                    <div className="task-blok-container">
                        <div className="task-blok-container-img">
                        </div>
                        <Button text='Открыть' fontSize='15' bgColor='#DDACF5' textColor='#64379F' borderRadius='19.22' onClick={() => console}/>
                    </div>
                </div>
        </div>
    )
}