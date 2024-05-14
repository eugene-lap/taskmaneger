import { getUserName } from '../../util'
import './userBanner.scss'
export const UserBanner = ({name, surname, position, url, userId, className} : {name: string, surname: string, position: string, url: string, userId: number, className?: string}) => {
    return (
        <div className= {className ? className : "user-border"}>
            {url ? <img src={url} alt="" className="user-border__img" /> : <div className="user-border__img user-name">{getUserName(name, surname)}</div>}
                <div className="user-border-content">
                    <h3 className="user-border-content__title">{name} {surname}</h3>
                    <p className="user-border-content__info">{position}</p>
                </div>
        </div>
    )
}