import { useDispatch, useSelector } from "react-redux"
import { ChatLinkIcon, ExitIcon, LogoIcon, MainDisableIcon, MainLinkIcon, NewTaskIcon, ScheduleIcon, SettingLinkIcon, TaskLinkIcon, UserLinkIcon } from "../icons"
import './navigation.scss'
import { IStoreState } from "../../types"
import { setLinksStatus } from "../../redux/action-creators"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Navigation = () => {
    const role = useSelector((state: IStoreState) => state.user.user.role)
    const [links, setLinks] = useState('mainWindow')
    const navigate = useNavigate();

    const handelNavigate = (navigateTo: string) => {
        setLinks(navigateTo)
        navigate(`/${navigateTo}`)
    }

    const handleExit = () => {
        localStorage.clear();
        navigate("/sign-in")
    }

    return (
        <div className="navigation">
             <div className="nav">
            <LogoIcon/>
            <div className="navigation-container">
                <div onClick={() => handelNavigate(`mainWindow`)} className= {links === `mainWindow` ? 'navigation-container__activeLink' : "navigation-container__disableLink"}>
                {links === `mainWindow` ? <MainLinkIcon/> : <MainDisableIcon/>}
                </div>
                <div onClick={() => handelNavigate(`taskWindow`)} className= {links === `taskWindow` ? 'navigation-container__activeLink' : "navigation-container__disableLink"}>
                <TaskLinkIcon stroke= {links === `taskWindow` ? '#ffff' : '#27104E'}/>
                </div>
                <div onClick={() => handelNavigate(`userWindow`)} className={links === `userWindow` ? 'navigation-container__activeLink' : "navigation-container__disableLink"}>
                <UserLinkIcon stroke= {links === `userWindow` ? '#ffff' : '#27104E'}/>
                </div>
                <div onClick={() => handelNavigate(`scheduleWindow`)} className={links === `scheduleWindow` ? 'navigation-container__activeLink' : "navigation-container__disableLink"}>
                <ScheduleIcon stroke= {links === `scheduleWindow` ? '#ffff' : '#27104E'}/>
                </div>
                { role === 'ADMIN' && <div onClick={() => handelNavigate(`newTaskWindow`)} className={links === `newTaskWindow` ? 'navigation-container__activeLink' : "navigation-container__disableLink"}>
                <NewTaskIcon stroke= {links === `newTaskWindow` ? '#ffff' : '#27104E'}/>
                </div>}
                { role === 'ADMIN' && <div onClick={() => handelNavigate(`settingWindow`)} className={links === 'settingWindow' ? 'navigation-container__activeLink' : "navigation-container__disableLink"}>
                <SettingLinkIcon stroke= {links === 'settingWindow' ? '#ffff' : '#27104E'}/>
                </div>}
                
            </div>
        </div>
        <div onClick={handleExit} className= "navigation-container__disableLink nav-exit">
            <ExitIcon/>
        </div>
</div>
    )
}