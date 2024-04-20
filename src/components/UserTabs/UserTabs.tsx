import { Button } from "../Button"
import './userTabs.scss'

export const UserTabs = () => {
    return (
        <div className="user-tabs">
            <div className="user-tabs-container-info">
                <img src="" alt="" className="user-tabs-container-info__img" />
                <div className="user-tabs-container-info-content">
                    <h3 className="user-tabs-container-info-content__title">Иванов Иван</h3>
                    <p className="user-tabs-container-info-content__info">Элетромантер</p>
                </div>
            </div>
            <div className="user-tabs__line"></div>
            <div className="user-tabs-container-content">
                <h2 className="user-tabs-container-content__title">Ваша статистика</h2>
                <p className="user-tabs-container-content__info">Проверти свою статистику в личном кабинете</p>
                <div className="user-tabs-container-content__button">
                <Button text="Перейти в личный кабинет" fontSize="16" bgColor="#9854CB" textColor="#FCFBFF" borderRadius="8.47" onClick={() => console}/>
                </div>
            </div>
        </div>
    )
}