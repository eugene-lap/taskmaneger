import { useSelector } from 'react-redux'
import { AddNewUser, Modal } from '../../../components'
import './adminSettingPage.scss'
import { IStoreState } from '../../../types'

export const AdminSettingPage = () => {
    const isModal = useSelector((state: IStoreState) => state.ui.modalInfo.showModal)

    return (
        <div className="admin-setting">
              {isModal && <Modal/>}
            <AddNewUser/>
        </div>
    )
}