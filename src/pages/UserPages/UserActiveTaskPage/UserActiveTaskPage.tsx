import { ActiveCardHeader, Button, ProgressLineContainer, TaskSection, UserTabs } from '../../../components'
import './userActiveTaskPage.scss'

export const UserActiveTaskPage = () => {
    return(
        <div className="user-active-task-page">
            <div className="user-active-task-page-header">
                <div className="user-active-task-page-content">
                <Button text='Вернуться к задачам' bgColor='#FDD3B4' textColor='#E26001' fontSize='16' borderRadius='20'/>
                <ActiveCardHeader title='Дизайн комнаты' progress='В работе' />
                </div>
                <div className="user-task-page-header-tabs">
                <UserTabs/>
                </div>
            </div>
            <div className="user-active-task-content-page">
                <div className="user-active-task-page-content-info">
                    <ProgressLineContainer/>
                    <TaskSection/>
                </div>
                <div className="user-active-task-page-content-container">
                    
                </div>
            </div>
        </div>
    )
}