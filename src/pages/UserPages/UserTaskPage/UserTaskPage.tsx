import { ButtonContainer, CardHeader, Search, Task, UserTabs } from '../../../components'
import { Pagination } from '../../../components/Pagination'
import './userTaskPage.scss'

export const UserTaskPage = () => {
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
                <Task width='22' />
                <Task width='22' />
                <Task width='22' />
                <Task width='22' />
                <Task width='22' />
                <Task width='22' />
                <Task width='22' />
                <Task width='22' />
            </div>
            <div className="user-task-page-pagination">
                <Pagination/>
            </div>
        </div>
    )
}