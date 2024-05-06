import { takeEvery } from "redux-saga/effects";
import { IFile, IImgs } from "../../types";
import {
  ADD_IMGS,
  DELETE_IMGS,
  SET_COUNT_OF_PAGES,
  SET_CURRENT_PAGE,
  SET_IMGS,
} from "../action-types";

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

function* fetchAddImgs(action: any){
  const {imgs} = action
  const resp: Response =  yield fetch(
    'http://localhost:8080/images/upload',
  {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(imgs)
  }
  )
}

export function* watcherTask(){
  yield takeEvery(ADD_IMGS, fetchAddImgs)
}