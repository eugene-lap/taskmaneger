import { useSelector } from 'react-redux';
import { Authorization, Modal } from '../../components'
import './AuthPage.scss'
import { IStoreState } from '../../types';
import { useEffect } from 'react';

export const AuthPage = () => {
    const isModal = useSelector((state: IStoreState) => state.ui.modalInfo.showModal
      );
      useEffect(() => {
        const navigation = document.querySelectorAll('.navigation') as NodeListOf<HTMLElement>;
        navigation.forEach(nav => {
            nav.style.display = 'none';
        });
    
      },[])
    return (
        <div className="auth-page">
             {isModal && <Modal/>}
            <Authorization/>
        </div>
    )
}