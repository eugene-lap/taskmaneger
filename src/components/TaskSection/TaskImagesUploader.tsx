import React, { useState } from 'react';
import './taskSection.scss'
import { UploaderIcon } from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreState } from '../../types';
import { deleteFiles } from '../../redux/action-creators';

interface TaskImagesUploaderProps {
  onSave: (files: File[]) => void;
}

export const TaskImagesUploader: React.FC<TaskImagesUploaderProps> = ({ onSave }) => {
  const dispatch = useDispatch()
  const files = useSelector((state: IStoreState) => state.tasks.files)
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const files: File[] = [];
    const fileList = e.dataTransfer.files;
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList.item(i);
      if (file) {
        files.push(file);
      }
    }
    onSave(files);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onSave(Array.from(e.target.files));
    }
  };

  return (
    <div className="task-images-uploader">
      <div className="task-images-uploader-save">
        <div className="task-images-uploader-save-buttons">
          <h3 className="task-images-uploader-save-buttons__title">Загрузите файл</h3>
          <input className='task-images-uploader-save-buttons__file' type="file" accept="image/*" multiple onChange={handleInputChange} />
        </div>
        <div
        className='task-images-uploader-save-container'
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          border: `2px dashed ${dragging ? 'green' : 'blue'}`,
          padding: '20px',
       }}
      >
        <UploaderIcon/>
        <h3 className="task-images-uploader-save-container__title">Перетащите сюда свои файлы</h3>
        <p className="task-images-uploader-save-container__text">Разрешенные форматы: JPEG, PNG, SVG, GIF, PDF</p>
      </div>
      </div>
      <div className="task-images-uploader-container">
      <h3 className="task-images-uploader-container__title">Загруженные файлы</h3>
      {files.map(el => <label className='task-images-uploader-container__label'>{el.name}</label>)}
      <input type="text" className='task-images-uploader-container__input' />
      <button className='task-images-uploader-container__button' onClick={() => dispatch(deleteFiles())}>Отправить</button>
      </div>
    </div>
  );
};