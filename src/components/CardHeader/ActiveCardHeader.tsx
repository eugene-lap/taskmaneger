import { CurrentTaskImage } from '../imgs'
import './cardHeader.scss'

export const ActiveCardHeader = ({title, progress} : {title: string, progress: string}) => {
    return(
        <div className="window-task-card-header">
            <div className="window-task-card-header__img"> <CurrentTaskImage/></div>
            <div className="window-task-card-header-container">
                <h2 className="window-task-card-header-container__title">{title}</h2>
                <p className="window-task-card-header-container__text">{progress}</p>
            </div>
        </div> 
    )
}