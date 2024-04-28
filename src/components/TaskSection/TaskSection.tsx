import { useEffect, useRef } from 'react'
import { TaskButtonContainer } from '../ButtonContainer'
import { TaskCommand } from './TaskCommand'
import { TaskDescription } from './TaskDescription'
import { TaskReport } from './TaskReport'
import './taskSection.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setFiles, setWidthBlock } from '../../redux/action-creators'
import { TaskImagesUploader } from './TaskImagesUploader'
import { IStoreState } from '../../types'

export const TaskSection = () => {
  const taskActiveStatus = useSelector((state: IStoreState) => state.ui.taskActiveStatus )
  const dispatch = useDispatch()
  const handleSave = (files: File[]) => {
    const filesArray = files.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type
      }))
    dispatch(setFiles(filesArray))
    // Обработка сохранения файлов здесь
    console.log('Saved files:', files);}
    return(
        <div className="task-section">
            <TaskButtonContainer/>
            {taskActiveStatus === 'description' && <TaskDescription/>}
            {taskActiveStatus === 'command' && <TaskCommand/>}
            {taskActiveStatus === 'file' && <TaskImagesUploader onSave={handleSave}/>}
            {taskActiveStatus === 'report' && <TaskReport/>}
        </div>
    )
}