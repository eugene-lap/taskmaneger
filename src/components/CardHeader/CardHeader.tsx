import './cardHeader.scss'
import { Button } from '../Button'
import { AllTaskImag, CompletedTaskImage, CurrentTaskImage } from '../imgs'
import { useSelector } from 'react-redux'
import { IStoreState } from '../../types'
import { textCard, tittleCard } from '../../util'

export const CardHeader = () => {
    const window = useSelector((state: IStoreState) => state.ui.linksStatus)
    const status = useSelector((state: IStoreState) => state.ui.taskStatus)
    return (
        window === 'mainWindow' ? <div className="card-header">
            <div className="card-header__img">
            <CurrentTaskImage/>
            </div>
            <div className="card-header-container">
                <h2 className="card-header-container__title">Задачи на сегодня</h2>
                <p className="card-header-container__text">Проверти свои задачи на сегодня</p>
                <div className="card-header-container__button"> 
                <Button fontSize='14' text='Расписание на сегодня' bgColor='#9854CB' textColor='#FCFBFF' onClick={() => console} borderRadius='8.47' />
                </div>
            </div>
        </div> : <div className="window-task-card-header">
            <div className="window-task-card-header__img">
            {status === 'current' ?  <AllTaskImag/> : status === 'all' ? <AllTaskImag/> : <CompletedTaskImage/>}
            </div>
            <div className="window-task-card-header-container">
                <h2 className="window-task-card-header-container__title">{tittleCard(status)}</h2>
                <p className="window-task-card-header-container__text">{textCard(status)}</p>
            </div>
        </div> 
    )
}