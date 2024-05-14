import { useDispatch, useSelector } from "react-redux"
import { Button } from "../Button"
import './userTabs.scss'
import { IStoreState } from "../../types"
import { useEffect } from "react"
import { getUserImgs } from "../../redux/action-creators"
import { getUserName } from "../../util"

export const UserTabs = () => {
    const user = useSelector((state: IStoreState) => state.user.user)
    const url = useSelector((state: IStoreState) => state.user.userImg?.imgUrl)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserImgs(user.id))
    },[])
    return (
        <div className="user-tabs">
            <div className="user-tabs-container-info">
                {url?.length === 0 ? <div className="user-tabs-container-info__img user-name">{getUserName(user.name, user.surname)}</div>
                :
                <img src= {url} alt="" className="user-tabs-container-info__img" />
                }
                <div className="user-tabs-container-info-content">
                    <h3 className="user-tabs-container-info-content__title">{user.name} {user.surname}</h3>
                    <p className="user-tabs-container-info-content__info">{user.position}</p>
                </div>
            </div>
            <div className="user-tabs__line"></div>
            <div className="user-tabs-container-content">
                <h2 className="user-tabs-container-content__title">Ваша статистика</h2>
                <p className="user-tabs-container-content__info">Проверти свою статистику в личном кабинете</p>
                <div className="user-tabs-container-content__button">
                <Button text="Перейти в личный кабинет" fontSize="18" bgColor="#9854CB" textColor="#FCFBFF" borderRadius="8.47" onClick={() => console}/>
                </div>
            </div>
        </div>
    )
}