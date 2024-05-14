import { useDispatch, useSelector } from 'react-redux'
import { ButtonContainer, CardHeader, Search, Task, UserTabs } from '../../../components'
import { Pagination } from '../../../components/Pagination'
import './userTaskPage.scss'
import { IStoreState } from '../../../types'
import { useEffect } from 'react'
import { getPreviewTask, setLinksStatus } from '../../../redux/action-creators'

export const UserTaskPage = () => {
    const userId = useSelector((state: IStoreState) => state.user.user.id)
    const previewTask = useSelector((state: IStoreState) => state.tasks?.previewTask.tasks)
    const currentPage = useSelector((state: IStoreState) => state.tasks.currentPage)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPreviewTask({
            userId: userId,
            isCompleted: 'progress',
            agePage: 8,
            currentPage: currentPage-1
        }))
        dispatch(setLinksStatus("taskWindow"))
    }, [currentPage])
    return (
        <div className="user-task-page">
            <div className="user-task-page-header">
                <div className="user-task-page-header-container">
                <div className="user-task-page-header-container-buttons">
                    <Search/>
                    <ButtonContainer/>
                </div>
                <CardHeader/>
                </div>
                <div className="user-task-page-header-tabs">
                <UserTabs/>
                </div>
            </div>
            <div className="user-task-page-container">
            {previewTask.map(el => <> <Task date={el.openingDate} taskName={el.name} taskType={el.typeTasks} progress={el.progress} taskId={el.id} width='22'/></>)}
            </div>
            <div className="user-task-page-pagination">
                <Pagination/>
            </div>
        </div>
    )
}