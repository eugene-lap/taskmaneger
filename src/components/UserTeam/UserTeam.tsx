import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button'
import { UserBanner } from '../UserBanner'
import './userTeam.scss'
import { IStoreState } from '../../types'
import { useEffect } from 'react'
import { getUsersTeam } from '../../redux/action-creators'
import { useNavigate } from 'react-router-dom'
export const UserTeam = () => {
    const team = useSelector((state: IStoreState) => state.user.user.team)
    const userTeam = useSelector((state: IStoreState) => state.user?.usersTeam)
    const role = useSelector((state: IStoreState) => state.user.user.role)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getUsersTeam(team))
    }, [])
    return (
        <div className="user-team">
            <h2 className="user-team__title">Члены команды</h2>
            <div className="user-team-container">
                {userTeam?.map((el) =>  <UserBanner name={el.name} surname={el.surname} userId={el.userId} position={el.position} url={el.url} className=''/>)}
            </div>
            <div className="user-team-btn">
            {role === "ADMIN" && <Button fontSize='16' text='Добавить' bgColor='#ddacf5' onClick={() => navigate("/settingWindow")} textColor='#64379F' borderRadius='19'/>}
            </div>
        </div>
    )
}