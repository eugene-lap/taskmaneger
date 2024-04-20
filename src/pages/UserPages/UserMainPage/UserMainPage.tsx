import { Calendar, CardHeader, ChartContainer, Task, UserBanner, UserTabs, UserTeam } from '../../../components'
import { AllTaskImag } from '../../../components/imgs'
import './userMainPage.scss'
export const UserMainPage = () => {
    return(
        <div className="user-main-page">
                <div className="user-main-page-content">
                    <CardHeader/>
                    <div className="user-main-page-content-tasks">
                        <Task/>
                        <Task/>
                        <Task/>
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