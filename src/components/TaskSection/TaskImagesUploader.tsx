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
const uploader = Uploader({
  apiKey: "free"
});
const options = { multi: true };
interface TaskImagesUploaderProps {
  onSave: (formData: FormData) => void; // Передаем FormData вместо File
}

export const TaskImagesUploader = () => {
  const dispatch = useDispatch();
  const imgs = useSelector((state: IStoreState) => state.tasks.imgs);
  const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      };

  const handleSendClick = () => {
    const currentTime = new Date();
    const tasks = 333; // Пример id задачи
    const senderLastName = 1111; // Пример фамилии отправителя

    const updatedArray = imgs.map(obj => ({
      ...obj,
      textImgs: inputValue,
      timeAdd: currentTime,
      tasks,
      users: senderLastName
    }));
    console.log(updatedArray)
    dispatch(addImgs(updatedArray))
    dispatch(deleteImgs())
    setInputValue("")
  };


  return (
    <div className="task-images-uploader">
      <div className="task-images-uploader-save">
        <div className="task-images-uploader-save-buttons">
          <h3 className="task-images-uploader-save-buttons__title">Загрузите файл</h3>
          <UploadButton  uploader={uploader}
                options={options}
                onComplete={files => (files.map(x => x.fileUrl).join("\n"))}>
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


