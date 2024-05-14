import { useEffect, useState } from 'react';
import './taskSection.scss'
import { UploaderIcon } from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreState } from '../../types';
import { addImgs, deleteImgs, setImgs} from '../../redux/action-creators';
import { Dropzone, FileMosaic } from "@files-ui/react";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import { UploadDropzone } from "react-uploader";
import { Modal } from '../Modal';
const uploader = Uploader({
  apiKey: "free"
});
const options = { 
  multi: true,
  maxFileCount: 3,
 };

export const TaskImagesUploader = () => {
  const dispatch = useDispatch();
  const imgs = useSelector((state: IStoreState) => state.tasks.imgs);
  const tasks = useSelector((state: IStoreState) => state.tasks.task.id)
  const users = useSelector((state: IStoreState) => state.user.user.id)
  const isModal = useSelector((state: IStoreState) => state.ui.modalInfo.showModal)
  const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      };

  const handleSendClick = () => {
    const currentTime = new Date();
    const updatedArray = imgs.map(obj => ({
      ...obj,
      textImgs: inputValue,
      timeAdd: currentTime,
      tasks,
      users
    }));
    if(updatedArray.length !==0){
      dispatch(addImgs(updatedArray))
      dispatch(deleteImgs())
      setInputValue("")
    }
    const targetButton = document.querySelectorAll('.uploader__submitted-file__action');

    targetButton.forEach((link) => { 
      link.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));
  });
  }


  return (
    <div className="task-images-uploader">
      {isModal && <Modal/>}
      <div className="task-images-uploader-save">
        <div className="task-images-uploader-save-buttons">
          <h3 className="task-images-uploader-save-buttons__title">Загрузите файл</h3>
          <UploadButton  uploader={uploader}
                options={options}
                onComplete={files => (files.map(x =>  dispatch(setImgs({
                  nameImgs: String(x.originalFile.originalFileName),
                  urlImgs: String(x.fileUrl)
                }))))}>
          {({onClick}) =>
          <button className='task-images-uploader-save-buttons__file' onClick={onClick}>
                  Выбрать файлы
          </button>}
        </UploadButton>
        </div>
        <UploadDropzone className='task-images-uploader-save-container' uploader={uploader}
                  options={options}
                  onUpdate={files => (files.map(x =>  dispatch(setImgs({
                    nameImgs: String(x.originalFile.originalFileName),
                    urlImgs: String(x.fileUrl)
                  }))))}
                  width="600px"
                  height="375px" />
      </div>
      <div className="task-images-uploader-container">
        <h3 className="task-images-uploader-container__title">Загруженные файлы</h3>
        {imgs.length !== 0  ? imgs?.map(el => <label className='task-images-uploader-container__label'>{el.nameImgs}</label>) : <label className='task-images-uploader-container__label--disable'></label>}
       
        <input type="text" className='task-images-uploader-container__input' value={inputValue} onChange={handleInputChange} />
        <button className='task-images-uploader-container__button' onClick={handleSendClick}>Отправить</button>
      </div>
    </div>
  );
};


