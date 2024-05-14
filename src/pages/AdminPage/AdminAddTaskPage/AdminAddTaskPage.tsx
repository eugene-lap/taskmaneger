import { useSelector } from 'react-redux'
import { AddNewTask, Button, Modal } from '../../../components'
import './adminAddTaskPage.scss'
import { IStoreState } from '../../../types'
import { useNavigate } from 'react-router-dom'

export const AdminAddTaskPage = () => {
    const isModal = useSelector((state: IStoreState) => state.ui.modalInfo.showModal)
    const navigate = useNavigate()
    return(
        <div className='add-task-container'>
        <Button text='Перейти к задачам' bgColor='#FDD3B4' textColor='#E26001' fontSize='16' borderRadius='20' onClick={() => navigate("/taskWindow")}/>
        <div className="add-task">
            <AddNewTask/>
        </div>
        {isModal && <Modal/>}
        </div>
    )
}