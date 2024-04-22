import { User } from "../../types";
import './avatar-user.scss';


export function AvatarUser({...user}: User) {
  
  return (
    <div className="avatar-user">
      <div className="avatar-user__photo">
        <img src={user.photo} alt="User" />
      </div>
      <div className="avatar-user__details">
          <h2>{user.name}</h2>
          <p>{user.position}</p>
      </div>
    </div>
  )
}