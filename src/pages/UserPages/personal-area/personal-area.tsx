import { Calendar, CardHeader, ChartContainer, Task, UserBanner, UserTabs, UserTeam } from '../../../components'

import './personal-area.scss'

export const PersonalArea = () => {
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