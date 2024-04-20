import './userBanner.scss'
export const UserBanner = () => {
    return (
        <div className="user-border">
            <img src="" alt="" className="user-border__img" />
                <div className="user-border-content">
                    <h3 className="user-border-content__title">Иванов Иван</h3>
                    <p className="user-border-content__info">Элетромантер</p>
                </div>
        </div>
    )
}