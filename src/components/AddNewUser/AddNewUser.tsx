import { ChangeEvent, useState } from 'react';
import './addNewUser.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addNewUser } from '../../redux/action-creators';
import { IStoreState } from '../../types';

export const AddNewUser = () => {
    const [nameValue, setNameValue] = useState('');
    const [surnameValue, setSurnameValue] = useState('');
    const [middleNameValue, setMiddleNameValue] = useState('');
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [positionValue, setPositionValue] = useState('');
    const dispatch = useDispatch();
    const team = useSelector((state : IStoreState) => state.user.user.id)

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.target.value);
    };

    const handleSurnameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSurnameValue(e.target.value);
    };

    const handleMiddleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMiddleNameValue(e.target.value);
    };


    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginValue(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value);
    };

    const handlePositionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPositionValue(e.target.value);
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(addNewUser(
            {
                name: nameValue,
                middleName: middleNameValue,
                surname: surnameValue,
                position: positionValue,
                login: loginValue,
                password: passwordValue,
                team: team
            }
        ))
        setNameValue('')
        setMiddleNameValue('')
        setSurnameValue('')
        setLoginValue('')
        setPasswordValue('')
        setPositionValue('')
    };


    return (
        <div className="add-new-user">
            <h3 className="add-new-user__title">Создание нового пользователя</h3>
            <div className="add-new-user-container">
                <div>
                <label className='add-new-user-container__label'>Введите имя пользователя:</label>
                <input type="text" className="add-new-user-container__input" value={nameValue} onChange={handleNameChange} />
                </div>
                <div>
                <label className='add-new-user-container__label'>Введите отчество пользователя:</label>
                <input type="text" className="add-new-user-container__input" value={middleNameValue} onChange={handleMiddleNameChange} />
                </div>
                <div>
                <label className='add-new-user-container__label'>Введите фамилию пользователя:</label>
                <input type="text" className="add-new-user-container__input" value={surnameValue} onChange={handleSurnameChange} />
                </div>
                <div>
                <label className='add-new-user-container__label'>Введите логин пользователя:</label>
                <input type="text" className="add-new-user-container__input" value={loginValue} onChange={handleLoginChange} />
                </div>
                <div>
                <label className='add-new-user-container__label'>Введите пароль пользователя:</label>
                <input type="text" className="add-new-user-container__input" value={passwordValue} onChange={handlePasswordChange} />
                </div>
                <div>
                <label className='add-new-user-container__label'>Введите должность пользователя:</label>
                <input type="text" className="add-new-user-container__input" value={positionValue} onChange={handlePositionChange} />
                </div>
                <button className="add-new-user-container__button" type='submit' onClick={handleSubmit}>Создать</button>
            </div>
        </div>
    )
}