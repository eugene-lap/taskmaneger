import { useDispatch } from 'react-redux'
import { Button } from '../Button/Button'
import './buttonContainer.scss'
import { setTaskStatus } from '../../redux/action-creators'

export const ButtonContainer = () => {
    const dispatch = useDispatch()
    return (
        <div className="button-container">
            <Button onClick={() => dispatch(setTaskStatus('current'))} text='Текущие задачи: 100' bgColor='#DDACF5' textColor='#64379F' fontSize='14' borderRadius='20' />
            <Button onClick={() => dispatch(setTaskStatus('all'))} text='Всего задач: 500' bgColor='#DCDFF9' textColor='#64379F' fontSize='14' borderRadius='20' />
            <Button onClick={() => dispatch(setTaskStatus('completed'))} text='Выполненные задачи: 200' bgColor='#B6FDB4' textColor='#64379F' fontSize='14' borderRadius='20' />
        </div>
    )
}