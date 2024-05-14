import './cardHeader.scss'
import { Button } from '../Button'
import { AllTaskImag, CompletedTaskImage, CurrentTaskImage } from '../imgs'
import { useSelector } from 'react-redux'
import { IStoreState } from '../../types'
import { textCard, tittleCard } from '../../util'
import { useNavigate } from 'react-router-dom'

export const CardHeader = () => {
    const window = useSelector((state: IStoreState) => state.ui.linksStatus)
    const status = useSelector((state: IStoreState) => state.ui.taskStatus)
    const role = useSelector((state: IStoreState) => state.user.user.role)
    const navigate = useNavigate()
    return (
        window === `mainWindow` ? <div className="card-header">
            <div className="card-header__img">
            <CurrentTaskImage/>
            </div>
            <div className="card-header-container">
                <h2 className="card-header-container__title">Задачи на сегодня</h2>
                <p className="card-header-container__text">{role === 'USER' ? 'Проверьте свои задачи на сегодня' : 'Проверьте задачи вашей команды на сегодня'}</p>
                <div className="card-header-container__button"> 
                <Button fontSize='16' text='Расписание на сегодня' bgColor='#9854CB' textColor='#FCFBFF' onClick={() => navigate("/taskWindow")} borderRadius='8.47' />
                </div>
            </div>
        </div> : <div className="window-task-card-header">
            <div className="window-task-card-header__img">
            {status === 'current' ?  <CurrentTaskImage/> : status === 'all' ? <AllTaskImag/> : <CompletedTaskImage/>}
            </div>
            <div className="window-task-card-header-container"
            style={
                {
                    paddingBottom: role === 'ADMIN' ? '2rem' : '4rem'
                }
            }
            >
                <h2 className="window-task-card-header-container__title">{tittleCard(status)}</h2>
                <p className="window-task-card-header-container__text">{textCard(status, role)}</p>
                { role === 'ADMIN' && <button className="window-task-card-header-container__button" onClick={() => navigate("/newTaskWindow")}>Создать задачу</button>}
            </div>
        </div> 
    )
}