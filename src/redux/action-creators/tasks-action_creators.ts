import { put, takeEvery } from "redux-saga/effects";
import { IFile, IImageTask, IImgs, INewTask, ITask, ITaskPreview, ITaskPreviewResponse, IUpdateActiveTask } from "../../types";
import {
  ADD_IMGS,
  DELETE_IMGS,
  SET_COUNT_OF_PAGES,
  SET_CURRENT_PAGE,
  SET_IMGS,
  ADD_NEW_TASK,
  GET_PREVIEW_TASK,
  SET_PREVIEW_TASK,
  GET_TASK,
  SET_TASK,
  GET_UPDATE_ACTIVE_TASK,
  GET_IMAGES_TASK,
  SET_IMAGES_TASK,
} from "../action-types";
import { toggleModal } from "./ui-action_creators";

export const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setCountOfPages = (countOfPages: number) => ({
  type: SET_COUNT_OF_PAGES,
  countOfPages,
});

export const setImgs = (imgs: IImgs) => (
  {
  type: SET_IMGS,
  imgs
})

export const addImgs = (imgs : IImgs[]) => ({
  type: ADD_IMGS,
  imgs
})

export const deleteImgs = () => ({
  type: DELETE_IMGS
})

export const addNewTask = (task: INewTask) => ({
  type: ADD_NEW_TASK,
  task
})

export const getPreviewTask = (previewTask : ITaskPreviewResponse) => ({
  type: GET_PREVIEW_TASK,
  previewTask
})

export const setPreviewTask = (previewTask : ITaskPreview) => ({
  type: SET_PREVIEW_TASK,
  previewTask
})

export const getTask = (taskId: number) => ({
  type: GET_TASK,
  taskId
})

export const setTask = (task: ITask) => ({
  type: SET_TASK,
  task
})

export const getUpdateActiveTask = (updateActiveTask: IUpdateActiveTask) => ({
    type: GET_UPDATE_ACTIVE_TASK,
    updateActiveTask
})

export const getImagesTask = (taskId : number) => ({
  type: GET_IMAGES_TASK,
  taskId
})

export const setImagesTask = (imagesTask: IImageTask[]) => ({
  type: SET_IMAGES_TASK,
  imagesTask
})

function* fetchAddImgs(action: any){
  const {imgs} = action
  const resp: Response =  yield fetch(
    'http://localhost:8080/images-tasks/upload',
  {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(imgs)
  }
  )
  if(resp.status === 200) {
    yield (put(
      toggleModal(
        {
          showModal: true,
          text: 'Фотографии успешно добавлены',
        }
      )
    ))
  }else{
    yield (put(
      toggleModal(
        {
          showModal: true,
          text: 'Произошла ошибка, попробуйте еще раз',
        }
      )
    ))
  }
}

function* fetchAddNewTask(action: any){
  const {task} = action
  const resp: Response =  yield fetch(
    'http://localhost:8080/tasks/add-task',
  {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(task)
  }
  )
  if(resp.status === 200){
    yield put(
      toggleModal({
        showModal: true,
        text: 'Задача успешно создана',
      })
    ); 
  } else{
    yield put(
      toggleModal({
        showModal: true,
        text: 'Некоректно введенные данные, попробуйте еще раз',
      })
    ); 
  }
}

function* fetchGetPreviewTask(action: any){
  const {previewTask} = action
  const resp: Response =  yield fetch(
    'http://localhost:8080/tasks/all-tasks',
  {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(previewTask)
  }
  )
  if(resp.status === 200){
    const res: ITaskPreview = yield resp.json();
    yield put(setPreviewTask(res))
}
}

function* fetchGetTask(action: any){
  const {taskId} = action
  const resp: Response =  yield fetch(
    `http://localhost:8080/tasks/active?tasksId=${taskId}`,
  {
    method: "GET",
  }
  )
  if(resp.status === 200){
    const res: ITask = yield resp.json();
    yield put(setTask(res));
  }
}

function* fetchGetUpdateActiveTask(action: any){
  const {updateActiveTask} = action
  const resp: Response =  yield fetch(
    'http://localhost:8080/tasks/update-task',
  {
    method: "PUT",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(updateActiveTask)
  }
  )
  if(resp.status === 200){
    yield put(getTask(updateActiveTask.id))
  }
}

function* fetchGetImagesTask(action: any){
  const {taskId} = action
  const resp: Response =  yield fetch(
    `http://localhost:8080/images-tasks/${taskId}`,
  {
    method: "GET",
  }
  )
  if(resp.status === 200){
    const res: IImageTask[] = yield resp.json();
    yield put(setImagesTask(res));
  }
}

export function* watcherUser(){
  yield takeEvery(ADD_IMGS, fetchAddImgs)
  yield takeEvery(ADD_NEW_TASK, fetchAddNewTask)
  yield takeEvery(GET_PREVIEW_TASK, fetchGetPreviewTask)
  yield takeEvery(GET_TASK, fetchGetTask)
  yield takeEvery(GET_UPDATE_ACTIVE_TASK, fetchGetUpdateActiveTask)
  yield takeEvery(GET_IMAGES_TASK, fetchGetImagesTask)
}