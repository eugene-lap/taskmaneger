import { useDispatch, useSelector } from 'react-redux'
import { UserBanner } from '../UserBanner'
import './modal.scss'
import { IAddUser, IStoreState } from '../../types'
import { Button } from '../Button'
import { setAddUsers, setToggleModalUsers } from '../../redux/action-creators'
import { useEffect, useState } from 'react'

export const ModalAddUsers = () => {
    const team = useSelector((state: IStoreState) => state.user.user.team)
    const userTeam = useSelector((state: IStoreState) => state.user?.usersTeam)
    const active = useSelector((state: IStoreState) => state.ui.active)
    const usersList = useSelector((state: IStoreState) => state.user?.addUsers)
    const [users, setUsers] = useState<IAddUser[]>([]);
    const dispatch = useDispatch()

    useEffect(() => {
        if(usersList){
          setUsers(usersList)
        }
      }, [usersList]);
      

      const handleDivClick = (clickedUser: IAddUser) => {
        const userIndex = users?.findIndex(user => user.userId === clickedUser.userId);
        if (userIndex !== -1) {
            const updatedUsers = users?.filter(user => user.userId !== clickedUser.userId);
            if (updatedUsers) {
                setUsers(updatedUsers);
            }
        } else {
            if (users) {
                setUsers([...users, clickedUser]);
            } else {
                setUsers([clickedUser]);
            }
        }
    };

    const handleButtonClick = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(setToggleModalUsers(!active))
        dispatch(setAddUsers(users))
    }

    const getClassName = (id: number) => {
        if(users){
            const user = users.find((el) => el.userId === id);
            if(user){
                return 'user-team-container__disable user-border';
            } else {
                return 'user-border';
            }
        } else {
            return 'user-border';
        }
    }

      
    return (
        <div className="modal-wrapper">
        <div className="user-team">
        <h2 className="user-team__title">Члены команды</h2>
        <div className="user-team-container">
            {userTeam?.map((el) =>  <div onClick={() => handleDivClick({
                  userId: el.userId,
                  url: el.url,
                  name: el.name,
                  surname: el.surname,
            })}>
                <UserBanner name={el.name} surname={el.surname} userId={el.userId} position={el.position} url={el.url} className = {getClassName(el.userId)}/>
                </div>
            )}
           
        </div>
        <div className="user-team-btn">
        <Button fontSize='16' text='Добавить' bgColor='#ddacf5' onClick={handleButtonClick} textColor='#64379F' borderRadius='19'/>
        </div>
    </div>
    </div>
    )
}