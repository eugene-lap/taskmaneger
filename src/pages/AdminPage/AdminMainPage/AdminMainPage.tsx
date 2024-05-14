import { useEffect } from 'react'
import { Calendar, CardHeader, ChartContainer, Task, UserBanner, UserTabs, UserTeam } from '../../../components'
import { AllTaskImag } from '../../../components/imgs'
import './adminMainPage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getPreviewTask, setLinksStatus } from '../../../redux/action-creators'
import { IStoreState } from '../../../types'
export const AdminMainPage = () => {
    const userId = useSelector((state: IStoreState) => state.user.user?.id)
    const previewTask = useSelector((state: IStoreState) => state.tasks?.previewTask.tasks)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPreviewTask({
            userId: userId,
            isCompleted: 'progress',
            agePage: 3,
            currentPage: 0
        }))
        dispatch(setLinksStatus("mainWindow"))
    }, [])
    return(
        <div className="user-main-page">
                <div className="user-main-page-content">
                    <CardHeader/>
                    <div className="user-main-page-content-tasks">
                        {previewTask?.map(el => <> <Task date={el.openingDate} taskName={el.name} taskType={el.typeTasks} progress={el.progress} taskId={el.id}/></>)}
                    </div>
                    <div className="user-main-page-content-container">
                        <ChartContainer/>
                        <UserTeam/>
                    </div> 
                </div>
                <div className="user-main-page-container">
                    <UserTabs/>
                    <Calendar/>
                </div>
            </div>
    )
}