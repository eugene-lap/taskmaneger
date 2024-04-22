import { AvatarUser } from '../../../components/avatar-user'
import { PersonalAreaTeam } from '../../../components/personal-area/personal-area-calendar'
import { PersonalAreaData } from '../../../components/personal-area/personal-area-data'
import { PersonalAreaPassword } from '../../../components/personal-area/personal-area-edit-password'
import { PersonalAreaProgress } from '../../../components/personal-area/personal-area-progress'
import { PersonalAreaTasks } from '../../../components/personal-area/personal-area-tasks'
import { PersonalAreaCalendar } from '../../../components/personal-area/personal-area-team'
import { User } from '../../../types'
import './personal-area.scss'

export const PersonalArea = () => {
    const user: User = {
        photo: '/photo.png',
        name: 'Имя пользователя',
        position: 'Должность пользователя'
    };


    return(
        <div className="parsonal-area">
                <div className="personal-area-content">
                    <div className="personal-area-content__header">
                        <AvatarUser {...user}></AvatarUser>
                        <PersonalAreaTeam></PersonalAreaTeam>
                    </div>
                    <div className="personal-area-content__main">
                        <PersonalAreaData></PersonalAreaData>
                        <PersonalAreaProgress></PersonalAreaProgress>
                    </div>
                    <div className="personal-area-content__footer">
                        <PersonalAreaPassword></PersonalAreaPassword>
                        {/* //!calendar */}
                    </div>
                </div>
                <div className="personal-area-aside">
                    <PersonalAreaCalendar></PersonalAreaCalendar>
                    <PersonalAreaTasks></PersonalAreaTasks>
                </div>
            </div>
    )
}