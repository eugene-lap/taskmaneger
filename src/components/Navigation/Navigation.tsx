import { useDispatch, useSelector } from "react-redux"
import { ChatLinkIcon, LogoIcon, MainDisableIcon, MainLinkIcon, SettingLinkIcon, TaskLinkIcon, UserLinkIcon } from "../icons"
import './navigation.scss'
import { IStoreState } from "../../types"
import { setLinksStatus } from "../../redux/action-creators"

export const Navigation = () => {
    const links = useSelector((state: IStoreState) => state.ui.linksStatus)
    const dispatch = useDispatch();
    return (
        <div className="navigation">
            <LogoIcon/>
            <div className="navigation-container">
            <div onClick={() => dispatch(setLinksStatus('mainWindow'))} className= {links === 'mainWindow' ? 'navigation-container__activeLink' : "navigation-container__disableLink"}>
                {links === 'mainWindow' ? <MainLinkIcon/> : <MainDisableIcon/>}
                </div>
                <div onClick={() => dispatch(setLinksStatus('taskWindow'))} className= {links === 'taskWindow' ? 'navigation-container__activeLink' : "navigation-container__disableLink"}>
                <TaskLinkIcon stroke= {links === 'taskWindow' ? '#ffff' : '#27104E'}/>
                </div>
                <div onClick={() => dispatch(setLinksStatus('chatWindow'))} className={links === 'chatWindow' ? 'navigation-container__activeLink' : "navigation-container__disableLink"}>
                <ChatLinkIcon stroke= {links === 'chatWindow' ? '#ffff' : '#27104E'}/>
                </div>
                <div onClick={() => dispatch(setLinksStatus('userWindow'))} className={links === 'userWindow' ? 'navigation-container__activeLink' : "navigation-container__disableLink"}>
                <UserLinkIcon stroke= {links === 'userWindow' ? '#ffff' : '#27104E'}/>
                </div>
                <div onClick={() => dispatch(setLinksStatus('settingWindow'))} className={links === 'settingWindow' ? 'navigation-container__activeLink' : "navigation-container__disableLink"}>
                <SettingLinkIcon stroke= {links === 'settingWindow' ? '#ffff' : '#27104E'}/>
                </div>
                
            </div>
        </div>
    )
}