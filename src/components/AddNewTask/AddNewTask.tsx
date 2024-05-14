import { useDispatch, useSelector } from 'react-redux'
import { AdditionUserIcon } from '../icons'
import './addNewTask.scss'
import { IStoreState } from '../../types'
import { addNewTask, setAddUsers, setToggleModalUsers } from '../../redux/action-creators'
import { ModalAddUsers } from '../Modal'
import { getUserName } from '../../util'
import { ChangeEvent, useState } from 'react'

export const AddNewTask = () => {
    const active = useSelector((state: IStoreState) => state.ui.active)
    const users = useSelector((state: IStoreState) => state.user?.addUsers)
    const team = useSelector((state: IStoreState) => state.user.user.team)
    const [activeId, setActiveId] = useState<number>()
    const [name, setName] = useState<string>('')
    const [typeTasks, setTypeTasks] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [date, setDate] = useState<Date | undefined>(undefined)
    const dispatch = useDispatch()

    const handleMouseEnter = (id: number) => {
        setActiveId(id)
    }

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleTypeTasks = (e: ChangeEvent<HTMLInputElement>) => {
        setTypeTasks(e.target.value);
    };

    const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(new Date(e.target.value));
    }


    const handleButtonClick = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const currentDate = new Date();
        const idsArray = users.map(obj => obj.userId);
        dispatch(addNewTask({
            name: name,
            typeTasks: typeTasks,
            team: team,
            openingDate: currentDate,
            description: description,
            deadline: date || currentDate,
            userIds: idsArray
        }))
        setName('')
        setDate(undefined)
        setTypeTasks('')
        setDescription('')
        dispatch(setAddUsers([]))
    }

    return (
        <div className="new-task">
            <div className="new-task-content">
                <h3 className="new-task-content__title">Создание новой задачи</h3>
                <div className='new-task-content-container'>
                    <label className="new-task-content__label">Введите название задачи:</label>
                    <input type="text" className="new-task-content__input"  value={name} onChange={handleName}/>
                </div>
                <div className='new-task-content-container'> 
                    <label className="new-task-content__label">Введите тип задачи:</label>
                    <input type="text" className="new-task-content__input" value={typeTasks} onChange={handleTypeTasks}/>
                </div >
                <div className='new-task-content-container'>
                    <label  className="new-task-content__label">Срок сдачи</label>
                    <input type="date" className="new-task-content__input" value={date ? date.toISOString().split('T')[0] : ''} onChange={handleDate}/>
                </div>
                <div className='new-task-content-container'>
                    <label className="new-task-content__label">Описание задачи:</label>
                    <textarea name="new-task-content__textarea" rows={7} value={description} onChange={handleDescription}/>
                </div>
            </div>
            <div className="new-task-container">
                <div className="new-task-container-content">
                    <h4 className="new-task-container-content__title">Добавте людей в команду:</h4>
                    <div className="new-task-container-content-buttons">
                    <div className="circle-container">
                    {users?.map((el, index) => 
        <div className="circle" key={el.userId} onMouseEnter={() => handleMouseEnter(el.userId)}>
            {el.url ? 
                <img src={el.url} alt="" className="user-border__img" style={{ 
                    marginLeft: index > 0 ? `${-50*index}%` : 0,
                    zIndex: el.userId === activeId ? 1 : 0,
                    position: 'relative',
                    cursor: 'pointer',
                    border: '1px solid #fff'
                }}/> 
                : <div style={{  
                    marginLeft: index > 0 ? `${-50*index}%` : 0,
                    zIndex: el.userId === activeId ? 1 : 0,
                    position: 'relative',
                    cursor: 'pointer',
                    border: '1px solid #fff'
                 }} 
                 className="user-border__img user-name" >{getUserName(el.name, el.surname)}</div>
            }
        </div>
    )}
                    </div>
                        <div className="ew-task-container-content-buttons__button"
                        style={{
                            marginLeft: `${-5*(users?.length-1)}%`,
                            zIndex: 2
                        }}
                         onClick={() => dispatch(setToggleModalUsers(!active))} >
                        <AdditionUserIcon/>
                        </div>
                    </div>
                </div>
                <button className="new-task-container__buttons" onClick={handleButtonClick}>Добавить задачу</button>
            </div>
            {active && <ModalAddUsers/>}
        </div>
    )
}