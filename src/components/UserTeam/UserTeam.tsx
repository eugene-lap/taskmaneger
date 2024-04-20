import { Button } from '../Button'
import { UserBanner } from '../UserBanner'
import './userTeam.scss'
export const UserTeam = () => {
    return (
        <div className="user-team">
            <h2 className="user-team__title">Члены команды</h2>
            <div className="user-team-container">
                <UserBanner/>
                <UserBanner/>
                <UserBanner/>
            </div>
            <div className="user-team-btn">
            <Button fontSize='14' text='Добавить' bgColor='#ddacf5' onClick={() => console} textColor='#64379F' borderRadius='19'/>
            </div>
        </div>
    )
}