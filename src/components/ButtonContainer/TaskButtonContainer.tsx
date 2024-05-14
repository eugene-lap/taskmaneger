import { useDispatch } from 'react-redux'
import { Button } from '../Button/Button'
import './buttonContainer.scss'
import { setTaskActiveStatus } from '../../redux/action-creators'

export const TaskButtonContainer = () => {
    const dispatch = useDispatch()
    return(
        <div className="active-task-button-container">
            <Button text='Описание' bgColor='#DDACF5' textColor='#64379F' fontSize='14' borderRadius='20' onClick={() => dispatch(setTaskActiveStatus('description'))}/>
            <Button text='Команды' bgColor='#DCDFF9' textColor='#64379F' fontSize='14' borderRadius='20' onClick={() => dispatch(setTaskActiveStatus('command'))}/>
            <Button text='Загрузка файлов' bgColor='#AC9FF0' textColor='#64379F' fontSize='14' borderRadius='20' onClick={() => dispatch(setTaskActiveStatus('file'))}/>
            <Button text='Отчет' bgColor='#9854CB' textColor='#FCFBFF' fontSize='14' borderRadius='20' onClick={() => dispatch(setTaskActiveStatus('report'))}/>
        </div>
    )
}