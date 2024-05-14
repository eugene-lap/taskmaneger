import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { auth, setPasswordStatus } from '../../redux/action-creators';
import { IStoreState } from '../../types';
import { EyeIcon, LoginUserIcon } from '../icons';
import './Authorization.scss';
import { useSelector, useDispatch } from 'react-redux';

export const Authorization = () => {
    const passwordStatus = useSelector((state: IStoreState) => state.ui.passwordStatus);
    const dispatch = useDispatch();
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    useEffect(() => {

    }, [passwordStatus]);

    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginValue(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(auth({
            login: loginValue, 
            password: passwordValue
        }))
    };

    return (
        <form className='form-authorization' onSubmit={handleSubmit}>
            <label className="form-authorization__label">Вход</label>
            <div className="form-authorization-flex">
                <div className="form-authorization-container">
                    <label className="form-authorization-container__label">Логин</label>
                    <input type="text" className="form-authorization__login" value={loginValue} onChange={handleLoginChange} />
                    <button type='button' className="form-authorization-container-button">
                        <LoginUserIcon />
                    </button>
                </div>
                <div className="form-authorization-container">
                    <label className="form-authorization-container__label">Пароль</label>
                    <input type={passwordStatus ? 'password' : 'text'} className="form-authorization__password" value={passwordValue} onChange={handlePasswordChange} />
                    <button type='button' className="form-authorization-container-button"
                        onMouseDown={() => dispatch(setPasswordStatus(!passwordStatus))}
                        onMouseUp={() => dispatch(setPasswordStatus(!passwordStatus))}>
                        <EyeIcon />
                    </button>
                </div>
            </div>
            <div className="button-container-auth">
                <button type='submit' className="form-authorization__button-entry">Войти</button>
            </div>
        </form>
    );
};