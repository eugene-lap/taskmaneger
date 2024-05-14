import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button'
import './taskSection.scss'
import { IStoreState } from '../../types'
import { formatDateTime, setTimeIsProgress, setTimeProgress } from '../../util'
import { useState } from 'react'
import { getUpdateActiveTask } from '../../redux/action-creators'

export const TaskDescription = () => {
    const task = useSelector((state: IStoreState) => state.tasks?.task)
    const userRole = useSelector((state: IStoreState) => state.user.user.role)
    const [disableButton, setDisableButton] = useState(true)
    const [editedDescription, setEditedDescription] = useState(task?.description);
    const taskId = useSelector((state: IStoreState) => state.tasks.task.id)
    const dispatch = useDispatch()

    const handelUploadButton = () => {
        setDisableButton(!disableButton)
    }
    
    const handelSaveButton = () => {
        setDisableButton(!disableButton)
        dispatch(getUpdateActiveTask(
            {
              id: taskId,
              updateData: 
              [
                {
                  fieldToUpdate: "description",
                  valueToUpdate: editedDescription,
                }
              ]
              
            }
          ))
    }

    return (
        <div className="task-description">
            <h3 className="task-description__title">{task?.name}</h3>
            <div className="task-description-content">
                {disableButton ?  <p className="task-description-content__text">{task?.description}</p> :
                <textarea
                className="task-description-content__text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}/>
                }
                <div className="task-description-content-buttons">
                    <Button text= {`Задача открыта: ${formatDateTime(task?.openingDate)}`} bgColor='#E7DCF9' textColor='#64379F' fontSize='14' borderRadius='20'/>
                    <Button text= {`Времени на выполнение: ${setTimeProgress(task?.deadline, task?.openingDate)}`} bgColor='#E7DCF9' textColor='#64379F' fontSize='14' borderRadius='20'/>
                    <Button text= {`Человек в группе: ${task?.usersCount}`} bgColor='#E7DCF9' textColor='#64379F' fontSize='14' borderRadius='20'/>
                    <Button text= {`Срок сдачи: ${formatDateTime(task?.deadline)}`} bgColor='#E7DCF9' textColor='#64379F' fontSize='14' borderRadius='20'/>
                    <Button text= {`Задача в обработке: ${setTimeIsProgress(task?.openingDate)}`} bgColor='#E7DCF9' textColor='#64379F' fontSize='14' borderRadius='20'/>
                </div>
            </div>
            {userRole === 'ADMIN' && disableButton ? <button className="task-description__button" onClick={handelUploadButton}> Редактировать задачу</button> : <button className="task-description__button" onClick={handelSaveButton}>Сохранить</button>}
        </div>
    )
}