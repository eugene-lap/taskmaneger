import { useEffect, useRef } from 'react'
import { TaskButtonContainer } from '../ButtonContainer'
import { TaskCommand } from './TaskCommand'
import { TaskDescription } from './TaskDescription'
import { TaskReport } from './TaskReport'
import './taskSection.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addImgs, setImgs, setWidthBlock } from '../../redux/action-creators'
import { TaskImagesUploader } from './TaskImagesUploader'
import { IStoreState } from '../../types'

export const TaskSection = () => {
  const taskActiveStatus = useSelector((state: IStoreState) => state.ui.taskActiveStatus )
    return(
        <div className="task-section">
            <TaskButtonContainer/>
            {taskActiveStatus === 'description' && <TaskDescription/>}
            {taskActiveStatus === 'command' && <TaskCommand/>}
            {taskActiveStatus === 'file' && <TaskImagesUploader/>}
            {taskActiveStatus === 'report' && <TaskReport/>}
        </div>
    )
}