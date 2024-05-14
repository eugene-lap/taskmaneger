import { useEffect } from 'react'
import { ActiveCardHeader, Button, ProgressLineContainer, TaskSection, UserTabs } from '../../../components'
import './userActiveTaskPage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getTask} from '../../../redux/action-creators'
import { IStoreState } from '../../../types'
import { useNavigate, useParams } from 'react-router-dom'

export const UserActiveTaskPage = () => {
    const { taskId = "" } = useParams();
    const task = useSelector((state: IStoreState) => state.tasks?.task)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=> {
        dispatch(getTask(+taskId))
    }, [])
    return(
        <div className="user-active-task-page">
            <div className="user-active-task-page-header">
                <div className="user-active-task-page-content">
                <Button text='Вернуться к задачам' bgColor='#FDD3B4' textColor='#E26001' fontSize='16' borderRadius='20' onClick={() => navigate("/taskWindow")}/>
                <ActiveCardHeader title={task?.name} progress={task?.isCompleted === 'progress' ? 'В работе' : 'Завершена'} />
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